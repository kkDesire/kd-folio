export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/ui',
    '@nuxt/content',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt',
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      {
        code: 'en',
        file: 'en-US.ts',
      },
      {
        code: 'fr',
        file: 'fr-FR.ts',
      },
    ],
    defaultLocale: 'fr',
  },

  nitro: {
    prerender: {
      routes: [
        '/',
      ],
      crawlLinks: true,
    },
  },
})
