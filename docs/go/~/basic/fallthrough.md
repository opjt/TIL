# fallthrough keyword

go의 키워드는 25개 정도로 다른 언어에 비해 매우 적다  
이중 거의 처음보다싶은 키워드가 있는데 바로 `fallthrough`다

## 멈춰버려

다른 언어와 달리 `go`의 switch는 **자동 break** 즉, case 하나를 실행하면 자동으로 브레잌이 되어버린다

만약 C처럼 밑으로 쭉 흘러내려가는(fall through) 동작을 하려면 `fallthrough`를 쓰면 된다 (정말 직관적)

```go
package main

import "fmt"

func main() {
    n := 2

    switch n {
    case 1:
        fmt.Println("one")
    case 2:
        fmt.Println("two")
        fallthrough
    case 3:
        fmt.Println("three")
    default:
        fmt.Println("default")
    }
}
```

결과

> two  
> three

**주의점**

- fallthrough는 다음 케이스 하나만 넘어갈 수 있음
- fallthrough가 되면 다음 case의 조건은 검사 안함
