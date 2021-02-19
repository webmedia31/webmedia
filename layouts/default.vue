<template>
  <v-app>
    <Navbar />

    <v-main>
      <v-container>
        <nuxt />
      </v-container>
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
