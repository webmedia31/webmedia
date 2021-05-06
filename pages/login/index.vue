<template>
    <v-row class="mb-6" no-gutters>
        <v-col md="4" offset-md="4">
            <h1>Вход</h1>

            <v-card class="pa-2" outlined tile>
                <LoginForm/>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    // import notices from "../utils/notices"
    import LoginForm from '../../components/forms/LoginForm'

    export default {
        components: {
            LoginForm
        },
        name: "login",
        head() {
            return {
                title: "Вход"
            }
        },

        mounted() {
            // if (notices[this.$route.query.message]) {
            //   this.$notice(notices[this.$route.query.message])
            // }
        }
    };
</script>

<style lang="scss" scoped>
    .card {
        margin: 70px auto;
        width: 400px;
        max-width: 90%;
        background: #000;
        border: 1px solid #ccc;
    }

    .auth-submit {
        background: transparent;
    }
</style>
