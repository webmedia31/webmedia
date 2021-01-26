<template>
  <router-link :to="{ path: '/' }">
    <img src="~assets/webmedia_logo.svg" alt="Webmedia" height="28" />
  </router-link>
</template>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
