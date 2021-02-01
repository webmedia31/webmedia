<template>
  <div>

    <ValidationObserver v-slot="{ valid }">
    <form>

        <b-field v-if="hasName" label="Имя">
          <b-input v-model="name"></b-input>
        </b-field>
        {{ errors }}







      <ValidationProvider
        name="имя"
        :rules="{ required: true, max: 10 }"
        v-slot="{ errors }"
        :bails="false"
      >
        <input type="text" v-model="userInfo.email">
        <span
          v-for="error in errors"
          :key="error"
        >
          {{ error }}
        </span>
      </ValidationProvider>




      <b-field label="Пароль">
        <b-input type="password" v-model="userInfo.password" password-reveal>
        </b-input>
      </b-field>

      <b-field>
        <p class="control">
          <b-button
            @click="submitForm(userInfo)"
            :disabled="!valid"
            :label="buttonText"
            type="is-primary"
          />
        </p>
      </b-field>
    </form>
    </ValidationObserver>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate';



export default {
  components: {
    ValidationProvider,
    ValidationObserver,
  },
  props: ["submitForm", "buttonText", "hasName"],
  data: () => ({
    valid: false,
    showPassword: false,
    userInfo: {
      email: "",
      password: ""
    }
    // ...validations
  })
};
</script>
