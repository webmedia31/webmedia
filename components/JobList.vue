<template>
  <section class="vacancies">
    <ul>
      <li v-for="(job, key) in jobs" :key="key">
        <div class="vacancy_title">{{ job["ru-RU"].title }}</div>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "job-list",
  computed: {
    jobs() {
      return this.$store.getters["jobs/jobs"];
    }
  },

};
</script>
