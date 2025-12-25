// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Blog Test',
      link: [
        {
          rel: 'preload',
          href: '/fonts/Poppins-Regular.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
      ]
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
    format: ['avif', 'webp'],
    domains: [
      'http://lorempixel.com',
      'https://picsum.photos'
    ]
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  runtimeConfig: {
    apiBase: process.env.NUXT_API_BASE || 'https://6082e3545dbd2c001757abf5.mockapi.io',
    public: {
      apiPath: process.env.NUXT_PUBLIC_API_PATH || '/qtim-test-work',
    }
  },
})