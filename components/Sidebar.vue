<template>
  <div class="sidenav no-autoinit" id="mobile-menu">
      <div class="sidebar__header">
      <LangSwitcher />

      <div class="sidebar_closelink" @click="closeSidebar">
        Закрыть
      </div>
    </div>

    <div class="sidebar__nav">
      <ul class="menu-list">
        <li
          v-for="(item, key) of sideBarItems"
          :key="key"
          @click="closeSidebar"
        >
          <NuxtLink no-prefetch :to="item.to" exact-active-class="is-active">
            {{ item.title }}
          </NuxtLink>
        </li>
      </ul>
    </div>

    <div class="sidebar__footer">
      <SocialLinks />

      <NuxtLink no-prefetch class="politics_link" :to="{ path: '/politics' }">Политика конфиденциальности</NuxtLink>
    </div>
  </div>
</template>

<script>
import politics from '../pages/politics.vue';
export default {
  components: { politics },
  data: () => ({

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
  }),
  methods: {
    closeSidebar(){
      M.Sidenav.getInstance(document.querySelectorAll('.sidenav')[0]).close()
    }
  },
  mounted () {
    // initializing materialize sidebar
    let el = document.querySelectorAll('.sidenav')[0]
    setTimeout(() => {
      M.Sidenav.init(el,
        {
          "edge": "right",
          "inDuration": 300,
          "outDuration": 250,
          "preventScrolling": false
        }
    )}, 0 )
  }
};
</script>

<style>
.sidenav {
  display: flex;
  flex-direction: column;
}


.sidebar-content * {
  color: #000;
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
}
.sidebar__nav {
  font-size: 36px;
}
.b-sidebar .sidebar-content {
  background-color: #fff !important;
}

.sidebar__header {
  height: 70px;
  border-bottom: 1px solid #000;
}
.sidebar__nav {
}
.sidebar__footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 95px;
  border-top: 1px solid #000;
}



/** hide main top nav on mobile and tablet */
.navMenu {
  display: none;
}

.b-sidebar .sidebar-content {
  width: 100%;
}
.sidebar__header,
.sidebar__nav,
.sidebar__footer {
  padding: 0px 20px;
}

@media (min-width: 340px) {
  .b-sidebar .sidebar-content {
    width: 320px;
  }
}

@media (min-width: 768px) {
  .b-sidebar .sidebar-content {
    width: 459px;
  }
}

@media (min-width: 1280px) {
  .b-sidebar .sidebar-content {
    width: 420px;
  }

  /** show main top nav on mobil and tablet */
  .navMenu {
    display: flex;
  }
}
</style>
