<template>
  <div>
    <h1>Контакты</h1>

    <div class="columns">
      <div class="column">
        <FeedbackForm />
      </div>
      <div class="column contacts-info">
        <div class="contacts-info__item">


          <p class="info-label" >{{ "callToUsLabel" | localize }}</p>


          <p class="info-value">8-800-250-19-09</p>
        </div>
        <div class="contacts-info__item">
          <p class="info-label">{{ "writeToUsLabel" | localize }}</p>
          <p class="info-value">Info@webmedia31.ru</p>
        </div>
        <div class="contacts-info__item">
          <p class="info-label">{{ "comeToUsLabel" | localize }}</p>
          <p class="info-value">{{ "address" | localize }}</p>
        </div>
      </div>
    </div>

  </div>
  
</template>

<script>

export default {
  name: 'contacts',
  layout: 'default',
  head() {
    return {
      title: "Контакты",
      meta: [{hid: 'description', name: 'description', content: "Описание страницы Контакты"}]
    };
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
