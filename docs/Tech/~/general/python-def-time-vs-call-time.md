# 데코레이터와 정의 시점 vs 호출 시점

## 데코레이터 = 문법 설탕

```python
@decorator
def foo(): ...
```

는 `foo = decorator(foo)`와 같다. `decorator`가 함수를 받아서 뭔가(등록만 하거나, 새 함수로 감싸거나)를 리턴하면 그걸로 원래 이름이 덮어써진다.  
원본 함수 객체는 안 변한다`id(foo)`는 그대로.  
바뀌는 건 `foo`라는 이름이 가리키는 대상이거나, 어딘가(딕셔너리/리스트)에 참조가 하나 추가되는 것뿐.

## import는 그냥 파일을 한 번 실행하는 것

`import module`은 `python module.py`랑 똑같이 그 파일의 최상위 코드를 위->아래로 한 번 실행한다(두 번째 import부터는 캐시라 재실행 안 됨).

```python
print("A")
def foo(): print("B (호출해야만 찍힘)")
print("C")
```

import하면 A, C만 찍히고 B는 안 찍힌다 — `def foo(): ...`는 "함수 객체를 만드는 문장"일 뿐, 실행하는 것은 아님

## 정의 시점 vs 호출 시점

- **정의 시점**: `def`/`class`/`=` 문이 인터프리터에 의해 실제로 지나가는 순간. 모듈 최상위면 import 시점, 함수 안이면 그 바깥 함수가 호출될 때마다(매번 새 객체
  생성).
- **호출 시점**: 이미 만들어진 함수 객체를 `()`로 실행시키는 순간.

`@router.get("/path")` 같은 FastAPI 라우터 등록은 정의 시점(서버 부팅 시 import될 때)에 한 번 실행돼서 routes 리스트에 매핑 정보만 쌓아두고, 실제 요청 처리는
나중에 URL이 그 리스트와 매치될 때 핸들러를 호출하는 완전히 별개의 이벤트다.

## 정의 시점에 평가되는 표현식

데코레이터 팩토리의 함수body default argument처럼, "함수가 호출될 때마다 새로 평가될 것 같은" 표현식이 사실은 정의 시점에 딱 한 번만 평가되는 경우가 있다.

```python
def command(self, name):
    registered_at = datetime.now()   # decorator factory 호출 시점(=import 시점)에 딱 한 번 평가
    def decorator(fn):
        self._handlers[name] = (fn, registered_at)
        return fn
    return decorator
```

`_handlers`를 몇 초 뒤에 조회해도 `registered_at`은 계속 등록 당시 값 그대로다.  
유명한 mutable default argument 버그(`def f(x=[])`)도 뿌리가 같다

- `[]`가 매 호출마다 새로 안 만들어지고 `def` 문 실행 시점에 딱 한 번만 만들어져서 모든 호출이 같은 리스트를 공유한다.

고치려면 그 표현식을 "호출될 때마다 실행되는 위치"(wrapper/함수 body 안)로 옮기면 된다:

```python
def decorator(fn):
    def wrapper(*a, **kw):
        called_at = datetime.now()   # wrapper가 호출될 때마다 새로 평가됨
        return fn(*a, **kw)
    return wrapper
```
