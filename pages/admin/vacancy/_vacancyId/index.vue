<template>
  <section class="vacancy-edit-form">
    <header>
      <div class="title">Редактирование вакансии</div>
      <div class="user"></div>
      <div class="interval">

      </div>
    </header>

    <div class="form">
      <VacancyForm :vacancy="loadedVacancy"/>
    </div>
  </section>
</template>

<script>


export default {
  name: "vacancy-edit",
  layout: "admin",
  data: () => ({
    loadedVacancy: {
      title: "Сварщик",
      content: "<p>Требования: <br>5 разряд</p>",
      published: true
    }
  }),
  mounted(){


    console.log(this);


  }
};
</script>
