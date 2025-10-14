# Linux ldd

리눅스에서 `ldd` 명령어는 실행파일(또는 공유 라이브러리)이 어떤 공유 라이브러리(shared library, `.so`)에 의존하는지를 보여주는 명령어입니다.

사용 예시

``` shell
$ which ls
/usr/bin/ls
$ ldd /usr/bin/ls
	linux-vdso.so.1 (0x00007ffc93c81000)
	libselinux.so.1 => /lib/x86_64-linux-gnu/libselinux.so.1 (0x00007d1fe0411000)
	libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00007d1fe0000000)
	libpcre2-8.so.0 => /lib/x86_64-linux-gnu/libpcre2-8.so.0 (0x00007d1fe0352000)
	/lib64/ld-linux-x86-64.so.2 (0x00007d1fe0473000)
```


## 공유 라이브러리 (shared Library)

공유 라이브러리는 말 그대로 여러 프로그램이 함께 사용할 수 있는 라이브러리(코드 집합체)이다.  
- 리눅스에서는 보통 `.so`(shared object)
- 윈도우에서는 `.dll`(dynamic link library)라고 부름

예를 들면 `printf()` 함수는 거의 모든 c 프로그램에서 사용하는데 프로그램마다 `printf()`의 구현을 전부 복사해 넣으면?
- 프로그램 크기가 커짐
- 수정 시 전부 다시 빌드해야 함 

그래서 리눅스에서는 `libc.so.6` 같은 **공유 라이브러리**에 두고 런타임에 공유해서 링크하는 것  

::: info libc.so.6가 뭔가요?
`libc.so.6`는 **glibc(=GNU C Library)** 의 핵심적인 부분 중 하나로 C언어로 작성된 프로그램이 동작하는데 필요한 가장 기본적인 기능을 담고 있음.
:::

## 동적 링커 (dynamic Linker)

ELF 실행 파일을 실행하면, 커널이 바로 `main()`을 호출하지 않고  
먼저 동적 링커(`ex) ld-linux-x86-64.so.2`)를 실행합니다.  

동적 링커는 이와 같은 일을 합니다:

1. 프로그램이 의존하는 `.so` 목록을 확인
2. 각 `.so`를 어디서 찾을지 탐색
3. 메모리에 로드하고 심볼 연결 수행
4. 준비가 끝나면 `main()` 함수 호출

## LD_LIBRARY_PATH 란?

`LD_LIBRARY_PATH`는 **동적 링커**가 라이브러리를 탐색할 때 참고하는 환경 변수입니다.  
즉, 표준 시스템 디렉터리(`lib, usr/lib 등`)보다 우선적으로 탐색됩니다.  

``` bash
export LD_LIBRARY_PATH=/usr/local/lib:/opt/mylibs
./myapp
```

위와 같이 설정하면 `myapp`를 실행할 때 링커는 `/usr/local/lib`, `/opt/mylibs` 경로에서 필요한 `.so` 파일을 우선적으로 찾습니다.  


