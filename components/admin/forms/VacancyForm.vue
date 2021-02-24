<template>
  <form>
    <!-- VACANCY TITLE -->
    <v-text-field
      v-model="vacancy.title"
      :error-messages="vacancyTitleErrors"
      label="Название вакансии"
      required
      @input="$v.vacancy.title.$touch()"
      @blur="$v.vacancy.title.$touch()"
    ></v-text-field>

    <!-- VACANCY ALIAS -->
    <v-text-field
      v-model="alias"
      :error-messages="vacancyAliasErrors"
      label="Алиас URL"
      required
      disabled
      @input="$v.alias.$touch()"
      @blur="$v.alias.$touch()"
    ></v-text-field>

    <!-- VACANCY CONTENT -->
    <v-textarea
      name="input-7-1"
      label="Текст вакансии"
      v-model="vacancy.content"
      :error-messages="vacancyContentErrors"

    ></v-textarea>

    <!-- PUBLISHED -->
    <v-switch v-model="vacancy.published" :label="`Опубликовать`"></v-switch>

    <!-- SAVE BUTTON -->
    <v-btn class="mr-4" color="success" @click="submitCreateVacancyForm">
      Сохранить
    </v-btn>

    <!-- CANCEL BUTTON -->
    <v-btn class="mr-4" @click="onCancel">
      Отмена
    </v-btn>
  </form>
</template>

<script>
// import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import translit from '@/filters/translit.filter'

export default {
  // mixins: [validationMixin],
  props: {
    vacancy: {
      type: Object,
      required: false,
      default: () => ({
        title: "",
        alias: translit(this.title),
        content: "",
        published: false
      })
    }
  },

  validations: {
    vacancy: {
      title: { required },
      content: { required },

    },
    alias: { required }
  },

  computed: {

    vacancyTitleErrors() {
      const errors = [];
      if (!this.$v.vacancy.title.$dirty) return errors;
      !this.$v.vacancy.title.required && errors.push("Введите название вакансии");
      return errors;
    },
    vacancyContentErrors() {
      const errors = [];
      if (!this.$v.vacancy.content.$dirty) return errors;
      !this.$v.vacancy.content.required && errors.push("Введите текст вакансии");
      return errors;
    },
    vacancyAliasErrors() {
      const errors = [];
      if (!this.$v.alias.$dirty) return errors;
      !this.$v.alias.required && errors.push("Введите алиас вакансии");
      return errors;
    },

    alias: {
        get(){
           return translit(this.vacancy.title)
        },
        set(newValue){
            this.vacancy.alias = newValue;
        }

    }

  },
  watch: {
    title: function (val) {
      this.vacancy.alias = translit(this.title)
    },
  },

  methods: {
    async submitCreateVacancyForm() {


      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        title: this.vacancy.title,
        alias: this.alias,
        content: this.vacancy.content,
        published: this.vacancy.published
      };


console.log(formData);

      // try {
      //   await this.$store.dispatch("vacancy/createVacancy", formData);
      // } catch (e) {}
    },

    onCancel() {
      this.$router.push("/admin/vacancy");
    }
  }
};
</script>
