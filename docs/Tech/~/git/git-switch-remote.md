# switch Remote branch

우선 원격지 형상을 받아오기 위해 `fetch` 명령어를 사용.

```shell
git fetch -p
```

여기서 `-p`는 `--prune` 옵션으로 원격 저장소에서 이미 삭제된 브렌치/태그를 로컬에서 제거 하는 옵션입니다

> prune는 사전적 의미로는 `치다` 라는 의미를 지니고 있어, 불필요한 것을 쳐낸다로 기억하면 쉬움

## 코드만 보고 싶음

```shell
git checkout origin/feature/foo
```

## 코드 보고 수정까지 하고 싶음

```shell
git switch -t origin/feature/foo # 의 경우 feature/foo 브렌치 생성 후 이동
git checkout -b feature/foo origin/feature/foo # 위와 동일
```
