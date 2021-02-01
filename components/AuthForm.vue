<template>
  <!-- <form class="auth-card" @submit.prevent="submitAuthForm"> -->

  <form class="auth-card" @submit.prevent="submitForm($v)">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>

      <b-field
        label="Email"
        :type="{ 'is-danger': $v.email.$invalid && $v.email.$dirty }"
        :message="{ 'Username is not available': $v.email.$invalid && $v.email.$dirty}"
      >
        <b-input v-model.trim="email"></b-input>
      </b-field>


<!--


      <div class="input-field">
        <input
          id="email"
          type="text"
          v-model.trim="email"
          :class="{
            invalid:
              ($v.email.$dirty && !$v.email.required) ||
              ($v.email.$dirty && !$v.email.email)
          }"
        /> -->
        <label for="email">Email</label>
        <small
          v-if="$v.email.$dirty && !$v.email.required"
          class="helper-text invalid"
          >Введите Email</small
        >
        <small
          v-else-if="$v.email.$dirty && !$v.email.email"
          class="helper-text invalid"
          >Введите корректный Email</small
        >
      </div>

      <div class="input-field">
        <input
          id="password"
          type="password"
          v-model.trim="password"
          :class="{
            invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength)
          }"
        />
        <label for="password">Пароль</label>
        <small
          v-if="$v.password.$dirty && !$v.password.required"
          class="helper-text invalid"
          >Введите пароль</small
        >
        <small
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          class="helper-text invalid"
          >Пароль не должен быть короче
          {{ $v.password.$params.minLength.min }} символов, сейчас
          {{ password.length }}</small
        >
      </div>
      <div class="input-field">
        <input
          id="name"
          type="text"
          v-model.trim="name"
          :class="{ invalid: $v.name.$dirty && !$v.name.required }"
        />
        <label for="name">Имя</label>
        <small
          v-if="$v.name.$dirty && !$v.name.required"
          class="helper-text invalid"
          >Введите Ваше имя</small
        >
      </div>
      <p>
        <label>
          <input v-model="agreement" type="checkbox" />
          <span>С правилами согласен</span>
        </label>
      </p>
    </div>
    <div class="card-action">
      <div>
        <button
          class="btn waves-effect waves-light auth-submit"
          type="submit"
          :disabled="!this.agreement || $v.$anyError"
        >
          {{ buttonText }}
        </button>
      </div>

      <p class="center">
        Уже есть аккаунт?
        <router-link to="/login">Войти!</router-link>
      </p>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  metaInfo() {
    return {
      title: this.$title("RegisterTitle")
    };
  },
  name: "register",
  props: ["submitForm", "buttonText", "hasName"],
  data: () => ({
    email: "",
    password: "",
    name: "",
    agreement: true
  }),
  validations: {
    email: { required, email },
    password: { required, minLength: minLength(6) },
    name: { required },
    agreement: { checked: v => v }
  },
  methods: {

    // async submitRegisterForm() {
    //   console.log("!!!!!!!!!!");
    //   if (this.$v.$invalid) {
    //     this.$v.$touch();
    //     return;
    //   }

    //   const formData = {
    //     email: this.email,
    //     password: this.password,
    //     name: this.name
    //   };

    //   try {
    //     await this.$store.dispatch("register", formData);
    //     this.$router.push("/");
    //   } catch (e) {}
    // }
  }
};
</script>
