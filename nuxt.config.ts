import { defineNuxtConfig } from 'nuxt3'
import path from "path"

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@pinia/nuxt',
  ],
  css: [
    '@/assets/scss/index.scss',
  ],
  alias: {
    "@scss": path.resolve(__dirname, "assets/scss/"),
  },
  vite: {
  //   server: {
  //     hmr: {
  //       protocol: 'ws',
  //       host: 'localhost'
  //     }
  //   }
    resolve: {
      extensions: ['.ts', '.js', '.mjs', '.json', '.vue', '.scss'],
    }
  }
})
