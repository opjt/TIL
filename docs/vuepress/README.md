
# Vuepress 시작하기

## 설치

[https://v2.vuepress.vuejs.org/guide/getting-started.html#installation](https://v2.vuepress.vuejs.org/guide/getting-started.html#installation)  

``` sh
yarn create vuepress vuepress-starter
```
위 명령어를 실행하면 vuepress defaultTheme으로 생성하게 됩니다.

대부분의 설정은 docs/.vuepress 안에 있는 config.js를 통하여 수정합니다  
```js
export default defineUserConfig({
    bundler: viteBundler(),
    title: 'Today I Learned',
    theme: defaultTheme({
        // default theme config
        sidebar: getSidebar(), 
        contributors: false,
        sidebarDepth: 1,
        
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
        ],

    }),
    // opjt.guithub.io/TIL/
    base: "/TIL/",

})
```
defaultTheme config설정 [https://ecosystem.vuejs.press/themes/default/config.html](https://ecosystem.vuejs.press/themes/default/config.html)  
### Base url 수정
github page는 기본적으로 repository의 이름이 붙기 때문에 수정이 필요합니다

## 실행
```json
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
```
package.json의 script를 확인하여 `yarn docs:dev` 를 실행합니다

## github 배포 
공식문서 [https://vuepress.github.io/guide/deployment.html#github-pages](https://vuepress.github.io/guide/deployment.html#github-pages)  
`.github/workflows` 폴더 안에 `deploy.yml` 파일을 작성한다

그러면 push하게 될 경우 github action에 의해 자동으로 gh-pages 브렌치에 배포파일이 빌드가 된다
