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

<!-- DISTORTION EFFECT -->
<!-- https://codepen.io/robin-dela/pen/KKPYoBq -->

    <RotatingLink :text="`Наши проекты`" :link="{ name: 'portfolio' }" :textOffset="5"/>
    <RotatingLink :text="`Our team`" :link="{ name: 'about' }" :textOffset="40"/>
    <RotatingLink :text="`Our projects`" :link="{ name: 'portfolio' }" :textOffset="11"/>

    <!-- <RotatingLinkSvg /> -->



  </section>
</template>

<script>
export default {
  name: "home",
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
