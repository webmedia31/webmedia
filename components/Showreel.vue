<template>
  <div class="showreel-block" @click="showreel">
    Showreel
    <img class="showreel-icon" src="/showreel_icon.svg" alt="Showreel">
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
.showreel-block {
  display: flex;
  align-items: center;
  cursor: default;
  cursor: pointer;
}
.showreel-icon {
  margin: 0 20px;
}
</style>
