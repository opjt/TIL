# ulimit

리눅스에서 하나의 프로세스가 열 수 있는 소켓의 개수는 몇일까요?

```bash
$ ulimit -n
1024
```

이는 한 프로세스가 열 수 있는 **파일 디스크립터 제한** 에 의해 정해집니다.

`ulimit` 커맨드는 리눅스/유닉스 계열에서 프로세스가 사용할 수 있는 자원 한도를 확인,설정 하는 명령어임.

## user limit

```bash
ubuntu@dev:~$ ulimit -a
real-time non-blocking time  (microseconds, -R) unlimited
core file size              (blocks, -c) 0
data seg size               (kbytes, -d) unlimited
scheduling priority                 (-e) 0
file size                   (blocks, -f) unlimited
pending signals                     (-i) 3527
max locked memory           (kbytes, -l) 122720
max memory size             (kbytes, -m) unlimited
open files                          (-n) 1024
pipe size                (512 bytes, -p) 8
POSIX message queues         (bytes, -q) 819200
real-time priority                  (-r) 0
stack size                  (kbytes, -s) 8192
cpu time                   (seconds, -t) unlimited
max user processes                  (-u) 3527
virtual memory              (kbytes, -v) unlimited
file locks                          (-x) unlimited
```

만약 open files 개수를 수정 하려면

```bash
ulimit -n 개수
```

하지만 이 방법은 쉘을 종료하면 원래 값으로 돌아갑니다  
만약 영구적으로 변경하려면 `/etc/security/limits.conf` 파일 수정

## soft, hard limit

설정은 limit은 `soft`, `hard` 두개로 구분이 되어요일반적으로 `ulimit -n 개수`를 통해 설정하는 것은 `soft` 값을 설정하는 것으로 프로세스가 현재 할당받을 수 있는
리소스의 한계치를 의미해요  
`hard`는 `soft` 한도를 늘릴 수 있는 최대 한도를 의미함.

`soft 한도`는 `hard 한도`를 넘지 않는 선에서 자유롭게 수정이 가능하고, `hard 한도` 를 수정하려면 root권한이 필요해요
