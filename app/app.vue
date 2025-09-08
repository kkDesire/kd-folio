<script setup lang="ts">
const { locale } = useI18n()
const colorMode = useColorMode()
const color = computed(() => colorMode.value === 'dark' ? '#020618' : 'white')

useHead({
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: color.value },
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
    { rel: 'manifest', href: '/site.webmanifest' },
  ],
  htmlAttrs: {
    lang: locale.value || 'en',
  },
})

useSeoMeta({
  titleTemplate: '%s - KD Folio',
  ogImage: '/assets/portfolio-light.png',
  twitterImage: '/assets/portfolio-light.png',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <UApp>
    <NuxtLayout>
      <UMain class="relative">
        <NuxtPage />
        <div class="fixed bottom-0 right-0 m-5">
          <LanguageSwitcher />
        </div>
      </UMain>
    </NuxtLayout>
  </UApp>
</template>
