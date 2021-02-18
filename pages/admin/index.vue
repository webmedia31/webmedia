<template>
  <section class="admin-page">

    <NuxtLink to="/admin/vacancy">Вакансии</NuxtLink>
    <NuxtLink to="/admin/article">Статьи</NuxtLink>

  </section>
</template>

<script>
export default {
  name: 'admin-home',
  layout: 'admin',
};
</script>

