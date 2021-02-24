import firebase from 'firebase/app'
import 'firebase/database'

export const state = () => ({
  jobs: []
})

export const mutations = {
  SET_JOBS(state, jobs) {
    state.jobs = jobs
  }
}

export const actions = {
  async fetchJobs({ commit, dispatch }) {
    try {
      const jobs = (await firebase.database().ref(`/jobs`).once('value')).val() || {}
      const jobsData = Object.keys(jobs).map(key => ({...jobs[key], id: key }))
      commit('SET_JOBS', jobsData)
    } catch (error) {
      commit('SET_ERROR', error)
      throw error
    }
  },

}

export const getters = {
  jobs: state => state.jobs,
  jobsCount: state => state.jobs.length
}