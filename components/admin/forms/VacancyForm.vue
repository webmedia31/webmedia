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
    <!-- <v-text-field
      v-model="alias"
      :error-messages="vacancyAliasErrors"
      label="Алиас URL"
      required
      disabled
      @input="$v.alias.$touch()"
      @blur="$v.alias.$touch()"
    ></v-text-field> -->

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
    <v-btn class="mr-4" color="success" @click="submitVacancyForm">
      Сохранить
    </v-btn>

    <!-- CANCEL BUTTON -->
    <v-btn class="mr-4" @click="onCancel">
      Отмена
    </v-btn>
  </form>
</template>

<script>
import { required } from "vuelidate/lib/validators";
import translit from "@/filters/translit.filter";

import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    vacancy: {
      title: "",
      content: "",
      published: false
    }
  }),
  validations: {
    vacancy: {
      title: { required },
      content: { required }
    },
    // alias: { required }
  },

  computed: {
    // vacancy() {
    //   if(Object.keys(this.$store.getters["jobs/editingJob"]).length === 0) {
    //     return {
    //       title: "",
    //       content: "",
    //       published: false
    //     }
    //   } else {
    //   this.$store.getters["jobs/editingJob"]
    //     // return Object.assign({}, this.$store.getters["jobs/editingJob"])

    //   }
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
    },
    // vacancyAliasErrors() {
    //   const errors = [];
    //   if (!this.$v.alias.$dirty) return errors;
    //   !this.$v.alias.required && errors.push("Введите алиас вакансии");
    //   return errors;
    // },

    // alias: {
    //   get() {
    //     return translit(this.vacancy.title);
    //   },
    //   set(newValue) {
    //     this.vacancy.alias = newValue;
    //   }
    // }
  },

  // methods: {
  //   async addNewRecord() {
  //     if (this.$v.$invalid) {
  //       this.$v.$touch();
  //       return;
  //     }

  //     if (this.canCreateRecord) {
  //       try {
  //         await this.$store.dispatch("createRecord", {
  //           categoryId: this.currentCategory,
  //           amount: this.amount,
  //           description: this.description,
  //           type: this.type,
  //           date: new Date().toJSON(),
  //         });
  //         const bill = this.type === 'income'
  //           ? this.info.bill + this.amount
  //           : this.info.bill - this.amount
  //         await this.$store.dispatch('updateInfo', {bill})
  //         this.$notice('Запись успешно создана')
  //         this.$v.$reset()
  //         this.amount = 1
  //         this.description = ''
  //       } catch (e) {
  //         console.log(e);
  //       }
  //     } else {
  //       this.$notice(`Недостаточно средств на счете ( ${this.amount - this.info.bill} )`);
  //     }
  //   },
  // },

  watch: {
    title: function(val) {
      this.vacancy.alias = translit(this.title);
    }
  },

  mounted() {
    //fixed [vuex] Do not mutate vuex store state outside mutation handlers. ERROR BUT FIALS VALIDATION?

    //const jobsData = Object.keys(jobs).map(key => ({...jobs[key], id: key }))



    this.vacancy = Object.assign(this.vacancy, this.$store.getters["jobs/editingJob"])



  },

  methods: {
    async submitVacancyForm() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }

      console.log(this.vacancy.published);

      if (this.vacancy.id) {
        //update vacancy
        const formData = {
          id: this.vacancy.id,
          title: this.vacancy.title,
          content: this.vacancy.content,
          published: this.vacancy.published
        };

        try {
          await this.$store.dispatch("jobs/updateVacancy", formData);
          this.$store.commit('SET_NOTICE', "Запись успешно обновлена");
        } catch (e) {
          this.$store.commit('SET_ERROR', e, { root: true })
        }
      } else {
        // create vacancy
        const formData = {
          title: this.vacancy.title,
          content: this.vacancy.content,
          published: this.vacancy.published
        };



        try {


          await  this.$store.dispatch("jobs/createVacancy", formData);


          // console.log(vacancyCreate);

          // this.$store.commit('SET_NOTICE', "Запись успешно добавлена");



        } catch (e) {
          console.log('!!!!!!!!!!');
          this.$store.commit('SET_ERROR', e, { root: true })
        }




      }
    },

    onCancel() {
      this.$router.push("/admin/vacancy");
    }
  }
};
</script>
