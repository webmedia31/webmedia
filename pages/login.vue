<template>
  <div>
    <h1>Вход</h1>
    <LoginForm />

    <NuxtLink :to="{ path: '/' }">На главную</NuxtLink>
  </div>
</template>

<script>
// import notices from "../utils/notices";

export default {
  name: "login",
  head() {
    return {
      title: "Вход"
    }
  },

  mounted() {
    // if (notices[this.$route.query.message]) {
    //   this.$notice(notices[this.$route.query.message])
    // }
  }
};
</script>

<style lang="scss" scoped>
.card {
  margin: 70px auto;
  width: 400px;
  max-width: 90%;
  background: #000;
  border: 1px solid #ccc;
}
.auth-submit {
  background: transparent;
}
</style>
