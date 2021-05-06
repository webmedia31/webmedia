<template>
    <v-app>
        <Navbar/>

        <v-main>
            <nuxt/>
        </v-main>

        <Snackbar/>

    </v-app>
</template>

<script>
    import Navbar from '/components/navigation/Navbar'
    import Snackbar from '/components/ui/Snackbar'

    export default {


        components: {
            Navbar,
            Snackbar
        },
        name: "default",
        head() {
            return {
                titleTemplate: "%s | Webmedia",
                meta: [{hid: "description", name: "description", content: "Описание страницы в шаблоне"}]
            };
        },
    };
</script>
