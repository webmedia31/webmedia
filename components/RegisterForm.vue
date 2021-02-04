<template>
  <form class="auth-card" @submit.prevent="submitRegisterForm">
    <div class="card-content">

      <b-field
        label="Email"
        :type="{ 'is-danger': $v.userInfo.email.$invalid && $v.userInfo.email.$dirty }"
        :message="{
          'Введиет Email': $v.userInfo.email.$dirty && !$v.userInfo.email.required,
          'Введите корректный Email': $v.userInfo.email.$dirty && !$v.userInfo.email.email
        }">
        <b-input v-model.trim="userInfo.email"></b-input>
      </b-field>


      <b-field
        label="Пароль"
        :type="{ 'is-danger': $v.userInfo.password.$dirty && $v.userInfo.password.$invalid }"
        :message="{
          'Введиет пароль': $v.userInfo.password.$dirty && !$v.userInfo.password.required,
          'Пароль не должен быть короче 6  символов': $v.userInfo.password.$dirty && !$v.userInfo.password.minLength,
        }">
        <b-input v-model.trim="userInfo.password"></b-input>
      </b-field>

      <b-field
        label="Имя"
        :type="{ 'is-danger': $v.userInfo.name.$dirty && $v.userInfo.name.$invalid }"
        :message="{'Введиет имя': $v.userInfo.name.$dirty && !$v.userInfo.name.required}">
        <b-input v-model.trim="userInfo.name"></b-input>
      </b-field>

      <p>
        <label>
          <input v-model="userInfo.agreement" type="checkbox" />
          <span>С условиями <NuxtLink no-prefetch class="politics_link" :to="{ path: '/politics' }">политики конфиденциальности</NuxtLink> согласен</span>
        </label>
      </p>


      <b-button
          class="btn"
          :disabled="!this.userInfo.agreement || $v.$anyError"
          type="is-info"
          native-type="submit"
        >
          Зарегистрироваться
        </b-button>
    </div>
  </form>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {

  data: () => ({
    userInfo: {
      email: "",
      password: "",
      name: "",
      agreement: true
    },
  }),
  validations: {
    userInfo: {
      email: { required, email },
      password: { required, minLength: minLength(6) },
      name: { required },
      agreement: { checked: v => v }
    },
  },
  methods: {




    async submitRegisterForm() {

        console.log('!!!!!!!!!!!!!!');

        this.$v.$touch();

        // console.log("email dirty: " + this.$v.email.$dirty);
        // console.log("email invalid: " + this.$v.email.$invalid);
        // console.log("error: " + this.$v.email.$error);

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
