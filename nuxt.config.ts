import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    '@pinia/nuxt',
  ],
  css: [
    '@/assets/scss/index.scss',
  ],
  // vite: {
  //   server: {
  //     hmr: {
  //       protocol: 'ws',
  //       host: 'localhost'
  //     }
  //   }
  // }
})
