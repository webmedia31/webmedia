<template>
  <nav class="navbar">
    <Logo />

    <ul class="navMenu">
      <router-link
        v-for="(item, index) in navBarItems"
        :key="index"
        :to="item.to"
      >
        {{ item.title }}
      </router-link>
    </ul>

    <Sidebar />
  </nav>
</template>

<script>
import Logo from "@/components/Logo";
import Sidebar from "@/components/Sidebar";

export default {
  components: {
    Logo,
    Sidebar
  },
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
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar-burger:hover {
  background-color: transparent;
}
</style>
