import firebase from 'firebase/app'
import 'firebase/database'

export const state = () => ({
  jobs: [],
  editingJob: {}
})

export const mutations = {
  SET_JOBS(state, jobs) {
    state.jobs = jobs
  },
  SET_EDITINGJOB(state, job) {
    state.editingJob = job
  },
  ADD_JOB(state, job) {
    console.log('add_job commit');
    state.jobs.push(job)
  },
  UPDATE_JOB(state, job) {

    console.log(state);
    console.log(job);


    // console.log('add_job commit');
    // state.jobs.push(job)
  },
}

export const actions = {
  // FETCH ALL VACANCIES
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

  // FETCH SINGLE VACANCY
  async fetchJobdById({ commit, dispatch }, id) {
    try {
      const job = (await firebase.database().ref(`/jobs`).child(id).once('value')).val() || {}
      const jobData = {
        id: id,
        ...job
      }
      commit('SET_EDITINGJOB', jobData)
    } catch (error) {
      commit('SET_ERROR', error)
      throw error
    }
  },

  // CREATE VACANCY
  async createVacancy({ dispatch, commit }, vacancy) {
    try {
      // return await firebase.database().ref(`/jobs`).push(vacancy)

      console.log(await firebase.database().ref(`/jobs`).push(vacancy));

      commit('ADD_JOB', e)
    } catch (e) {

      console.log(e);



      // commit('SET_ERROR', e, { root: true })



      throw e
    }
  },

  // UPDATE VACANCY
  async updateVacancy({ dispatch, commit, getters }, toUpdate) {
    try {
      let vacancyId = toUpdate.id;

      await firebase.database().ref(`/jobs/${vacancyId}`).update(toUpdate)
      commit('UPDATE_JOB', toUpdate)

    } catch (e) {
      commit('SET_ERROR', e, { root: true })
      throw e
    }
  }

}

export const getters = {
  jobs: state => state.jobs,
  editingJob: state => state.editingJob,
  jobsCount: state => state.jobs.length
}
