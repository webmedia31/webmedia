<template>
  <section class="admin-page"></section>
</template>

<script>
export default {
  name: "admin-home",
  layout: "admin",

  async fetch({ store }) {
    // for count vacancies label in sidebar
    // if (store.getters["jobs/jobs"].length === 0) {
    //   await store.dispatch("jobs/fetchJobs");
    // }
  }
};
</script>
