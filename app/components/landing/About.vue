<script setup lang="ts">
import type { IndexEnCollectionItem } from '@nuxt/content'

defineProps<{
  page: IndexEnCollectionItem
}>()
</script>

<template>
  <UPageSection
    :title="page.about.title"
    :description="page.about.description"
    :ui="{
      container: '!p-0',
      title: 'text-left font-alegreya font-bold text-xl sm:text-xl lg:text-2xl',
      description: 'text-left mt-3 text-sm sm:text-md lg:text-sm text-muted',
    }"
  />
</template>
