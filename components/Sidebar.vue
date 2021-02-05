<template>
  <section>

<nav> <!-- navbar content here  --> </nav>

  <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="images/office.jpg">
      </div>
      <a href="#user"><img class="circle" src="images/yuna.jpg"></a>
      <a href="#name"><span class="white-text name">John Doe</span></a>
      <a href="#email"><span class="white-text email">jdandturk@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>First Link With Icon</a></li>
    <li><a href="#!">Second Link</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Subheader</a></li>
    <li><a class="waves-effect" href="#!">Third Link With Waves</a></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>

    <!-- START SIDEBAR CONTENT -->
      <!-- <div class="sidebar__header">
        <LangSwitcher />

        <div class="sidebar_closelink" @click="sidebarConfig.open = false">
          Закрыть
        </div>
      </div>

      <div class="sidebar__nav">
        <ul class="menu-list">
          <li
            @click="sidebarNavUsed"
            v-for="(item, key) of sideBarItems"
            :key="key"
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
      </div> -->
    <!-- END SIDEBAR CONTENT -->







    <div @click="sidebarConfig.open = true">
      <NavBurger />
    </div>




  </section>
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
    sidebarNavUsed() {
      this.sidebarConfig.open = false;
    }
  },
  mounted () {
    // var elems = document.querySelectorAll('.sidenav');
    // var instances = window.M.Sidenav.init(elems, options);
  }
};
</script>

<style>
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
