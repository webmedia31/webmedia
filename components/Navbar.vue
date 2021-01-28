<template>
  <nav class="navbar">
    <div class="container">
      <Logo />

      <ul class="navMenu">
        <NuxtLink
          v-for="(item, index) in navBarItems"
          :key="index"
          :to="item.to"
        >
          {{ item.title }}
        </NuxtLink>
      </ul>

      <Sidebar />
    </div>
  </nav>
</template>

<script>
export default {
  data: () => ({
    navBarItems: [
      {
        title: "Команда",
        to: { name: "about" }
      },
      {
        title: "Проекты",
        to: { name: "portfolio" }
      },
      {
        title: "Блог",
        to: { name: "articles" }
      }
    ]
  })
};
</script>

<style>
.navbar {
  background-color: transparent;

}
.navbar .container {
display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-burger {
  display: block;
}
.navbar-burger:hover {
  background-color: transparent;
}
.navMenu a {
  color: #FFFCF9;
  padding: 7px 21px;
}
.navMenu a:hover {
  text-decoration: underline;
}
</style>
