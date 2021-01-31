<template>
  <section>
    <h1>
      Хотите работать и развиваться в сфере digital?
      <span class="dark">С радостью поможем и будем развиваться вместе!</span>
    </h1>

    <h2>Вакансии</h2>
    <ul>
      <li v-for="(job, key) in jobs" :key="key">
        <div class="vacancy_title">{{ job["ru-RU"].title }}</div>
        <div class="vacancy_description" v-html="job['ru-RU'].content"></div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  async fetch({ store }) {
    if (store.getters["jobs/jobs"].length === 0) {
      await store.dispatch("jobs/fetchJobs");
    }
  },
  computed: {
    jobs() {
      return this.$store.getters["jobs/jobs"];
    }
  }
};
</script>
