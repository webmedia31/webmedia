<template>
  <section class="section">


    <div class="is-mobile">
      <p>Добро пожаловать в webmedia</p>
      <h1>{{ title }}</h1>
    </div>

    <div class="columns is-mobile">




      <card title="Free" icon="github">
        Open source on
        <a href="https://github.com/buefy/buefy">
          GitHub
        </a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey">
          Every
        </b>
        component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with
        <a href="https://vuejs.org/">
          Vue.js
        </a>
        and
        <a href="http://bulma.io/">
          Bulma
        </a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">
        No other internal dependency
      </card>
    </div>



    <article class="message">
  <div class="message-header">
    <p>Hello World</p>
    <button class="delete" aria-label="delete"></button>
  </div>
  <div class="message-body">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, tempus quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
  </div>
</article>



  </section>
</template>

<script>
import Card from "~/components/Card";

export default {
  name: 'aboutPage',
  layout: 'default',
  head() {
    return {
      title: this.title + " | Webmedia",
      meta: [/*{name: 'twitter:title', contetnt: this.post.title}*/]
    }
  },
  components: {
    Card
  },
  data: () => ({
    title: "Разрабатываем проекты любого масштаба в сфере digital-маркетинга",
  }),

  mounted() {



  }
};
</script>

<style>
body {
  background-color: tomato;
  transition: all ease-in-out .3s;
}
</style>
