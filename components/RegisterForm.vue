<template>
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

    <!-- NAME -->
    <v-text-field
      v-model="name"
      :error-messages="nameErrors"
      :counter="10"
      label="Имя"
      required
      @input="$v.name.$touch()"
      @blur="$v.name.$touch()"
    ></v-text-field>

    <!-- AGREEMENT -->
    <v-checkbox
      v-model="agreement"
      :error-messages="agreementErrors"
      required
      @change="$v.agreement.$touch()"
      @blur="$v.agreement.$touch()"
    >
      <template v-slot:label>
        <div class="agreement-label">
          Я принимаю условия
          <NuxtLink to="/politics" class="politics-link">
            пользовательского соглашения
          </NuxtLink>
        </div>
      </template>
    </v-checkbox>

    <v-btn class="mr-4" @click="submitRegisterForm">
      Зарегистрироваться
    </v-btn>
  </form>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email
} from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    password: { required, minLength: minLength(6) },
    agreement: { checked: v => v }
  },

  data: () => ({
    name: "evgen",
    email: "delirium15@yandex.ru",
    password: "123456",
    showPass: false,
    agreement: true
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
    nameErrors() {
      const errors = [];
      if (!this.$v.name.$dirty) return errors;
      !this.$v.name.maxLength &&
        errors.push("Имя не должно превышать 10 символов");
      !this.$v.name.required && errors.push("Введите имя");
      return errors;
    },
    agreementErrors() {
      const errors = [];
      if (!this.$v.agreement.$dirty) return errors;
      !this.$v.agreement.checked &&
        errors.push("Примите условия, чтобы продолжить");
      return errors;
    }
  },

  methods: {
    async submitRegisterForm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        email: this.email,
        password: this.password,
        name: this.name
      }

      try {
        await this.$store.dispatch('auth/registerUser', formData)
        // this.$router.push("/");
      } catch (e) {}
    },


    clear() {
      this.$v.$reset();
      this.email = "";
      this.password = "";
      this.name = "";
      this.agreement = false;
    }
  }
};
</script>

<style scoped>
.agreement-label {
  font-size: 14px;
  line-height: 15px;
}
.politics-link:hover {
  text-decoration: underline;
}
</style>
