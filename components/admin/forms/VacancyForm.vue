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

    <!-- VACANCY CONTENT -->
    <v-textarea
      name="input-7-1"
      label="Текст вакансии"
      v-model="vacancy.content"
      :error-messages="vacancyContentErrors"
      @input="$v.vacancy.content.$touch()"
      @blur="$v.vacancy.content.$touch()"
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
import t from '@/filters/translit.filter'

export default {
  // mixins: [validationMixin],
  props: {
    vacancy: {
      type: Object,
      required: false,
      default: () => ({
        title: "",
        content: "",
        published: false
      })
    }
  },

  validations: {
    vacancy: {
      title: { required },
      content: { required }
    }
  },

  // data() {
  //   return {
  //     vacancy: this.vacancy
  //       ? { ...this.vacancy }
  //       : {
  //           title: "",
  //           content: "",
  //           published: false
  //         }
  //   }
  // },

  computed: {
    // vacancy(){
    //   return vacancy: this.vacancy
    //     ? { ...this.vacancy }
    //     : {
    //         title: "",
    //         content: "",
    //         published: false
    //       }
    // },

    vacancyTitleErrors() {
      const errors = [];
      if (!this.$v.vacancy.title.$dirty) return errors;
      !this.$v.vacancy.title.required &&
        errors.push("Введите название вакансии");
      return errors;
    },
    vacancyContentErrors() {
      const errors = [];
      if (!this.$v.vacancy.content.$dirty) return errors;
      !this.$v.vacancy.content.required &&
        errors.push("Введите текст вакансии");
      return errors;
    }
  },

  methods: {
    async submitCreateVacancyForm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      const formData = {
        title: this.vacancy.title,
        content: this.vacancy.content,
        published: this.vacancy.published
      };



      // cyrillicToTranslit().transform(formData.title, "_")
      console.log(formData);

console.log(formData.title);

console.log( t(formData.title, this.lang) );

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
