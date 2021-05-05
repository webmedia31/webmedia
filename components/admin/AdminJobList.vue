<template>
  <section class="vacancies">
    <ul>
      <li v-for="job in jobs" :key="job.id">
        <NuxtLink :to="`/admin/vacancy/${job.id}`" :id="job.id">
          <div class="vacancy_title">{{ job.title }}</div>
        </NuxtLink>
      </li>
    </ul>

    <!-- {{ jobs}} -->

    <v-simple-table dark>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">
              Название
            </th>
            <th class="text-left"></th>
            <th class="text-left">
              Статус
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="job in jobs" :key="job.name">
            <td>{{ job.title }}</td>
            <td>
              <NuxtLink :to="`/admin/vacancy/${job.id}`" :id="job.id">
                <v-btn small icon color="warning">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </NuxtLink>

              <NuxtLink :to="`/admin/vacancy/${job.id}`" :id="job.id">
                <v-btn small icon color="red">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </NuxtLink>
            </td>
            <td>{{ job.published }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </section>
</template>

<script>
export default {
  name: "job-list",

  computed: {
    // getting jobs list from store
    jobs() {
      return this.$store.getters["jobs/jobs"];
    }
  }
};
</script>
