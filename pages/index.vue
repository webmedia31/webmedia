<template>
  <section class="section">
    <div class="is-mobile">
      <p>Добро пожаловать в webmedia</p>
      <h1>{{ title }}</h1>
      <p>
        Мы реализуем комплексные решения, включающие в себя маркетинговый
        анализ, разработку дизайна и веб-ресурсов с их дальнейшим продвижением и
        поддержкой.
      </p>
    </div>

    <RotatingLink :text="`Наши проекты`" :textOffset="5"/>

    <RotatingLink :text="`Our team`" :textOffset="40"/>
    <RotatingLink :text="`Our projects`" :textOffset="11"/>

    <!-- <RotatingLinkSvg /> -->



  </section>
</template>

<script>
export default {
  name: "aboutPage",
  layout: "default",
  head() {
    return {
      title: this.title + " | Webmedia",
      meta: [
        /*{name: 'twitter:title', contetnt: this.post.title}*/
      ]
    };
  },
  data: () => ({
    title: "Разрабатываем проекты любого масштаба в сфере digital-маркетинга"
  }),

  mounted() {}
};
</script>

<style></style>
