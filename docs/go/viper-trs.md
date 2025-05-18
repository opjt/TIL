# Viper SetEnvKeyReplacer

[Viper](https://github.com/spf13/viper)는 env 파일이나 환경변수를 쉽게 사용하기 위한 go의 오픈소스 라이브러리다

```go
os.Getenv("APP_ENV")
```

물론 go에서는 위와 같은 방식으로 환경변수를 읽어올 수 있습니다.  
하지만 사용해야 하는 변수가 여러개일 경우 하나하나 `Getenv`를 하진 않을 것.

## SetEnvKeyReplacer

> 위 기능은 오로직 환경변수에서만 동작합니다.

```go
// APP_GO=test
viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
viper.GetString("APP.GO")
```

환경변수에 `APP_GO` 라는 키가 있을때 위 메서드를 사용하면 `APP.GO`로 불러올 수 있게 합니다.  


## 환경변수와 중첩 구조체 `Unmarshal`

`viper.Unmarshal(&env)`를 사용할 때, 구성 파일(`.env.yaml`, `.json`, `.toml` 등)을 `viper.ReadInConfig()`로 읽은 경우에는 **중첩 구조체**도 자동으로 매핑됩니다:

```go
type Env struct {
	App App
	Aws Aws `mapstructure:"AWS"`
}

type Aws struct {
	Port string `mapstructure:"PORT"`
}
```

```yaml
AWS:
  PORT: "8080"
```

위 구조라면 env.Aws.Port는 정상적으로 8080으로 매핑됩니다.

### 하지만 환경변수는 다릅니다

환경변수에서는 계층 구조가 없기 때문에, AWS_PORT=8080처럼 flat하게 선언해도 Unmarshal(&env)가 자동으로 중첩 구조체 필드에 매핑하지 못합니다.

```go
//AWS_PORT=8080
viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
viper.AutomaticEnv()
// 이 상태로는 아래 코드가 작동하지 않습니다.
_ = viper.Unmarshal(&env)
```

`해결 방법`: BindEnv()를 명시적으로 사용  
환경변수를 중첩 필드에 연결하려면, viper.BindEnv()로 수동 매핑을 해줘야 합니다:

```go
viper.SetEnvKeyReplacer(strings.NewReplacer(".", "_"))
viper.AutomaticEnv(다
_ = viper.BindEnv("aws.port")
```

이렇게 하면 환경변수 AWS_PORT가 aws.port로 인식되고, Unmarshal()로 구조체 필드에도 잘 들어갑니다.
