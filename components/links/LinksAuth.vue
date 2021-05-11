<template>
    <div class="auth-links">
        <NuxtLink :to="{ path: '/admin' }"
                    class="admin">Админ панель</NuxtLink>

        <template v-if="1!==1">
            <NuxtLink :to="{ name: 'logout' }">Выйти</NuxtLink>
        </template>
        <template v-else>
            <NuxtLink :to="{ name: 'login' }">Вход</NuxtLink>
            /
            <NuxtLink :to="{ name: 'register' }">Регистрация</NuxtLink>
        </template>
    </div>
</template>

<script>
    export default {}
</script>

<style>

.auth-links a {
    padding: 7px 0px;
}
a.admin {
    padding: 7px 25px;
}
</style>