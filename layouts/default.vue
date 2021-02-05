<template>
  <div class="default_layout">
    <Navbar />

    <section class="main-content">
      <div class="  is-12">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "default",
  head() {
    return {
      titleTemplate: "%s | Webmedia",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Описание страницы Команда"
        }
      ]
    };
  },
  data: () => ({}),
  mounted () {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  }
};
</script>
