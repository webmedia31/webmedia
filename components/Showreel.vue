<template>
  <div class="showreel_block" @click="showreel">
    Showreel
    <img class="showreel_icon" src="/showreel_icon.svg" alt="Showreel">
  </div>
</template>

<script>
export default {
  methods: {
    showreel() {
      alert('показать модалку')
    }
  },
}
</script>

<style scoped>
.showreel_block {
  display: flex;
  align-items: center;
  cursor: default;
}
.showreel_icon {
  margin: 0 20px;
}
</style>
