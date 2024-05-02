---
title: powerShell ExecutionPolicy정책
---

# powerShell ExecutionPolicy정책

```
yarn : 이 시스템에서 스크립트를 실행할 수 없으므로 C:\Users\kiaho\AppData\Roaming\npm\yarn.ps1 파일을 로드할 수 없습니다. 자세한 내용은 about_Execution_Policies(https://go.microsoft.com/fwlink/?LinkID=13 
5170)를 참조하십시오.
위치 줄:1 문자:1
+ yarn
+ ~~~~
    + CategoryInfo          : 보안 오류: (:) [], PSSecurityException
    + FullyQualifiedErrorId : UnauthorizedAccess
```

해당 에러는 powerShell에서 실행정책에 대한 권한이 없어서 발생하는 오류이다  

### 해결방법
1. window powerShell을 관리자 권한 모드로 실행시킨다
2. 아래 명령어 실행
```shell
Set-ExecutionPolicy RemoteSigned
``` 
[https://learn.microsoft.com/ko-kr/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4](https://learn.microsoft.com/ko-kr/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4)

