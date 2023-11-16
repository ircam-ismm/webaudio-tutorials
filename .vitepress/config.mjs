import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web Audio Tutorials",
  description: "Tutorials about the Web Audio API",

  // https://vitepress.vuejs.org/config/app-configs#markdown
  markdown: {
    theme: 'monokai',
    lineNumbers: false,
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      { text: 'Introduction', link: '/introduction.md' },
      {
        text: 'First steps',
        items: [
          { text: 'General principles', link: '/first-steps/general-principles.md' },
          { text: 'Setting up an environment', link: '/first-steps/setting-up-environment.md' },
          { text: 'Create a simple website', link: '/first-steps/simple-website.md' },
        ],
      },
      // {
      //   text: 'Examples',
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ircam-ismm/webaudio-tutorials' }
    ]
  }
})
