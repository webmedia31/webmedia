import Vue from 'vue'
import Vuex from 'vuex'

import localizeFilter from '@/filters/localize.filter'
import noticePlugin from '@/utils/notice.plugin'

Vue.filter('t', localizeFilter)
Vue.use(noticePlugin)
Vue.use(Vuex)

export const state = () => ({
  error: null,
  lang: ""
})

export const mutations = {
  SET_LANG(state, lang) {
    state.lang = lang
  },
  SET_ERROR(state, error) {
    state.error = error
  },
  CLEAR_ERROR(state) {
    state.error = null
  }
}

export const actions = {
  switchLang({ commit }, lang) {
    commit('SET_LANG', lang)
  }
}

export const getters = {
  lang: (state) => {
    return state.lang || "ru-RU"
  },
  error: s => s.error
}














// import Vue from 'vue'
// import Vuex from 'vuex'
// // import auth from './auth'



// // import userInfo from './userinfo'
// // import category from './category'
// // import record from './record'

// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     error: null
//   },
//   mutations: {
//     setError(state, error) {
//       state.error = error
//     },
//     clearError(state) {
//       state.error = null
//     }
//   },
//   getters: {
//     error: s => s.error
//   },
//   actions: {
//     // async fetchCurrency() {
//     //   // const fixerApiKey = process.env.VUE_APP_FIXER_API_KEY
//     //   // const res = await fetch(`http://data.fixer.io/api/latest?access_key=${fixerApiKey}&symbols=RUB,USD,EUR`)
//     //   // return await res.json()
//     //   const res = await (await fetch(`https://api.exchangeratesapi.io/latest?symbols=USD,RUB`)).json()
//     //   res.rates[res.base] = 1
//     //   return res
//     // }
//   },
//   modules: {
//     // auth,
//     // userInfo,
//     // category,
//     // record
//   }
// })
