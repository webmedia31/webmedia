<template>
  <v-row class="mb-6" no-gutters>
    <v-col md="4" offset-md="4">
      <h1>Регистрация</h1>

      <v-card class="pa-2" outlined tile>
        <RegisterForm />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "register",
  head() {
    return {
      title: "Регистрация"
    };
  },
  methods: {
    registerUser($v) {
      console.log("Register button pressed");
      if ($v.$invalid) {
        $v.$touch();

        console.log("email dirty: " + $v.email.$dirty);
        console.log("email invalid: " + $v.email.$invalid);
        console.log("error: " + $v.email.$error);

        console.log($v);

        return;
      }
    }
  }
};
</script>
