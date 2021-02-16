import firebase from 'firebase/app'


export const state = () => ({
  error: null
})

export const actions = {
  async registerUser({ dispatch, commit }, { email, password, name }) {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password)
      const uid = await dispatch('getUid')
      await firebase.database().ref(`/users/${uid}/info`).set({
        name
      })
    } catch (e) {
      console.log(e);
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  },
  async login({ dispatch, commit }, { email, password }) {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
    } catch (e) {
      commit('SET_ERROR', e)
      throw e
    }
  },
  getUid() {
    const user = firebase.auth().currentUser
    return user ? user.uid : null
  },
  async logout({ commit }) {
    await firebase.auth().signOut()
    commit('CLEAR_USER_INFO')
  }
}