<template>
    <v-container>
        <section>

            <h1>
                Хотите работать и развиваться в сфере digital?
                <span class="dark">С радостью поможем и будем развиваться вместе!</span>
            </h1>

            <JobList/>

            <h2>Мотивирован много работать и нацелен на результат?</h2>
            <p>
                Хорошо подумай перед написание в резюме «быстрообучаемость» и
                «стрессоустойчивость». У нас нет должностей с лёгкой работой.
            </p>
            <p>
                Готовься к испытательному сроку и тестовым заданиям. Мы должны понять,
                соответствует ли твой уровень подготовки тому, который нам нужен. Учись
                разговаривать с людьми, даже если ты не менеджер – с клиентами может
                потребоваться взаимодействовать всем. У нас нет жёсткого дресс-кода, но
                спортивные костюмы оставь для пробежек, выглядеть нужно презентабельно.
            </p>
            <p>
                Webmedia может стать хорошим стартом, если ты готов учиться и стараться
                вместе с нами. Если у тебя уже есть опыт, мы направим навыки в нужное
                нам русло. Перед устройством заверши все проекты на старом рабочем
                месте, потом времени на это не будет. Надумаешь уйти – закончи все
                начатые задачи.
            </p>
            <p>
                Мы хотим, чтобы сотрудники понимали важность постоянства и
                ответственности. Наша компания не подходит для работы по
                совместительству и не терпит «леваков» - оплачиваем 100% рабочего
                времени.
            </p>
            <p>
                Нам нравится работать с людьми, осознающими свой выбор и готовыми
                развиваться – нет смысла устраиваться на короткий срок. С нашей стороны
                есть все условия для комфортной и продуктивной работы с достойной
                оплатой.
            </p>

            <h3 class="underlined">Организационные моменты:</h3>
            <ul class="wm-list">
                <li>рабочий день длится 8 часов, плюс часовой перерыв на обед;</li>
                <li>мы работаем 5 дней в неделю;</li>
                <li>
                    начало работы в 9:00, не опаздывай, о форс-мажорах предупреждай
                    заранее;
                </li>
                <li>
                    алкоголь зарешён после 18:00, но в будни помни, что тебе завтра на
                    работу.
                </li>
            </ul>

            <h3 class="underlined">Минимальные требования:</h3>
            <ul class="wm-list">
                <li>возможность приходить в студию ежедневно;</li>
                <li>умение взаимодействовать, задавать вопросы и давать ответы;</li>
                <li>старание делать работу лучше других.</li>
            </ul>

            <div class=""></div>
            <div class="call-to-cation">Узнай больше о нашей команде!</div>
            <LinkRotating
                    :text="`Наша команда`"
                    :link="{ name: 'about' }"
                    :textOffset="7"
            />
        </section>
    </v-container>
</template>

<script>
    import LinkRotating from '/components/links/LinkRotating'

    export default {
        components: {
            LinkRotating
        },
        name: "jobs-page",
        layout: "default",
        async fetch({store}) {
            if (store.getters["jobs/jobs"].length === 0) {
                await store.dispatch("jobs/fetchJobs");
            }
        }
    };
</script>

<style lang="scss" scoped>
    span.dark {
        color: #343434;
        font-family: "GilroyBold";
    }

    .call-to-cation {
        font-size: 18px;
        line-height: 150%;
        letter-spacing: 0.07em;
        color: #8b8b8b;
    }

    h3.underlined {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        font-weight: normal;
        padding-bottom: 2px;
        margin: 30px 0px 24px 0px;
    }

    .v-application ul.wm-list {
        padding-left: 30px;
    }

    .v-application ul.wm-list li {
        margin: 15px 0px;
        font-size: 12px;
        line-height: 14px;
        color: #8e8e8e;
    }

    .v-application ul.wm-list li::before {
        display: block;
        content: "";
        position: relative;
        top: 8px;
        left: -30px;
        width: 20px;
        height: 1px;
        background: linear-gradient(89.97deg, #ff7a23 -4.85%, #f03019 95.6%);
    }

    .v-icon.v-icon {
        margin-left: 45px !important;
    }
</style>
