import { defineConfig, UserConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';



const vitePressOptions: UserConfig = {
  // VitePress의 옵션
  title: "TIL",
  outDir: '../dist',
  lastUpdated: true,
  head: [
    ['link', {rel: 'icon', href: '/favicon.ico'}]
  ],
  themeConfig: {
    nav: [
      // { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/opjt' }
    ],
    search: {
      provider: 'local'
    }
  }
};

const vitePressSidebarConfig: VitePressSidebarOptions = {
	documentRootPath: 'docs',
	collapseDepth: 2,
	capitalizeFirst: true,
	underscoreToSpace: true,
	manualSortFileNameByPriority: ['instructions.md'],
  excludeFilesByFrontmatterFieldName: "hide", //hide 옵션이 켜져있는 파일 disable
	useTitleFromFileHeading: true, 
	useTitleFromFrontmatter: true,
};

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarConfig))
