<template>
  <v-app>
    <div class="admin-layout">
      <AdminSidebar />

      <article>
        <nuxt />
      </article>
    </div>
  </v-app>
</template>

<script>
export default {
  name: "default",
  head() {
    return { titleTemplate: "%s | Админ панель Webmedia" };
  },

  // async mounted() {
  //   if (this.$store.getters["jobs/jobs"].length === 0) {
  //     await this.$store.dispatch("jobs/fetchJobs");
  //   }
  // }
};
</script>

<style>
.admin-layout article {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 18%;
  overflow: auto;
  border-left: 2px solid #2a3843;
  padding: 0px 22px;
  background-color: #202b33;
}
.admin-layout article header {
  margin-bottom: 30px;
}
.admin-layout header {
  height: 60px;
  border-bottom: 1px solid #2a3843;
  color: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.admin-layout header .title {
  float: left;
  font-size: 1.3rem;
  font-weight: 600;
}
.admin-layout header .user {
  float: right;
  width: 48px;
  height: 48px;
  background-image: url("https://s3.amazonaws.com/uifaces/faces/twitter/peterlandt/48.jpg");
  -moz-border-radius: 48px;
  -webkit-border-radius: 48px;
  border-radius: 48px;
  margin-left: 20px;
}
.admin-layout header .interval {
  float: right;
}
.admin-layout header .interval ul {
  padding: 0;
  list-style: none;
}
.admin-layout header .interval ul li {
  float: right;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
  padding: 2px 10px;
  margin: 0px 10px;
}
.admin-layout header .interval ul li.active {
  background-color: #d3d3d3;
  color: #202b33;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
</style>
