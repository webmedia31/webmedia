<template>
<v-app>
  <v-app-bar app><Navbar /></v-app-bar>


  <v-main>
    <v-container>
      <nuxt />
    </v-container>
  </v-main>

  <v-footer padless>
    <v-col class="text-center"  cols="6">
      <SocialLinks :theme="`light`"/>
    </v-col>
    <v-col class="text-center"  cols="6">
      <Showreel/>
    </v-col>
  </v-footer>

</v-app>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error
    }
  },
  watch: {
    error(firebaseError) {
      console.log(firebaseError);
      this.$noticeError(notices[firebaseError.code] || 'Что-то пошло не так')
    }
  }
};
</script>
