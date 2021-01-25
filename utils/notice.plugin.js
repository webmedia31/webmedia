export default {
  install(Vue) {
    Vue.prototype.$notice = function(html) {
      window.M.toast({ html })
    }

    Vue.prototype.$noticeError = function(html) {
      window.M.toast({ html: `[Ошибка]: ${html}` })
    }
  }
}
