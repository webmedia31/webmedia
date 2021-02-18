<template>
  <NuxtLink :to="link" class="link-wrapper" exact>
    <span class="link-container" :class="{ reverse: back }">
      <span class="link-text">
        {{ text }}
      </span>
      <Arrow :back="back" />
    </span>
  </NuxtLink>
</template>

<script>
export default {
  props: {
    text: String,
    link: Object,
    back: Boolean
  }
};
</script>

<style scoped>
.link-wrapper {
  display: inline-flex;
}
.link-text {
  margin: 0px 15px 0px 0px;
}
.reverse .link-text {
  margin: 0px 0px 0px 15px;
}
.link-container {
  display: flex;
  align-items: center;
}
.reverse {
  flex-direction: row-reverse;
}
</style>
