<template>
  <b-navbar>
    <template #brand>
      <Logo />
    </template>

    <template #start>
      <b-navbar-item tag="router-link" :to="{ path: '/about' }">
        Команда
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/portfolio' }">
        Проекты
      </b-navbar-item>

      <b-navbar-item tag="router-link" :to="{ path: '/articles' }">
        Блог
      </b-navbar-item>
<!--
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown> -->
    </template>

    <template #end>
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>

      <Sidebar />
    </template>
  </b-navbar>
</template>

<script>
import Logo from "@/components/Logo";
import Sidebar from "@/components/Sidebar";

export default {
  components: {
    Logo,
    Sidebar
  },
  data: () => ({})
};
</script>
