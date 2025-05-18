import { defineConfig, UserConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
import { VitePressSidebarOptions } from 'vitepress-sidebar/types';



const vitePressOptions: UserConfig = {
  // VitePress의 옵션
  title: "TIL",
  outDir: '../dist',
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
	useTitleFromFileHeading: true,
	useTitleFromFrontmatter: true,
	useFolderLinkFromIndexFile: true
};

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarConfig))
