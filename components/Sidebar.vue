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
      <div class="p-1">
        <div class="sidebar__header">
          <LangSwitcher />

          <div>
            Закрыть
            <div class="navbar-burger">
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>

        <div class="sidebar__nav">
          <b-menu>
            <b-menu-list label="Menu">
              <b-menu-item
                icon="information-outline"
                label="Info"
              ></b-menu-item>

              <b-menu-item icon="account" label="My Account">
                <b-menu-item label="Account data"></b-menu-item>
                <b-menu-item label="Addresses"></b-menu-item>
              </b-menu-item>
            </b-menu-list>

            <b-menu-list>
              <b-menu-item
                label="Expo"
                tag="router-link"
                target="_blank"
                to="/expo"
              ></b-menu-item>
            </b-menu-list>
          </b-menu>

          <ul class="menu-list">
            <li v-for="(item, key) of items" :key="key">
              <nuxt-link :to="item.to" exact-active-class="is-active">
                <b-icon :icon="item.icon" /> {{ item.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>

        <div class="sidebar__footer"></div>
      </div>
    </b-sidebar>

    <b-button @click="sidebarConfig.open = true">Show</b-button>
  </section>
</template>

<script>
import LangSwitcher from "@/components/LangSwitcher";

export default {
  components: {
    LangSwitcher
  },
  data: () => ({
    sidebarConfig: {
      open: false,
      overlay: false,
      fullheight: true,
      fullwidth: false,
      right: true
    },
    items: [
      {
        title: "Home",
        icon: "home",
        to: { name: "index" }
      },
      {
        title: "Inspire",
        icon: "lightbulb",
        to: { name: "inspire" }
      }
    ]
  })
};
</script>

<style scoped>
.navbar-burger {
  display: block;
}
</style>
