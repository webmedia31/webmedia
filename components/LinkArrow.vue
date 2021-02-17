<template>
  <NuxtLink :to="`/articles/` + `some-article-alias`">
    {{ text }}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    text: String,
    link: Object
  }
}
</script>
