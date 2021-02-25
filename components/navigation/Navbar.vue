<template>
  <v-container>
    <!-- NAVBAR -->
    <nav class="navbar d-flex justify-space-between">
      <Logo />

      <LinksAuth />

      <ul class="navbar-menu">
        <li v-for="(item, index) in navBarItems" :key="index">
          <NuxtLink no-prefetch :to="item.to">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>

      <button class="sidebar-toggle" @click.stop="drawer = !drawer">
        <NavBurger />
      </button>
    </nav>
    <!-- NAVBAR END -->

    <!-- SIDEBAR -->
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      <div class="sidebar__header d-flex align-center justify-sm-space-between">

        <div class="sidebar_closelink" @click="drawer = !drawer">
          Закрыть
        </div>
      </div>

      <div class="sidebar__nav">
        <ul class="menu-list">
          <li v-for="(item, key) of sidebarItems" :key="key">
            <NuxtLink no-prefetch :to="item.to" exact-active-class="is-active">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <div class="sidebar__footer">
        <LinksSocial />

        <NuxtLink no-prefetch class="politics_link" :to="{ name: 'politics' }"
          >Политика конфиденциальности
        </NuxtLink>
      </div>
    </v-navigation-drawer>
    <!-- SIDEBAR END -->
  </v-container>
</template>

<script>
export default {
  data: () => ({
    drawer: false,
    sidebarItems: [
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
      },
      {
        title: "Вакансии",
        to: { name: "job" }
      },
      {
        title: "Контакты",
        to: { name: "contacts" }
      },
      {
        title: "Калькулятор",
        to: { name: "calculator" }
      }
    ],
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

.navbar-menu {
  list-style: none;
  align-items: center;
  display: none !important;
}
.navbar-menu a {
  color: #fffcf9;
  padding: 7px 21px;
}
.navbar-menu a {
  text-decoration: none;
}
.navbar-menu a.nuxt-link-active {
  text-decoration: underline;
}



/* sidebar */
.sidebar-toggle {
  outline: none;
}
.v-navigation-drawer {
  max-height: 100vh;
}
.v-application .v-navigation-drawer * {
  color: #000;
}
.theme--dark.v-navigation-drawer {
  background-color: #f7f7f7;
}
.v-navigation-drawer__content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.sidebar_closelink {
  padding: 10px 50px 10px 10px;
  cursor: pointer;
}
.sidebar_closelink::after {
  display: block;
  content: "";
  position: relative;
  width: 20px;
  height: 1px;
  left: 77px;
  top: -12px;
  background-color: #000;
}

.sidebar__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-bottom: 1px solid #000;
}
.sidebar__nav {
  font-size: 36px;
}
.menu-list {
  list-style: none;
}

.sidebar__footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 95px;
  border-top: 1px solid #000;
}

.sidebar__header,
.sidebar__nav,
.sidebar__footer {
  padding: 0px 20px;
}

/** hide main top nav on mobile and tablet */
.navbar-menu {
  display: none !important;
}

aside.v-navigation-drawer {
  width: 100% !important;
}

@media (min-width: 320px) {
  aside.v-navigation-drawer {
    width: 320px !important;
  }
}

@media (min-width: 768px) {
  aside.v-navigation-drawer {
    width: 459px !important;
  }
}

@media (min-width: 1280px) {
  aside.v-navigation-drawer {
    width: 420px !important;
  }

  .navbar-menu {
    display: flex !important;
  }
}
</style>
