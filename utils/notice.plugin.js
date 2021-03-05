export default {
  install(Vue) {

    Vue.prototype.$notice = function(html) {
      this.snackbar.text = html
      this.snackbar.timeout = 5000
      this.snackbar.visible = true
    }

    Vue.prototype.$noticeError = function(html) {
      this.snackbar.text = '[ОШИБКА] ' + html
      this.snackbar.timeout = 15000
      this.snackbar.visible = true
    }

  }
}
