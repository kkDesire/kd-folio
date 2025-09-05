<script setup lang="ts">
import type { Collections } from '@nuxt/content'

const { locale } = useI18n()

const { data: page } = await useAsyncData('index', async () => {
  const collection = (`index_${locale.value}`) as keyof Collections
  const content = await queryCollection(collection).first()
  return content
}, {
  watch: [locale],
})
</script>

<template>
  <UPage v-if="page">
    <LandingHero :page />
    <UPageSection
      :ui="{
        container: '!pt-0 lg:grid lg:grid-cols-2 lg:gap-8',
      }"
    >
      <LandingAbout :page />
    </UPageSection>
  </UPage>
</template>
