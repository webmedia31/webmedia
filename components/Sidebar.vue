<template>
  <section class="sidebar">
    <b-sidebar
      type="is-light"
      :fullheight="sidebarConfig.fullheight"
      :fullwidth="sidebarConfig.fullwidth"
      :overlay="sidebarConfig.overlay"
      :right="sidebarConfig.right"
      v-model="sidebarConfig.open"
    >
      <div class="sidebar__header">
        <LangSwitcher />

        <div @click="sidebarConfig.open = false">
          Закрыть
          <NavBurger />
        </div>
      </div>

      <div class="sidebar__nav">
        <ul class="menu-list">
          <li v-for="(item, key) of sideBarItems" :key="key">
            <nuxt-link :to="item.to" exact-active-class="is-active">
              <b-icon :icon="item.icon" /> {{ item.title }}
            </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="sidebar__footer">
        SIDEBAR FOOTER LINKS
      </div>
    </b-sidebar>

    <div @click="sidebarConfig.open = true">
      <NavBurger />
    </div>
  </section>
</template>

<script>
import LangSwitcher from "@/components/LangSwitcher";
import NavBurger from "@/components/NavBurger";

export default {
  components: {
    LangSwitcher,
    NavBurger
  },
  data: () => ({
    sidebarConfig: {
      open: false,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: true
    },
    sideBarItems: [
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
        to: { name: "jobs" }
      },
      {
        title: "Контакты",
        to: { name: "contacts" }
      },
      {
        title: "Калькулятор",
        to: { name: "calculator" }
      }
    ]
  })
};
</script>

<style scoped>
* {
  color: #000;
}
.navbar-burger {
  display: block;
}

.sidebar__nav {
  font-size: 36px;
}
</style>
