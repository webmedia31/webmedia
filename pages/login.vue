<template>
  <div>
    <h1>Вход</h1>
    <UserAuthForm buttonText="Войти" :submitForm="loginUser" />

    <NuxtLink :to="{ path: '/' }">На главную</NuxtLink>
  </div>
</template>

<script>
import UserAuthForm from '@/components/UserAuthForm'
// import notices from "../utils/notices";

export default {
  name: "login",
  layout: "default",
  components: {
    UserAuthForm
  },
  // metaInfo() {
  //   return {
  //     title: this.$title('LoginTitle'),
  //   }
  // },

  data: () => ({
    email: "",
    password: ""
  }),

  methods: {
    loginUser(){
      console.log('Login button pressed');
    }
    // async submitLoginForm() {
    //   if (this.$v.$invalid) {
    //     this.$v.$touch();
    //     return;
    //   }
    //   const formData = {
    //     email: this.email,
    //     password: this.password
    //   }
    //   try {
    //     await this.$store.dispatch('login', formData)
    //     this.$router.push("/");
    //   } catch (e) {}
    // },
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
