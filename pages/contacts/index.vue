<template>
    <div>
        <h1>Контакты</h1>

        <!-- {{ $store.state.lang }} -->

        <div class="columns">
            <div class="column">
                <FeedbackForm/>
            </div>
            <div class="column contacts-info">
                <div class="contacts-info__item">
                    <p class="info-label">Звоните нам</p>

                    <p class="info-value">8-800-250-19-09</p>
                </div>
                <div class="contacts-info__item">
                    <p class="info-label">Пишите нам</p>
                    <p class="info-value">Info@webmedia31.ru</p>
                </div>
                <div class="contacts-info__item">
                    <p class="info-label">Приходите к нам</p>
                    <p class="info-value">
                        Белгород, ул.Шаландина, 1а, 3 этаж, пн-пт: 9:00 - 18:00
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import FeedbackForm from '/components/forms/FeedbackForm'
    import {mapGetters} from "vuex";

    export default {
        components: {
            FeedbackForm
        },
        name: "contacts",
        layout: "default",
        data: () => ({
            pageTitle: "Контакты",
            pageDescription: "Описание страницы контакты"
        }),
        head() {
            return {
                title: this.pageTitle,
                meta: [
                    {
                        hid: "description",
                        name: "description",
                        content: this.pageDescription
                    }
                ]
            };
        },
        computed: {
            // ...mapGetters(["lang"]),
        }
    };
</script>

<style scoped>
    .contacts-info__item {
        margin: 50px 0px;
    }

    .info-label {
        font-size: 14px;
        line-height: 16px;
        letter-spacing: 0.07em;
        color: #9e9e9e;
    }

    .info-value {
        font-size: 28px;
        line-height: 32px;
        letter-spacing: 0.12em;
        color: #d0d0d0;
    }
</style>
