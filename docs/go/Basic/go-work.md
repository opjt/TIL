# Go Work

> `go work`는 여러 개의 `go.mod` 모듈을 하나의 작업 공간(workspace)으로 묶어주는 기능입니다. 이를 통해 모듈 간 의존성을 간편하게 관리할 수 있습니다.

**예시 구조**:

```bash
/project
├── main-app/ (go.mod 있음)
└── shared-lib/ (go.mod 있음)
```

## `go work` 사용법

1. `go work` 초기화

    ```bash
    go work init ./main-app ./shared-lib
    ```

2. 생성된 `go.work` 파일 예시:

    ```bash
    go 1.24.2

    use (
        ./main-app
        ./shared-lib
    )
    ```

## go work이 존재하기 전

> `go work`가 없던 시절(Go 1.17 이하)에는 go.mod의 replace 구문을 통해 로컬 모듈 경로를 수동으로 지정하여야 했습니다.

예시: main-app/go.mod

```go

module github.com/yourname/main-app

go 1.17

require github.com/yourname/shared-lib v0.0.0
replace github.com/yourname/shared-lib => ../shared-lib
```
