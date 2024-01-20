import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        start: resolve(__dirname, 'start.html'),
        websitedeveloper: resolve(__dirname, 'websitedeveloper.html'),
        themes: resolve(__dirname, 'themes.html'),
        contact: resolve(__dirname, 'contact.html'),
        welcome: resolve(__dirname, 'welcome.html'),
      },
    },
  },
});
