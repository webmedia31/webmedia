import firebase from 'firebase/app'
import 'firebase/database'

export const state = () => ({
  jobs: [],
  job: {}
})

export const mutations = {
  SET_JOBS(state, jobs) {
    state.jobs = jobs
  },
  SET_JOB(state, job) {
    state.job = job
  }
}

export const actions = {
  // FETCH ALL JOBS
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

  // FETCH SINGLE JOB
  async fetchJobdById({ commit, dispatch }, id) {
    try {
      const job = (await firebase.database().ref(`/jobs`).child(id).once('value')).val() || {}
      const jobData = {
        id: id,
        ...job
      }
      commit('SET_JOB', jobData)
    } catch (error) {
      commit('SET_ERROR', error)
      throw error
    }
  },

  // FETCH SINGLE JOB
  async updateVacancy({ dispatch, commit, getters }, toUpdate) {
    try {
      const updateData = {...getters.info, ...toUpdate }
      let vacancyId = toUpdate.id;

      await firebase.database().ref(`/jobs/${vacancyId}`).update(updateData)



      // commit('setVacancyData', updateData)


    } catch (e) {
      commit('setError', e)
      throw e
    }
  }

}

export const getters = {
  jobs: state => state.jobs,
  job: state => state.job,
  jobsCount: state => state.jobs.length
}
