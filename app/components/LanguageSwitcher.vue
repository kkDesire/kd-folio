<script setup lang="ts">
const { locale: current, setLocaleCookie, locales } = useI18n()

const currentLocale = computed(() => {
  return locales.value.find(locale => locale.code === current.value)
})

watch(current, (newLocale) => {
  setLocaleCookie(newLocale)
})
</script>

<template>
  <div class="z-99 flex items-center gap-3 rounded-lg px-3 py-1 backdrop-blur-xl card-nav border border-primary/10 bg-primary/5">
    <ClientOnly>
      <div v-for="locale in locales" :key="locale.code" class="cursor-pointer select-none" @click="current = locale.code">
        <span class="font-semibold" :class="locale.code === currentLocale?.code ? 'text-primary' : 'text-primary/50'">
          {{ locale.code }}
        </span>
      </div>
    </ClientOnly>
  </div>
</template>

<style scoped>

</style>
