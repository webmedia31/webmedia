<template>

  <div>
    <nav class="navbar ">
        <div class="container">
          <Logo />

          <NavBurger />


          <!-- <div v-if="1!==1">
            <NuxtLink :to="{ name: 'logout' }">Выйти</NuxtLink>
          </div>
          <div v-else>
            <NuxtLink :to="{ name: 'login' }">Войти</NuxtLink>
            <NuxtLink :to="{ name: 'register' }">Зарегистрироваться</NuxtLink>
          </div> -->

          <ul class="navbar-menu right hide-on-med-and-down">
            <li v-for="(item, index) in navBarItems" :key="index">
              <NuxtLink
                no-prefetch
                :to="item.to"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
    </nav>

    <Sidebar />

  </div>

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
  }),


};
</script>

<style>
.navbar {
  background-color: transparent;

}
.navbar .sidenav-trigger {
  float: right;
  display: flex;
}

.navbar-menu {
  display: flex;
}

/* .navbar .container {
display: flex;
  justify-content: space-between;
  align-items: center;
} */

/*.navbar-burger:hover {
  background-color: transparent;
}
.navMenu a {
  color: #FFFCF9;
  padding: 7px 21px;
}
.navMenu a.nuxt-link-active {
  text-decoration: underline;
}
.navMenu a:hover {
  text-decoration: underline;
} */


nav a.sidenav-trigger {
  display: flex;
  align-items: center;
}
</style>
