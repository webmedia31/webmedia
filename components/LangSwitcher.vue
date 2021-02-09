<template>
  <section class="lang-switcher d-flex align-center"
           :class="theme">
    <span class="lang-btn">RU</span>
    <span class="lanf-divider">&nbsp;/&nbsp;</span>
    <span class="lang-btn">EN</span>
  </section>
</template>

<style scoped lang="scss">
.lang-switcher,
.lang-btn {
  color: #000;
}
.lang-btn {
  cursor: pointer;
}
</style>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'dark' // 'light' || 'dark'
    }
  },
}
</script>

<style scoped lang="scss">



.lang-switcher.dark * {
  color: #000 !important;
}
.lang-switcher.light * {
  color: #FFFCF9 !important;
}
</style>
