import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        // default theme config
        navbar: [
          {
            text: 'Home',
            link: '/',
          },
        ],
      }),
    // 기타 설정 옵션
    base: "/til/"
})
