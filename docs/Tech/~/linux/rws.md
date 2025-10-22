# 리눅스 특수권한(rws)

보통 리눅스 권한은 
- r : read
- w : write
- x : execute

이지만 `x` 자리에 `s` 가 들어가는 경우가 있다.  

## setuid (Set User ID)

목적
- 실행파일을 그 파일의 소유자 권한으로 실행하게 함.

표시
- `-rwsr-xr-x`: 소유자 위치에 s -> setuid 실행 가능
- `'-rwSr-xr-x`: `S`의 경우 setuid는 설정되어 있지만 실행 비트(x)가 꺼져있음 (비정상적)
- 숫자(octet): 4000 (ex: chmod 4755 file > setuid + rwxr-xr-x)


**자주보이는 setuid 바이너리**
- `/usr/bin/passwd`:  사용자 비밀번호 변경 시 암호DB(예: /etc/shadow) 에 쓰기 권한이 필요하기 때문에 root 권한으로 동작.

## setgid (Set Grop ID)

목적
- 파일: 실행파일을 그 파일의 그룹 권한으로 실행하게 함.
- 그룹: 디렉토리에 setgid가 있을 경우 해당 디렉토리 안에 새로 생성된 파일, 디렉토리는 부모 디렉토리 그룹을 상속 받음.

표시 
- 파일 : `-rwxr-sr-x`
- 그룹 : `drwxr-sr-x` 
- 숫자(octet): 2000 (ex: chmod 2755 dir)




