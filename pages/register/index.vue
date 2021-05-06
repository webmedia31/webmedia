<template>
    <v-row class="mb-6" no-gutters>
        <v-col md="4" offset-md="4">
            <h1>Регистрация</h1>

            <v-card class="pa-2" outlined tile>
                <RegisterForm/>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
    import RegisterForm from '../../components/forms/RegisterForm'

    export default {
        components: {
            RegisterForm
        },
        name: "register",
        head() {
            return {
                title: "Регистрация"
            };
        },
        methods: {
            // registerUser($v) {
            //   console.log("Register button pressed");
            //   if ($v.$invalid) {
            //     $v.$touch();

            //     return;
            //   }
            // }
        }
    };
</script>
