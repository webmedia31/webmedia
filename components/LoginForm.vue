<template>
  <div>

    <form @submit.prevent="submitLoginForm(userInfo)">
      <div class="card-content">

        <div class="input-field">
          <input
            id="email"
            type="text"
            v-model.trim="userInfo.email"
            :class="{invalid:($v.userInfo.email.$dirty && !$v.userInfo.email.required) || ($v.userInfo.email.$dirty && !$v.userInfo.email.email)}"
          />
          <label for="email">Email</label>
          <small v-if="$v.userInfo.email.$dirty && !$v.userInfo.email.required" class="helper-text invalid">Введите Email</small>
          <small v-else-if="$v.userInfo.email.$dirty && !$v.userInfo.email.email" class="helper-text invalid">Введите корректный Email</small>
        </div>


        <div class="input-field">
          <input
            id="password"
            type="password"
            v-model.trim="userInfo.password"
            :class="{invalid:($v.userInfo.password.$dirty && !$v.userInfo.password.required) || ($v.userInfo.password.$dirty && !$v.userInfo.password.minLength),}"/>
          <label for="password">Пароль</label>
          <small
            v-if="$v.userInfo.password.$dirty && !$v.userInfo.password.required"
            class="helper-text invalid"
            >Введите пароль</small>
          <small
            v-else-if="$v.userInfo.password.$dirty && !$v.userInfo.password.minLength"
            class="helper-text invalid"
            >Пароль не должен быть короче {{$v.userInfo.password.$params.minLength.min}} символов, сейчас {{userInfo.password.length}}</small>
        </div>
      </div>

      <div class="card-action">
        <div>
          <button
            class="btn waves-effect waves-light auth-submit"
            type="submit">
            Войти
          </button>
        </div>

        <p class="center">
          Нет аккаунта?
          <NuxtLink :to="{name: 'register'}">Зарегистрироваться</NuxtLink>
        </p>
      </div>
    </form>

  </div>
</template>

<script>
import { email, required, minLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    userInfo: {
      email: "",
      password: ""
    }
  }),
  validations: {
    userInfo: {
      email: { required, email },
      password: { required, minLength: minLength(6) }
    }
  },
  methods: {
    async submitLoginForm(userInfo) {
      console.log(userInfo);

      console.log(this.$v);

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
