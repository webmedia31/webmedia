<template>
  <div>
    <section v-if="!loading">
      <h1>Slider</h1>
      <Slider />

      <v-container>
        <div class="static-footer d-flex justify-space-between align-center">
          <LinksSocial theme="light" class="d-none d-sm-flex" />
          <LinkShowreel />
        </div>
      </v-container>

    </section>
    <section v-else class="d-flex justify-center align-center">
      LOADING...
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: true
  }),
  mounted() {
    this.loading = false;
  },
  beforeRouteLeave(to, from, next) {
    console.log("Hiding slider");
    setTimeout(() => {
      next();
    }, 500);

    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  }
  // beforeDestroy() {
  //   alert('the component is destroy')
  // },
};
</script>
