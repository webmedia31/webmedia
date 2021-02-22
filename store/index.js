import Vue from 'vue'
import Vuex from 'vuex'

import noticePlugin from '@/utils/notice.plugin'

Vue.use(noticePlugin)
Vue.use(Vuex)

export const state = () => ({
  error: null,
})

export const mutations = {
  SET_ERROR(state, error) {
    state.error = error
  },
  CLEAR_ERROR(state) {
    state.error = null
  }
}

export const actions = {

}

export const getters = {
  error: s => s.error
}