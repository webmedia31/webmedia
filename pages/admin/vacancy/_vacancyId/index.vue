<template>
  <section class="vacancy-edit-form">
    <header>
      <div class="title">Редактирование вакансии</div>
      <div class="user"></div>
      <div class="interval">

      </div>
    </header>

    <div class="form">
      <VacancyForm :vacancy="loadedVacancy"/>
    </div>

    {{ this.$store.getters['jobs/loadedjob'] }}
  </section>
</template>

<script>


export default {
  name: "vacancy-edit",
  layout: "admin",
  data: () => ({
    loadedVacancy: {
      title: "Сварщик",
      content: "<p>Требования: <br>5 разряд</p>",
      published: true
    }
  }),
  async fetch({ store, params}) {
    const jobId = params.vacancyId
    if (Object.keys(store.getters["jobs/editingJob"]).length === 0) {
      await store.dispatch("jobs/fetchJobdById", jobId);
    }
  },
  beforeRouteLeave (to, from, next) {
    // remove editing job
    this.$store.commit('jobs/SET_EDITINGJOB', {});
    next()
  }
};
</script>
