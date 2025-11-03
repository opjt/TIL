# Verify Interface Compliance

> [uber style guide(원본)](https://github.com/uber-go/guide/blob/master/style.md#verify-interface-compliance)

go에서는 인터페이스에 대해 명시적 구현이 없음.  
반대로 묵시적 인터페이스 구현 형식을 사용함

> 인터페이스에 정의된 모든 메서드를 동일한 시그니처로 가지고 있다면 그 타입은 자동으로 인터페이스를 구현한 것으로 간주됨.

```go
type Notifier interface {
    Notify(msg string)
}

type SlackNotifier struct{}

func (s SlackNotifier) Notify(msg string) {
    fmt.Println("Slack:", msg)
}

// Verify compliance
var _ Notifier = (*SlackNotifier)(nil)

```

`var _ Interface = (*Type)(nil)` 부분은 컴파일 타임에 해당 타입이 인터페이스를 구현했는가?를 강제로 확인 가능.
