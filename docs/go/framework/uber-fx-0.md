# Uber-fx DI framework

> `fx`는 `Uber`에서 만든 [의존성 주입](../../Tech/~/di.md) 프레임워크 입니다.  
> [https://uber-go.github.io/fx/index.html](https://uber-go.github.io/fx/index.html)

## Why fx

> 왜 `fx`를 사용하는가?

- `fx`는 런타임 시점에 의존성 그래프를 해석하고 주입하여 관리가 편합니다.
  - google에서 만든 `wire`의 경우 명령어를 입력하여 의존성 주입 코드를 생성해줘야함.
  - 의존성 관계가 수정될 때마다 매번 생성해줘야함. -> 관리 포인트 증가
- **Battle-tested**, `fx`는 `Uber`의 거의 모든 Go 서비스의 중추이다. (실전에서 증명이 됨.)

## Fx 구성

### fx.App

> fx 시스템의 생명주기 관리자로서 애플리케이션의 실행과 관리를 수행하며,  
> 동시에 의존성 주입 컨테이너 역할도 수행합니다.

```go
type TestMock struct{}

func NewTestMock() *TestMock {
    fmt.Println("TestMock 생성.")
    return &TestMock{}
}

func main() {
    app := fx.New(fx.Provide(NewTestMock))
    app.Run()
}
```

fx 앱을 생성하고 실행하는 코드입니다.  
실행하면 TestMock 생성 문구가 출력되지 않습니다. fx는 해당 객체가 실제로 필요할 때 생성하기 때문입니다.

### fx.Provide

`fx.Provide`는 의존성 주입에 사용할 생성자 함수를 Fx 애플리케이션에 등록할 때 사용합니다.  
생성자 함수는 필요한 의존성을 인자로 받고, 인스턴스를 반환하는 함수입니다. 이 함수들은 런타임 시점에 호출되어 객체를 생성하고 의존성 그래프를 구성합니다.

#### 주요 특징

- 반환값 중 오류(`error`)가 포함되면, Fx는 애플리케이션 시작 시점에 오류를 감지하고 실행을 중단합니다.
- 같은 타입의 인스턴스는 싱글톤처럼 재사용됩니다.

#### 예시

```go
type Config struct {
    Port int
}

func NewConfig() *Config {
    return &Config{Port: 8080}
}

func NewServer(cfg *Config) *http.Server {
    return &http.Server{
        Addr: fmt.Sprintf(":%d", cfg.Port),
    }
}

func main() {
    app := fx.New(
        fx.Provide(
            NewConfig,  // Config 생성자 등록
            NewServer,  // Server 생성자 등록, Config를 의존성으로 받음
        ),
        fx.Invoke(func(s *http.Server) {
            fmt.Println("서버가 실행됩니다:", s.Addr)
        }),
    )
    app.Run()
}
```
