<template>
  <form class="auth-card" @submit.prevent="submitLoginForm">
    <div class="card-content">

      <b-field
        label="Email"
        :type="{ 'is-danger': $v.email.$invalid && $v.email.$dirty }"
        :message="{
          'Введиет Email': $v.email.$dirty && !$v.email.required,
          'Введите корректный Email': $v.email.$dirty && !$v.email.email
        }">
        <b-input v-model.trim="email"></b-input>
      </b-field>


      <b-field
        label="Пароль"
        :type="{ 'is-danger': $v.password.$dirty && $v.password.$invalid }"
        :message="{
          'Введиет пароль': $v.password.$dirty && !$v.password.required,
          'Пароль не должен быть короче 6  символов': $v.password.$dirty && !$v.password.minLength,
        }">
        <b-input v-model.trim="password"></b-input>
      </b-field>

      <b-button
          class="btn"
          :disabled="$v.$anyError"
          type="is-info"
          native-type="submit"
        >
          Войти
        </b-button>
    </div>
  </form>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";

export default {
  data: () => ({
    email: "",
    password: "",
  }),
  validations: {
    email: { required, email },
    password: { required },
  },
  methods: {

    async submitLoginForm() {

        console.log('!!!!!!!!!!!!!!');

        this.$v.$touch();

        console.log("email dirty: " + this.$v.email.$dirty);
        console.log("email invalid: " + this.$v.email.$invalid);
        console.log("error: " + this.$v.email.$error);

        console.log(this.$v);

        return;



      // console.log("!!!!!!!!!!");
      // if (this.$v.$invalid) {
      //   this.$v.$touch();
      //   return;
      // }

    //   const formData = {
    //     email: this.email,
    //     password: this.password,
    //     name: this.name
    //   };

    //   try {
    //     await this.$store.dispatch("register", formData);
    //     this.$router.push("/");
    //   } catch (e) {}
    }
  }
};
</script>
