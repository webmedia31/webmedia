<template>
  <form class="auth-card" @submit.prevent="submitLoginForm(userInfo)">
    <div class="card-content">



<a class="waves-effect waves-light btn">button</a>


<div class="row">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s6">
          <i class="material-icons prefix">account_circle</i>
          <input id="icon_prefix" type="text" class="validate">
          <label for="icon_prefix">First Name</label>
        </div>
        <div class="input-field col s6">
          <i class="material-icons prefix">phone</i>
          <input id="icon_telephone" type="tel" class="validate">
          <label for="icon_telephone">Telephone</label>
        </div>
      </div>
    </form>
  </div>

      <!-- <b-field
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

      <b-button
          class="btn"
          :disabled="$v.$anyError"
          type="is-info"
          native-type="submit"
        >
          Войти
        </b-button> -->
    </div>
  </form>
</template>

<script>
import { email, required } from "vuelidate/lib/validators";

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
      password: { required },
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
