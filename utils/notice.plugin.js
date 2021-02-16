import Vue from 'vue'

export default {
  install(Vue) {
    Vue.prototype.$notice = function(html) {
      console.log(html);
      snackbar = true
        // window.M.toast({ html })
    }

    Vue.prototype.$noticeError = function(html) {
      console.log(html);
      console.log(snackbar);
      console.log(Vue);
      snackbar = true
        // window.M.toast({ html: `[Ошибка]: ${html}` })
    }
  }
}