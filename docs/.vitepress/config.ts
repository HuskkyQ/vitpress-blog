import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Sevan_Huskky's Blog",
  description: 'Learning Records',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '建站相关',
        items: [
          { text: '如何建站', link: '/deploy' },
          { text: 'Getting Started', link: '/getting-started' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
      {
        text: '鸿蒙学习记录',
        items: [
          {
            text: '基本语法概述',
            link: '/hormonyos/base-syntax',
          },
        ],
      },
      {
        text: 'Examples2',
        items: [{ text: 'Get Start', link: '/getting-started' }],
      },
    ],

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
})
