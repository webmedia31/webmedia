<template>
  <div class="default_layout">

    <Navbar/>

    <section class="main-content">
      <div class="  is-12">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  components: {
    Navbar
  },
  data:() => ({

  })
};
</script>

<style>
  body {
    /* background-image: url('~assets/home_bg_fullhd.jpg') !important;
    background-size: cover; */
    /* background-color: grey; */
  }
</style>
