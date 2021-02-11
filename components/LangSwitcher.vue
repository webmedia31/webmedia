<template>
  <section class="lang-switcher d-flex align-center"
           :class="theme">
    <span class="lang-btn" @click="switchLang('ru-RU')">RU</span>
    <span class="lang-divider">/</span>
    <span class="lang-btn" @click="switchLang('en-EN')">EN</span>

    <span style="color:$FFF">{{lang}}</span>
  </section>
</template>

<style scoped lang="scss">
.lang-switcher,
.lang-btn {
  color: #000;
}
.lang-btn {
  cursor: pointer;
}
</style>

<script>
import {mapGetters} from 'vuex'

export default {
  props: {
    theme: {
      type: String,
      default: 'dark' // 'light' || 'dark'
    }
  },
  methods: {
    async switchLang(lang) {

      await this.$store.dispatch('switchLang', lang)
    }
  },
  computed: {
    ...mapGetters(['lang'])
  },
  mounted() {
    //
  }
}
</script>

<style scoped lang="scss">
.lang-btn {
  padding: 5px;
}


.lang-switcher.dark * {
  color: #000 !important;
}
.lang-switcher.light * {
  color: #FFFCF9 !important;
}
.lang-divider {
  cursor: default;
}
</style>
