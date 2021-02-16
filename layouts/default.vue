<template>
<v-app>
  <Navbar />

  <v-main>
    <v-container>
      <nuxt />
    </v-container>
  </v-main>


<v-btn
      dark
      color="orange darken-2"
      @click="snackbar = true"
    >
      Open Snackbar
    </v-btn>

  <v-snackbar
      v-model="snackbar"
      :timeout="timeout"
      top
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>

{{error}}


</v-app>
</template>

<script>
import notices from '@/utils/notices'

export default {
  name: "default",
  head() {
    return {
      titleTemplate: "%s | Webmedia",
      meta: [{hid: "description",name: "description",content: "Описание страницы в шаблоне"}]
    };
  },
  data: () => ({


    snackbar: false,
    text: 'My timeout is set to 2000.',
    timeout: 2000


  }),
  computed: {
    error() {
      return this.$store.getters.error
    },
  },
  watch: {
    error(firebaseError) {


    console.log(this);
      this.$noticeError(notices[firebaseError.code] || 'Что-то пошло не так')



    }
  }
};
</script>
