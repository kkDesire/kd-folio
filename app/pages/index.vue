<script setup lang="ts">
import type { IIndexCollection } from '~/types'

const { locale } = useI18n()

const { data: page } = await useAsyncData('index', async () => {
  const collection = (`index_${locale.value}`) as IIndexCollection
  return await queryCollection(collection).first()
}, {
  watch: [locale],
})

useSeoMeta({
  title: page.value?.seo.title || page.value?.title,
  ogTitle: page.value?.seo.title || page.value?.title,
  description: page.value?.seo.description || page.value?.description,
  ogDescription: page.value?.seo.description || page.value?.description,
  ogUrl: 'https://desirek.vercel.app',
  twitterTitle: page.value?.seo.title || page.value?.title,
  twitterDescription: page.value?.seo.description || page.value?.description,
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
      <LandingWorkExperience :page />
    </UPageSection>
    <LandingBlog :page />
    <LandingTestimonials :page />
  </UPage>
</template>
