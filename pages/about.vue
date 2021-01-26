<template>
  <div>
      <h1>{{ pageHeaderH1 }}</h1>
  </div>
</template>

<script>
export default {
  name: 'aboutPage',
  layout: 'default',
  head () {
    return {
      title: this.pageHeaderH1,
      meta: [/* {name: 'twitter:title', contetnt: this.sort.title}, {name: 'twitter.description', contetnt: this.sort.content},*/]
    }
  },
  data: () => ({
    pageHeaderH1: 'Мы станем продолжением Вашей команды'
  }),
}
</script>


<style>
body {
  background-color: grey;
}
</style>
