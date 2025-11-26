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
          { text: 'Amplitude modulation', link: '/basics/amplitude-modulation-synthesis.md' },
          { text: 'Encapsulating logic', link: '/basics/encapsulating-logic.md' },
          { text: 'Reusable feedback delay', link: '/basics/reusable-feedback-delay.md' },
        ],
      },
      {
        text: 'Scheduling',
        items: [
          { text: 'Timing and Scheduling', link: '/scheduling/timing-and-scheduling.md' },
          { text: 'Granular Synthesis', link: '/scheduling/granular-synthesis.md' },
          { text: 'Step Sequencer', link: '/scheduling/step-sequencer.md' },
        ],
      },
      {
        text: 'Ecosystem',
        items: [
          { text: '@ircam/sc-components', link: 'https://ircam-ismm.github.io/sc-components/' },
          { text: '@ircam/sc-scheduling', link: 'https://www.npmjs.com/package/@ircam/sc-scheduling' },
          { text: '@ircam/sc-loader', link: 'https://www.npmjs.com/package/@ircam/sc-loader' },
          { text: '@ircam/sc-utils', link: 'https://www.npmjs.com/package/@ircam/sc-utils' },
          { text: 'node-web-audio-api', link: 'https://www.npmjs.com/package/node-web-audio-api' },
          { text: 'soundworks', link: 'https://soundworks.dev' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ircam-ismm/webaudio-tutorials' }
    ]
  }
})
