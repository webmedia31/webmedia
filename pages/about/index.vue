<template>
    <v-container>
        <div>
            <section class="intro">
                <div class="col-md-10 offset-md-1">
                    <p class="intro__pre-header header-description">Решаем любые задачи</p>
                    <h1 class="intro__header">{{ pageHeaderH1 }}</h1>
                    <p class="intro__sub-header header-description">Нам нравится видеть результат нашей работы</p>
                </div>

                <div class="viewport-footer">
                    <LinksSocial :theme="`light`"/>
                    <LinkShowreel/>
                </div>
            </section>

            <div class="line-divider"/>

            <section class="main_in_work">
                <span>Главное в работе</span>
                <h2>
                    Наши специалисты станут продолжением вашей компании, но совершенно
                    самостоятельным
                </h2>
                <p>
                    Каждый из нас выбрал это направление благодаря его гибкости и
                    разнообразию! Множество идей и способов их реализации мы используем
                    каждый день.Наша команда — это профессионалы своего дела, которых не
                    пугают сложности.
                </p>
                <p>
                    Выполнять интересные проекты быстро и качественно Нужно уходить от
                    слов быстро — это то, к чему мы стремимся. Лучшим результатом станет
                    вовлечённость пользователей — для достижения этой цели мы предложим
                    комплексное решение и создадим максимально удобный и понятный продукт.
                </p>

                <div>
                    <div class="img"></div>
                    <p>
                        Наша команда — это профессионалы своего дела, которых не пугают
                        сложности.
                    </p>
                </div>

                <div>
                    <div class="img"></div>
                    <p>
                        Мы не будем простым исполнителем заданий. Вы получите решение любых
                        задач, и, что не менее важно, предложения по эффективному развитию
                        бизнеса. В любом направлении нашей работы, сталкиваясь с новинками,
                        доказавшими свою эффективность, мы стараемся применить их на
                        практике
                    </p>
                </div>
            </section>

            <Activities/>

            <section class="teammates">
                <h2>И, хотя каждый из нас уникален, работаем мы как единое целое</h2>
                <p>С кем вы будете побеждать</p>
                <hr/>

                <LinkRotating
                        :text="`Наши проекты`"
                        :link="{ name: 'portfolio' }"
                        :textOffset="7"
                />

                <Teammate v-for="person of 5" :num="person" :key="person"/>
            </section>
        </div
        >
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
        name: "aboutPage",
        layout: "default",
        head() {
            return {
                title: "Команда",
                meta: [
                    {
                        hid: "description",
                        name: "description",
                        content: "Описание страницы Команда"
                    }
                ]
            };
        },
        data: () => ({
            pageHeaderH1:
                "Мы применяем комплексный подход к каждому клиенту: от стратегии до достижения целей"
        })
    };
</script>

<style>
    .intro {
        height: 97vh;
        display: flex;
        flex-direction: column;
        align-items: stretch;
    }
    .viewport-footer {
        display: flex;
        justify-content: space-between;
        padding: 50px 0px;
    }
    p.intro__pre-header {
        margin-bottom: 10px;
    }
    p.intro__sub-header {
        margin-top: 35px;
    }

    p.header-description {
        color: #FFFCF9;
    }

    .line-divider {
        margin: 30px 0px;
        width: 100%;
        height: 1px;
        background: rgba(255, 255, 255, 0.2);
    }
</style>
