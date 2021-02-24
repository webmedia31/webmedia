<template>
  <section class="vacancies">
    <ul>
      <li v-for="(job, key) in jobs" :key="key">
        <div class="vacancy_title">{{ job.title }}</div>
      </li>
    </ul>

    <v-expansion-panels>
      <v-expansion-panel v-for="(job, key) in jobs" :key="key">
        <v-expansion-panel-header>
          {{ job.title }}
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <div v-html="job.content"></div>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>



  </section>
</template>

<script>
export default {
  name: "job-list",
  computed: {
    jobs() {
      return this.$store.getters["jobs/jobs"];
    }
  }
};
</script>
