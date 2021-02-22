<template>
  <nav>
    <header>
      <NuxtLink to="/admin" exact>Webmedia</NuxtLink>
      <Logo />
    </header>
    <section>
      <header>Вакансии</header>
      <ul>
        <li class="active">
          <NuxtLink to="/admin/vacancy" exact>Все вакансии</NuxtLink>
        </li>

        <li class="new">
          <v-icon left dark small>mdi-plus-circle</v-icon>
          <NuxtLink to="/admin/vacancy/create">Добавить вакансию</NuxtLink>
        </li>
      </ul>
    </section>
    <section>
      <header>Статьи</header>
      <ul>
        <li data-value="4">
          <NuxtLink to="/admin/article">Все статьи</NuxtLink>
        </li>
        <li class="new">
          <v-icon left dark small>mdi-plus-circle</v-icon>
          <NuxtLink to="/admin/article/create">Добавить статью</NuxtLink>
        </li>
      </ul>
    </section>
    <section>
      <header>Направления</header>
      <ul>
        <li class="active">
          <v-icon left dark small>mdi-clipboard-account</v-icon>
          <NuxtLink to="/admin/activity" exact>Все направления</NuxtLink>
        </li>

        <li class="new">
          <v-icon left dark small>mdi-plus-circle</v-icon>
          <NuxtLink to="/admin/activity/create">Добавить напрвление</NuxtLink>
        </li>


      </ul>
    </section>
    <section>
      <header>Разное</header>
      <ul>
        <li>
          <NuxtLink to="/admin/demo">Demo</NuxtLink>
        </li>
        <li class="red-li">Credit Sales</li>
        <li class="yellow-li">Channel Sales</li>
        <li class="green-li">Direct Sales</li>
        <li class="new">
          <v-icon left dark small>mdi-plus-circle</v-icon>
          Add Category
        </li>
      </ul>

    </section>
  </nav>
</template>

<style scoped>
nav {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 82%;
  left: 0;
  padding: 0px 22px;
  border-right: 2px solid #161e23;
  background-color: #202B33;
}
nav a {
  color: #738491;
}
nav > header {
  font-weight: 700;
  font-size: 1.2rem;
  text-transform: uppercase;
}
nav section header {
  padding-top: 30px;
  font-weight: bold;
  color: #fff;
  font-family: "GilroyBold";
  font-size: 20px;
  border: none;
}
nav section ul {
  list-style: none;
  padding: 0px;
}
nav section ul li {
  position: relative;
  padding: 6px 0px;
  font-weight: bold;
}
nav section a.nuxt-link-active {
  color: #2278ae;
  text-decoration: none;
}
nav section ul li:after {
  content: attr(data-value);
  position: absolute;
  right: 0px;
  width: 19px;
  background-color: #738491;
  font-size: 0.9rem;
  color: #202b33;
  -moz-border-radius: 19px;
  -webkit-border-radius: 19px;
  border-radius: 19px;
  text-align: center;
}
nav section ul li.red-li:after {
  content: "";
  position: absolute;
  top: 14px;
  right: 0px;
  width: 10px;
  height: 10px;
  background-color: #ec487f;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
nav section ul li.yellow-li:after {
  content: "";
  position: absolute;
  top: 14px;
  right: 0px;
  width: 10px;
  height: 10px;
  background-color: #ea8e39;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
nav section ul li.green-li:after {
  content: "";
  position: absolute;
  top: 14px;
  right: 0px;
  width: 10px;
  height: 10px;
  background-color: #38af5b;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
}
nav section ul li.new * {
  font-size: 0.9rem;
  color: #545f68;
}
</style>
