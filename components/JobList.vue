<template>
  <section class="vacancies">

    <v-expansion-panels>
      <v-expansion-panel v-for="(job, key) in jobs" :key="key">
        <v-expansion-panel-header>
          <h2>{{ job.title }}</h2>
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

<style scoped>
.vacancies {
  margin: 35px 0px;
}

.v-expansion-panel-header {
  padding: 10px 0px;
}



.v-expansion-panel--active:not(:first-child), .v-expansion-panel--active + .v-expansion-panel {
  margin-top: 0px;
}
.v-expansion-panel-header h2 {
  font-family: "GilroyRegular";
  font-weight: normal;
  font-size: 18px;
  letter-spacing: 0.07em;
  color: #8B8B8B;
  margin: 0px;
}
.theme--dark.v-expansion-panels .v-expansion-panel {
  background-color: transparent;
}

.theme--dark.v-expansion-panels .v-expansion-panel::after {
  border-color: rgba(255, 255, 255, 0.2);
}


</style>
