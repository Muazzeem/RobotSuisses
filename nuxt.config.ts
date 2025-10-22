// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  css: ['~/assets/css/main.css'],
  modules: ['@pinia/nuxt', '@nuxtjs/i18n'],
  runtimeConfig: {
    public: {
      HOST: 'http://localhost:8000'
    }
  },
  app: {
    head: {
      script: [
        {
          src: 'https://kit.fontawesome.com/f022d154d0.js',
          crossorigin: 'anonymous'
        }
      ]
    }
  }
})
