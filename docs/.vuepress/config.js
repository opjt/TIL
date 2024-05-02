import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { defineUserConfig } from 'vuepress'
import fs from 'fs'
import path from 'path'

export default defineUserConfig({
    plugins: [
        // https://v2.vuepress.vuejs.org/reference/plugin/search.html#search
        searchPlugin({
          maxSuggestions: 15,

        })
    ],
    bundler: viteBundler(),
    title: 'Today I Learned',
    theme: defaultTheme({
        // default theme config
        sidebar: [
            getChild("vuePress",'vuepress'),
            getChild("알고리즘",'algorithm'),
            getChild("버그픽스",'errorZip'),
            getChild("자격증공부",'license'),
            
        ],
        contributors: false,
        sidebarDepth: 1,
        
        navbar: [
            {
                text: 'Home',
                link: '/',
            },
            { text: 'Github', link: 'https://github.com/opjt/til' },
        ],

    }),
    // 기타 설정 옵션
    base: "/TIL/",

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
            const hasReadme = mdFiles.includes('README.md');

            const children = mdFiles
            .filter(mdFile => mdFile !== 'README.md')
            .map(mdFile => `/${folder}/${mdFile}`);
            const sidebarItem = {
                text: folder,
                children
            };

            // README.md 파일이 있는 경우 link에 해당 폴더로의 링크 추가
            sidebarItem.link = hasReadme ? `/${folder}/` : undefined;

            sidebar.push(sidebarItem);
        }
    });

    console.log(sidebar);
    return sidebar;
}

function getChild(name, dirpath) {

    const docDir = path.resolve(__dirname, '../'); // docs 디렉토리의 경로
    const folderPath = path.join(docDir, dirpath);
    if (!fs.statSync(folderPath).isDirectory()) {
        return;
    }
    
    const files = fs.readdirSync(folderPath);
    const mdFiles = files.filter(file => path.extname(file) === '.md');
    if (mdFiles.length === 0) {
        return; // 폴더 내에 .md 파일이 없으면 건너뜁니다.
    }
    const hasReadme = mdFiles.includes('README.md');

    const children = mdFiles
    .filter(mdFile => mdFile !== 'README.md')
    .map(mdFile => `/${dirpath}/${mdFile}`);
    const sidebarItem = {
        text: name,
        children,
        collapsible: true,
    };

    // README.md 파일이 있는 경우 link에 해당 폴더로의 링크 추가
    sidebarItem.link = hasReadme ? `/${dirpath}/` : undefined;
    return sidebarItem;
}
