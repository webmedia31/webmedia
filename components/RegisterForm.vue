<template>
  <!-- <form class="auth-card" @submit.prevent="submitAuthForm"> -->

  <form class="auth-card" @submit.prevent="submitRegisterForm">
    <div class="card-content">
      <span class="card-title">Домашняя бухгалтерия</span>

      <b-field
        label="Email"
        :type="{ 'is-danger': $v.email.$invalid && $v.email.$dirty }"
        :message="{
          'Введиет Email': $v.email.$dirty && !$v.email.required,
          'Введите корректный Email': $v.email.$dirty && !$v.email.email
        }"
>
        <b-input v-model.trim="email"></b-input>
      </b-field>



      <b-field
        label="Пароль"
        :type="{ 'is-danger': $v.password.$dirty && $v.password.$invalid }"
        :message="{
          'Введиет пароль': $v.password.$dirty && !$v.password.required,
          '`Пароль не должен быть короче {{ $v.password.$params.minLength.min }} символов, сейчас {{ password.length }}`': $v.password.$dirty && !$v.password.minLength,
        }">
        <b-input v-model.trim="password"></b-input>
      </b-field>






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

        <b-button
          class="btn"
          :disabled="!this.agreement || $v.$anyError"
          type="is-info"
          native-type="submit"
        >
          Зарегистрироваться
        </b-button>

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




    async submitRegisterForm() {

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
