<template>
  <section class="vacancies-page">
    <header>
      <div class="title">Вакансии</div>
      <div class="user"></div>
      <div class="interval">
        <NuxtLink to="/admin/vacancy/create">
          <v-btn class="add-button">
            <v-icon left dark>mdi-plus-circle</v-icon>Добавить вакансию
          </v-btn>
        </NuxtLink>
      </div>
    </header>

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

<style scoped>
.add-button i {
  margin-right: 5px;
}
</style>
