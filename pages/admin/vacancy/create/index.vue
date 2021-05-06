<template>
    <section class="vacancy-create-form">
        <header>
            <div class="title">Добавление вакансии</div>
            <div class="user"></div>
            <div class="interval">

            </div>
        </header>

        <div class="form">
            <VacancyForm/>
        </div>
    </section>
</template>

<script>
    import VacancyForm from '/components/admin/forms/VacancyForm'

    export default {
        components: {
            VacancyForm
        },
        name: "admin-vacancy-create",
        layout: "admin",
    };
</script>
