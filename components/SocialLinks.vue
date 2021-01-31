<template>
  <div class="social_links">
    <a href="https://www.instagram.com/webmedia31/" :class="theme" target="_blank">instagram</a>
    &nbsp;/&nbsp;
    <a href="https://facebook.com/" :class="theme" target="_blank">facebook</a>
    &nbsp;/&nbsp;
    <a href="https://vk.com/" :class="theme" target="_blank">вконтакте</a>
  </div>
</template>

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

<style scoped>
.social_links {
  display: flex;
}
.social_links a {
  font-size: 16px;
}
.social_links a.dark {
  color: #000 !important;
}
.social_links a.light {
  color: #FFFCF9 !important;
}


</style>
