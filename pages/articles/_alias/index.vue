<template>
  <section class="single-article">

    <LinkArrowed back :text="`Вернуться`" :link="{ path: '/articles' }"/>

    <h1>Title of the article</h1>
    <div class="article-details">
      <span class="article-content">Some content of the article</span>
      <span class="article-date">12.03.2021</span>

      <div>social icons for sharing article</div>
    </div>
  </section>
</template>
