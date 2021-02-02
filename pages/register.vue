<template>
  <div>
    <h1>Регистрация</h1>

    <RegisterForm />
  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";
export default {
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
