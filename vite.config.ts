import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import VueRouter from 'unplugin-vue-router/vite'
import Vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import Markdown from 'unplugin-vue-markdown/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // must be before Vue
    VueRouter({
      logs: true,
      routesFolder: [
        'src/pages',
        {
          src: 'src/pages/docs',
          extensions: ['.md', '.vue'],
          path: 'docs/[lang]/',
        },
      ],
    }),
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Markdown({}),
    VueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
