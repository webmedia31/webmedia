<template>
  <section class="vacancies">
    <ul>
      <li v-for="(job) in jobs" :key="job.id">
        <NuxtLink :to="`/admin/vacancy/${job.id}`" :id="job.id">
          <div class="vacancy_title">{{ job.title }}</div>
        </NuxtLink>
      </li>
    </ul>

    <!-- {{ jobs}} -->
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
