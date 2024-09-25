// https://vitepress.dev/guide/custom-theme
import { h } from 'vue';
import DefaultTheme from 'vitepress/theme';
import matomo from '@datagouv/vitepress-plugin-matomo';
import './style.css';

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    matomo({
      router: router,
      siteID: 22,
      trackerUrl: 'https://stats.ircam.fr/',
    });
  },
};
