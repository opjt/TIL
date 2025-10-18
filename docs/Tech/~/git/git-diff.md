# git diff

간혹 cli 환경에서 커맨드를 통해 git 변경이력을 확인하고 싶을 때가 있다.

```bash
# 현재 작업 디렉토리와 스테이징 차이 (아직 add 하지 않은 변경사항)
git diff
# 현재 작업 디렉토리와 마지막 작업(HEAD) 간의 차이
git diff HEAD
```

커밋 마다 변경이력 확인하는 경우

```bash
git log -p
```
