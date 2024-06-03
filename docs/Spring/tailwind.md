---
title: 스프링부트 tailwindcss 적용

---

## npm 설치

src/main/resources/static 디렉토리에서 npm을 설치해준다
```
npm install -D tailwindcss
```
설치가 완료되면 
```
npx tailwindcss init
```
명령어를 입력하여 tailwind.config.js 파일을 생성한다 

## tailwind.config.js 

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', "../templates/**/*.html"],
  theme: {
    extend: {}
  },
  plugins: [require("daisyui")]
};
```
daisyui를 사용하지 않는다면 해당부분은 제외하고 입력한다

## output파일 생성

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```
tailwind.css 파일을 생성한뒤 
```
npx tailwindcss -i tailwind.css -o css/style-output.css
```
명령어를 입력하여 output파일을 생성한다

생성하게 되면 src/main/resources/static/css 에 style-output.css 파일이 생성되는데 해당 파일을 임포트하여 사용하면 된다 

### 참고
[https://daisyui.com/blog/npm-init-daisyui/](https://daisyui.com/blog/npm-init-daisyui/)  
[https://velog.io/@sechan100/tailwind-컴파일하기](https://velog.io/@sechan100/tailwind-%EC%BB%B4%ED%8C%8C%EC%9D%BC-%ED%95%98%EA%B8%B0)