# sysctl

`sysctl`은 리눅스나 유닉스 계열 시스템에서 **커널 파라미터** 를 확인하거나 변경할 때 사용하는 명령어다.

커널 파라미터는 `/proc/sys` 디렉토리에 맵핑되어 있음

```bash
root@pve:~# cd /proc/sys
root@pve:/proc/sys# ls
abi  debug  dev  fs  kernel  net  sunrpc  user  vm
```

예를 들어 `net.ipv4.tcp_syncookies` 설정을 보면,

```bash
root@pve:/proc/sys# sysctl -a | grep syncookies
net.ipv4.tcp_syncookies = 1
root@pve:/proc/sys# cat /proc/sys/net/ipv4/tcp_syncookies
1
```

위 처럼 맵핑되어 있는 걸 알 수 있음

- sysctl의 설정 파라미터들은 계층적 구조를 지님

## 지속적 변경

`sysctl`로 런타임 중에 커널 파라미터를 수정할 수 있지만 이는 재부팅하면 다시 커널 기본값으로 변경되기 때문에, 영구적인 설정을 하기 위해서는 `/etc/sysctl.conf`
파일을 수정해야함
