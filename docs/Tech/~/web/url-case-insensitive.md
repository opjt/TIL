# HTTP URL Case Sensitivity

HTTP URL 에서 대소문자 구분은 부분별로 다르다.

## 도메인 부분 (HOST)

```perl
https://Opjt.github.io == https://opjt.github.io
```

DNS는 대소문자를 구분하지 않아요

## 경로 부분 (Path)

```perl
https://example.com/App/login
https://example.com/App/Login
```

서버 파일 시스템에 따라 다르게 동작하여 구분함

## 쿼리 파라미터

```perl
https://example.com?User=admin
https://example.com?user=admin
```

[RFC7230](https://www.rfc-editor.org/rfc/rfc7230#page-19)에 따르면 scheme 과 호스트는 대소문자를 구분하지 않으나 다른 구성 요소는 대소문자를 구분하여 비교한다고
명시되어 있음.  
따라서 쿼리 파라미터는 기본적으로 대소문자를 구분함
