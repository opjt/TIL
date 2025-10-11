# shell

> `Shell`은 커널과 사용자를 연결해주는 인터페이스다  
> 사용자가 입력한 명령을 해석하고 이를 커널에 전달한 후, 커널로부터 받은 출력을 사용자에게 반환합니다.

```shell
# 내가 사용하는 쉘 확인하기
echo $SHELL
# 설치뒌 쉘 목록
cat /etc/shells
```

## login shell, non-login shell

쉘은 사용자가 어떻게 진입했는지에 따라 로그인쉘과 비로그인쉘 환경으로 나눠진다.

### Login Shell

- SSH로 접속한 경우
- `su - user` (대시 `-`붙은 경우)

사용자가 시스템에 `로그인`할 때 최초로 실행되는 쉘.  
시스템은 이 쉘에게 사용자 환경을 초기화하는 작업을 맡긴다

#### 환경설정

로그인쉘의 경우

- `/etc/profile`을 제일 먼저 읽는다
- 유저 홈디렉토리의 `.profile`이 존재하면 읽는다

bash 의 경우

다음 세 파일을 차례대로 확인해서, 처음 존재하는 하나만 실행한다.

1. `~/.bash_profile`
2. `~/.bash_login`
3. `~/.profile`

> [Bash Startup Files](https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html) gnu 공식문서

<!-- https://www.gnu.org/software/bash/manual/html_node/Bash-Startup-Files.html -->

### Non-login Shell

- 이미 로그인된 세션 내에서 새 터미널을 열거나, 쉘을 다시 실행했을 때
- ex) GUI 환경에서 터미널 앱 열기

ssh로 접속한 이후에 bash를 입력하면 비로그인 쉘이 된다.

::: tip  
쉘이 로그인인지 비로그인인지 확인하는 방법  
`echo $0` 앞에 `-`대시가 붙으면 로그인 쉘.  
이것은 POSIX 표준입니다.  
:::

::: warning 비로그인쉘의 경우 `~/.bashrc` 만 읽고 그 외 환경파일은 읽지 않습니다.  
:::
