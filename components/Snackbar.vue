<template>
  <div>
    <v-snackbar v-model="snackbar.visible" :timeout="snackbar.timeout" top>
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn
          color="blue"
          text
          v-bind="attrs"
          @click="snackbar.visible = false"
        >
          Закрыть
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import notices from "@/utils/notices";

export default {
  data: () => ({
    snackbar: {
      visible: false,
      text: "",
      timeout: 3000
    }
  }),
  computed: {
    error() {
      return this.$store.getters.error;
    }
  },
  watch: {
    error(firebaseError) {
      this.$noticeError(notices[firebaseError.code] || "Что-то пошло не так");
    }
  }
}
</script>
