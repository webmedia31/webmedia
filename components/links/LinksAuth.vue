<template>
  <div>
      <div v-if="1!==1">
      <NuxtLink :to="{ name: 'logout' }">Выйти</NuxtLink>
    </div>
    <div v-else>
      <NuxtLink :to="{ name: 'login' }">Войти</NuxtLink>
      <NuxtLink :to="{ name: 'register' }">Зарегистрироваться</NuxtLink>
    </div>

    <NuxtLink :to="{ path: '/admin' }">Админка</NuxtLink>
  </div>
</template>

<script>
export default {

}
</script>
