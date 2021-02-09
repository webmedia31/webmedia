<template>
  <section class="section">




    <div>
    <v-card
      class="d-flex justify-start mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        v-for="n in 3"
        :key="n"
        class="pa-2"
        outlined
        tile
      >
        justify-start
      </v-card>
    </v-card>

    <v-card
      class="d-flex justify-end mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        v-for="n in 3"
        :key="n"
        class="pa-2"
        outlined
        tile
      >
        justify-end
      </v-card>
    </v-card>

    <v-card
      class="d-flex justify-center mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        v-for="n in 3"
        :key="n"
        class="pa-2"
        outlined
        tile
      >
        justify-center
      </v-card>
    </v-card>

    <v-card
      class="d-flex justify-space-between mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        v-for="n in 3"
        :key="n"
        class="pa-2"
        outlined
        tile
      >
        justify-space-between
      </v-card>
    </v-card>

    <v-card
      class="d-flex justify-space-around mb-6"
      :color="$vuetify.theme.dark ? 'grey darken-3' : 'grey lighten-4'"
      flat
      tile
    >
      <v-card
        v-for="n in 3"
        :key="n"
        class="pa-2"
        outlined
        tile
      >
        justify-space-around
      </v-card>
    </v-card>
  </div>




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
    <!-- <RotatingLink :text="`Our team`" :link="{ name: 'about' }" :textOffset="40"/> -->
    <!-- <RotatingLink :text="`Our projects`" :link="{ name: 'portfolio' }" :textOffset="11"/> -->

<r

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
