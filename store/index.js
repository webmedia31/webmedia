import Vue from 'vue'
import Vuex from 'vuex'
import translitFilter from '@/filters/translit.filter'

import noticePlugin from '@/utils/notice.plugin'

Vue.filter('transliterate', translitFilter)
Vue.use(noticePlugin)
Vue.use(Vuex)

export const state = () => ({
  error: null,
  notice: null
})

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error
  },
  CLEAR_ERROR(state) {
    state.error = null
  },
  SET_NOTICE(state, notice) {
    state.notice = notice
  },
  CLEAR_NOTICE(state) {
    state.notice = null
  }
}

export const actions = {

}

export const getters = {
  error: s => s.error,
  notice: s => s.notice
}
