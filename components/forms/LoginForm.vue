<template>
  <div>
    <form>
      <!-- EMAIL -->
      <v-text-field
        v-model="email"
        :error-messages="emailErrors"
        label="E-mail"
        required
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <!-- PASSWORD -->
      <v-text-field
        v-model="password"
        :error-messages="passwordErrors"
        :type="showPass ? 'text' : 'password'"
        name="input-10-1"
        label="Пароль"
        hint="Минимум 6 символов"
        :append-icon="showPass ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPass = !showPass"
        @input="$v.email.$touch()"
        @blur="$v.email.$touch()"
      ></v-text-field>

      <v-btn class="mr-4" @click="submitLoginForm">
        Войти
      </v-btn>
    </form>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  email
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
  },

  data: () => ({
    email: "delirium15@yandex.ru",
    password: "123456",
    showPass: false
  }),

  computed: {
    emailErrors() {
      const errors = [];
      if (!this.$v.email.$dirty) return errors;
      !this.$v.email.email && errors.push("Введите корректный e-mail");
      !this.$v.email.required && errors.push("Введите E-mail");
      return errors;
    },
    passwordErrors() {
      const errors = [];
      if (!this.$v.password.$dirty) return errors;
      !this.$v.password.minLength &&
        errors.push("Пароль должен быть не менее 6 символов");
      !this.$v.password.required && errors.push("Введите пароль");
      return errors;
    },

  },

  methods: {
    async submitLoginForm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password
      }

      try {
        await this.$store.dispatch('auth/loginUser', formData)
        // this.$router.push("/admin");
      } catch (e) {}
    },


    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = ""
    }
  }
};
</script>
