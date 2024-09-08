import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'
import { sitemapPlugin } from '@vuepress/plugin-sitemap';
import { defineUserConfig } from 'vuepress'
import fs from 'fs'
import path from 'path'

export default defineUserConfig({
    plugins: [
        // https://v2.vuepress.vuejs.org/reference/plugin/search.html#search
        searchPlugin({
          maxSuggestions: 15,

        }),
        sitemapPlugin({
            hostname: "https://opjt.github.io/TIL/"
          }),
    ],
    bundler: viteBundler(),
    title: 'Today I Learned',
    theme: defaultTheme({
        // default theme config
        sidebar: [
            {
                text:'vuePress',
                expanded: false,
                collapsible: true,
                children: getChild("vuepress"),
                link: '/vuepress/'
            },
            {
                text:'DAILY🌎',
                collapsible: false,
                children: getChild("daily"),
                // link: '/daily/'
            },
            // getChild("Spring🍃",'Spring',false),
            // getChild("알고리즘💭",'algorithm',false),
            // getChild("버그픽스🐞",'errorZip',false),
            // getChild("자격증공부📋",'license',false),
            
        ],
        contributors: false,
        sidebarDepth: 0,
        
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



function getChild(dirpath) {
    const docDir = path.resolve(__dirname, '../');

    function buildTree(currentDir) {
        const folderPath = path.join(docDir, currentDir);
        
        if (!fs.statSync(folderPath).isDirectory()) {
            return []; // 파일일 경우 빈 배열 반환
        }

        const files = fs.readdirSync(folderPath);
        const mdFiles = files.filter(file => path.extname(file) === '.md');
        const subDirs = files.filter(file => fs.statSync(path.join(folderPath, file)).isDirectory());

        let children = mdFiles.filter(mdFile => mdFile !== 'README.md').map(mdFile => `/${currentDir}/${mdFile}`);
        
        subDirs.forEach(subDir => {
            const subDirPath = path.join(currentDir, subDir);
            children.push({
                text: subDir,
                collapsible: true,
                children: buildTree(subDirPath)
            });
        });

        return children.reverse();
    }

    return buildTree(dirpath);
}
