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
            getChild("DAILY🌎",'daily'),
            getChild("Spring🍃",'Spring'),
            getChild("알고리즘💭",'algorithm'),
            getChild("버그픽스🐞",'errorZip'),
            getChild("자격증공부📋",'license'),
            
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

function getChild(name, dirpath) { //TODO: 리팩토리 필요
    const docDir = path.resolve(__dirname, '../'); // docs 디렉토리의 경로
    const startPath = path.join(docDir, dirpath);

    if (!fs.statSync(startPath).isDirectory()) {
        return { text: name, children: [] }; // 폴더가 아니면 빈 children 배열 반환
    }

    const stack = [dirpath]; // 탐색할 디렉토리 경로들을 저장할 스택
    let children = [];

    while (stack.length > 0) {
        const currentDir = stack.pop(); // 현재 탐색할 디렉토리 경로
        const folderPath = path.join(docDir, currentDir);

        const files = fs.readdirSync(folderPath);
        const mdFiles = files.filter(file => path.extname(file) === '.md');
        const subDirs = files.filter(file => fs.statSync(path.join(folderPath, file)).isDirectory());

        // 현재 디렉토리의 .md 파일들을 추가
        children = children.concat(
            mdFiles
                .filter(mdFile => mdFile !== 'README.md')
                .map(mdFile => `/${currentDir}/${mdFile}`)
        );

        // 하위 디렉토리를 스택에 추가
        subDirs.forEach(subDir => {
            stack.push(path.join(currentDir, subDir));
        });
    }

    // .md 파일이 없으면 빈 children 배열 반환
    if (children.length === 0) {
        return { text: name, children: [] };
    }

    const hasReadme = fs.existsSync(path.join(startPath, 'README.md'));

    const sidebarItem = {
        text: name,
        children,
        collapsible: true,
    };

    // README.md 파일이 있는 경우 link에 해당 폴더로의 링크 추가
    sidebarItem.link = hasReadme ? `/${dirpath}/` : undefined;

    return sidebarItem;
}