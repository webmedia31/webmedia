<template>
  <div>
    <h1>Контакты</h1>

    <div class="columns">
      <div class="column">
        <FeedbackForm />
      </div>
      <div class="column">
        <p>{{ "callToUs" | localize }}</p>
        <h2>8-800-250-19-09</h2>
        <p>{{ "writeToUs" | localize }}</p>
        <h2>Info@webmedia31.ru</h2>
        <p>{{ "comeToUs" | localize }}</p>
        <h2>{{ "address" | localize }}Белгород, ул.Шаландина, 1а, 3 этаж, пн-пт: 9:00 - 18:00</h2>
      </div>
    </div>



  </div>
</template>

<script>
import localize from "@/filters/localize.filter";

export default {
  head() {
    return {
      title: "Контакты виноградника Вина Град",
      meta: [
        // {name: 'twitter:title', contetnt: this.sort.title},
        // {name: 'twitter.description', contetnt: this.sort.content},
      ]
    };
  }
};
</script>
