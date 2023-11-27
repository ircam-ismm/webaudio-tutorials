import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Web Audio Tutorials",
  description: "Set of tutorials on the Web Audio API",

  srcExclude: ['README.md', 'TODOS.md'],
  base: '/webaudio-tutorials/',
  // https://vitepress.vuejs.org/config/app-configs#markdown
  markdown: {
    theme: 'monokai',
    lineNumbers: false,
  },

  // https://vitepress.dev/reference/site-config#ignoredeadlinks
  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
    /^https?:\/\/127.0.0.1/,
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      { text: 'Introduction', link: '/' },
      {
        text: 'First steps',
        items: [
          { text: 'Generalities about the Web', link: '/first-steps/generalities.md' },
          { text: 'Setting up an environment', link: '/first-steps/setting-up-environment.md' },
          { text: 'Create a simple website', link: '/first-steps/simple-website.md' },
        ],
      },
      {
        text: 'Basics',
        items: [
          { text: 'Web Audio API - Introduction', link: '/basics/web-audio-api-introduction.md' },
          { text: 'Oscillators and audio files', link: '/basics/oscillators-and-audio-files.md' },
          { text: 'Ampliture modulation', link: '/basics/amplitude-modulation-synthesis.md' },
          { text: 'Encapsulating logic', link: '/basics/encapsulating-logic.md' },
          { text: 'Reusable feedback delay', link: '/basics/reusable-feedback-delay.md' },
        ],
      }
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
