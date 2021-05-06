<template>
    <v-container>
        <section>
            <div>
                <p>Добро пожаловать в webmedia</p>
                <h1>{{ title }}</h1>
                <p>
                    Мы реализуем комплексные решения, включающие в себя маркетинговый
                    анализ, разработку дизайна и веб-ресурсов с их дальнейшим продвижением
                    и поддержкой.
                </p>
            </div>

            <!-- DISTORTION EFFECT -->
            <!-- https://codepen.io/robin-dela/pen/KKPYoBq -->

            <LinkRotating
                    :text="`Наша команда`"
                    :link="{ name: 'about' }"
                    :textOffset="7"
            />

            <div class="static-footer d-flex justify-space-between align-center">
                <LinksSocial theme="light" class="d-none d-sm-flex"/>
                <LinkShowreel/>
            </div>
        </section>
    </v-container>
</template>

<script>
    import LinkRotating from '/components/links/LinkRotating'
    import LinkShowreel from '/components/links/LinkShowreel'

    export default {
        components: {
            LinkRotating,
            LinkShowreel
        },
        name: "home",
        layout: "default",
        head() {
            return {
                title: this.title,
                meta: [
                    /*{name: 'description', contetnt: this.post.title}*/
                ]
            };
        },
        data: () => ({
            title: "Разрабатываем проекты любого масштаба в сфере digital-маркетинга"
        }),

        mounted() {
        }
    };
</script>

<style></style>
