import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import fs from 'fs'
import path from 'path'

export default defineUserConfig({
    bundler: viteBundler(),
    theme: defaultTheme({
        // default theme config
        sidebar: getSidebar(),
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
        ],

    }),
    // 기타 설정 옵션
    base: "/til/",

})

function getSidebar() {
    const sidebar = [];

    const docDir = path.resolve(__dirname, '../'); // docs 디렉토리의 경로
    const folders = fs.readdirSync(docDir);

    folders.forEach(folder => {
        const folderPath = path.join(docDir, folder);
        if (fs.statSync(folderPath).isDirectory()) {
            const files = fs.readdirSync(folderPath);
            const mdFiles = files.filter(file => path.extname(file) === '.md');
            if (mdFiles.length === 0) {
                return; // 폴더 내에 .md 파일이 없으면 건너뜁니다.
            }
            const children = mdFiles.map(mdFile => `/${folder}/${mdFile}`);
            sidebar.push({
                text: folder,
                children
            });
        }
    });
    console.log(sidebar)
    return sidebar;
}