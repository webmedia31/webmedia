import Vue from 'vue'
import Vuex from 'vuex'

import localizeFilter from '@/filters/localize.filter'
Vue.filter('localize', localizeFilter)

Vue.use(Vuex)




// const state = () => ({
//   error: null,
//   lang: ""
// })


// export const mutations = {
//   SET_ERROR(state, error) {
//     state.error = error
//   },
//   CLEAR_ERROR(state) {
//     state.error = null
//   },
//   SET_LANG(state, lang) {
//     state.lang = lang
//   },
// }


const store = () => new Vuex.Store({
  state: {
    lang: ''
  },
  actions: {
    switchLang({ commit }, lang) {
      commit('SET_LANG', lang)
    }
  },
  mutations: {
    SET_LANG(state, lang) {
      state.lang = lang
    },
  },
  getters: {
    lang: (state) => {
      return state.lang || "ru-RU"
    }
  },
})


export default store





// export const actions = {
//   switchLang({ commit }, lang) {
//     commit('SET_LANG', lang)
//   }
// }

// export const getters = {
//   // error: s => s.error,
//   error: (state) => {
//     return state.error
//   },
//   lang: (state) => {
//     return state.lang || "ru-RU"
//   }
// }














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
