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
        sidebar: {
            '/guide/': [
              {
                text: 'Guide',
                children: ['/guide/introduction.md', '/guide/getting-started.md'],
              },
            ],
            '/reference/': 'heading',
          },
        }),
    // 기타 설정 옵션
    base: "/til/"
})
