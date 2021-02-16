<template>
  <div>
    <h1>{{ pageTitle }}</h1>

    <!-- {{ $store.state.lang }} -->

    <div class="columns">
      <div class="column">
        <FeedbackForm />
      </div>
      <div class="column contacts-info">
        <div class="contacts-info__item">


          <p class="info-label" >{{ "callToUsLabel" | t(lang) }}</p>


          <p class="info-value">8-800-250-19-09</p>
        </div>
        <div class="contacts-info__item">
          <p class="info-label">{{ "writeToUsLabel" | t(lang) }}</p>
          <p class="info-value">Info@webmedia31.ru</p>
        </div>
        <div class="contacts-info__item">
          <p class="info-label">{{ "comeToUsLabel" | t(lang) }}</p>
          <p class="info-value">{{ "address" | t(lang) }}</p>
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import t from '@/filters/localize.filter'
import {mapGetters} from 'vuex'

export default {
  name: 'contacts',
  layout: 'default',
  data: () => ({

}),
  head() {
    return {
      title: this.pageTitle,
      meta: [{hid: 'description', name: 'description', content: this.pageDescription}]
    };
  },
  computed: {
    ...mapGetters(['lang']),
    pageTitle: function() {

      return t('pageConatctsTitle', this.lang)

    },
    pageDescription: function() {
      return t('pageConatctsTitle', this.lang)
    }
  },
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
