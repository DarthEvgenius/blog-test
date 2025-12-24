// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Blog Test',
    },
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/image',
    '@pinia/nuxt',
  ],
  css: ['@/assets/style/main.css'],
  image: {
    format: ['avif', 'webp']
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.WEB_HOST,
    }
  },
})