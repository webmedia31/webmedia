<template>
  <section class="vacancies-page">
    <div class="new-vacancy">
      <v-btn>
        Добавить вакансию
      </v-btn>

      <v-btn class="mr-4">
      Добавить вакансию
    </v-btn>


    </div>
    <div class="existing-vacancies">
      <JobList />
    </div>
  </section>
</template>

<script>
export default {
  name: 'admin-vacancy',
  layout: 'admin',
  async fetch({ store }) {
    if (store.getters["jobs/jobs"].length === 0) {
      await store.dispatch("jobs/fetchJobs");
    }
  },
}
</script>
