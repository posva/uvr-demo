<script lang="ts" setup>
import { useRoute } from 'vue-router/auto'
const route = useRoute('/docs/[lang]/[...pathMatch]')
</script>

<template>
  <div>
    <h1>Docs - About</h1>
    <p>Lang: {{ route.params.lang }}</p>
    <p>Path: {{ route.params.pathMatch }}</p>
    <hr />
    <RouterLink
      :to="{
        name: '/docs/[lang]/',
        params: { lang: route.params.lang },
      }"
      >Back to <code>/docs/{{ route.params.lang }}</code></RouterLink
    >
  </div>
</template>
