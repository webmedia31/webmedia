<template>
  <div>
    <section v-if="!loading">
      <h1>Slider</h1>

      <Slider />


    </section>



    <section v-else>LOADING...</section>
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
  beforeRouteLeave (to, from, next) {
    console.log('Hiding slider');
    setTimeout(()=>{
      next()
    },1000)


    // called when the route that renders this component is about to
    // be navigated away from.
    // has access to `this` component instance.
  },
  // beforeDestroy() {
  //   alert('the component is destroy')
  // },
}
</script>

