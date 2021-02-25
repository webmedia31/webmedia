<template>
  <v-app>
    <Navbar />

    <v-main>
      <nuxt />
    </v-main>

    <Snackbar />

  </v-app>
</template>

<script>


export default {
  name: "default",
  head() {
    return {
      titleTemplate: "%s | Webmedia",
      meta: [{hid: "description", name: "description", content: "Описание страницы в шаблоне"}]
    };
  },
};
</script>
