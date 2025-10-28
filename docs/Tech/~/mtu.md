# MTU (Maximum Transmission Unit)

`MTU`는 네트워크에서 한 번에 전송할 수 있는 최대 데이터 패킷 크기를 의미함.

네트워크 장치가 단일 패킷으로 보낼 수 있는 최대 Byte를 의미하며, 이보다 큰 패킷은 `분할`이라는 과정을 통해 나뉘어 전송됨.

```bash
jtp@dev:~> ip a
1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    link/loopback 00:00:00:00:00:00 brd 00:00:00:00:00:00
    inet 127.0.0.1/8 scope host lo
       valid_lft forever preferred_lft forever
2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP group default qlen 1000
    link/ether bc:24:11:29:01:37 brd ff:ff:ff:ff:ff:ff
    altname enp0s18
    altname ens18
```

`MTU` 를 확인하는 방법은 운영체제 마다 다름
- macOS 의 경우 `ifconfig` 로 확인 가능


일반적으로 `MTU` 값은 1500이 표준, loopback의 경우 물리적 전송이 없기 때문에 제한이 거의 없음 
