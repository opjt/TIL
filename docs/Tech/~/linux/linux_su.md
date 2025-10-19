# linux su 명령어 

`su`(subsitute user) 명령어는 사용자의 권한을 다른 사용자로 전환할 때 사용하는 명령어다.

일반적으로 **root** 권한을 얻기 위해 가장 많이 사용됨.

## root가 되어볼게 얍

``` shell
su
su root
```

두 커맨드는 모두 root 계정으로 전환하는 명령어다 su 뒤에 값을 입력하지 않을 경우 `su root`와 동일하게 동작함.  


## su - 

``` shell
OPTIONS
       -, -l, --login
           Start the shell as a login shell with an environment similar to a real login:

           •   clears all the environment variables except TERM and variables specified by --whitelist-environment

           •   initializes the environment variables HOME, SHELL, USER, LOGNAME, and PATH

           •   changes to the target user’s home directory

           •   sets argv[0] of the shell to '-' in order to make the shell a login shell
```

`man su` 를 입력하면 옵션 값들을 확인할 수 있는데 그중 `-l` 옵션을 살펴보면,  
일반적으로 사용하는 형태는 `su -` 처럼 많이 사용한다 

``` shell
대상 사용자의 로그인 셸(login shell)을 시작하며, 실제 로그인 시와 유사한 환경을 구성합니다:
- TERM과 --whitelist-environment로 지정된 변수들을 제외한 모든 환경 변수를 초기화(삭제) 합니다.
- 환경 변수 HOME, SHELL, USER, LOGNAME, PATH를 새로 설정합니다.
- 대상 사용자의 홈 디렉터리로 이동합니다.
- 셸의 argv[0]을 '-'로 설정하여, 해당 셸이 로그인 셸임을 나타냅니다.
```

`su - ` 는 단순히 사용자만 전환하는 것이 아닌, 완전히 새로운 로그인 환경으로 전환한다는 뜻이다  


