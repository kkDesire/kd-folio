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
    defaultLocale: 'en',
    strategy: 'no_prefix',
  },

  icon: {
    customCollections: [
      {
        prefix: 'custom',
        dir: './app/assets/icons',
      }
    ],
  },

  nitro: {
    prerender: {
      routes: ['/',],
      crawlLinks: true,
    },
  },

  fonts: {
    defaults: {
      weights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
  },
})
