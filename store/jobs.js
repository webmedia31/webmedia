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

    // state.editingJob = Object.assign({}, job.editingJob)
    // state.someObj = Object.assign({}, payload.someObj)
  },
  ADD_JOB(state, job) {
    console.log('add_job commit');
    state.jobs.push(job)
  },
  UPDATE_JOB(state, jobData) {

    console.log(state);
    console.log(jobData);

    state.jobs.forEach((job, index) => {
      if (job.id === jobData.id) {
        state.jobs[index] = jobData
      }
    });


    // state.someObj = Object.assign({}, payload.someObj)


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
      const vacancy = (await firebase.database().ref(`/jobs`).child(id).once('value')).val() || {}
      const vacancyData = {
        id: id,
        ...vacancy
      }
      commit('SET_EDITINGJOB', vacancyData)
    } catch (error) {
      commit('SET_ERROR', error, { root: true })
      throw error
    }
  },

  // CREATE VACANCY
  async createVacancy({ dispatch, commit, route }, vacancy) {
    try {
      const createRes = await firebase.database().ref(`/jobs`).push(vacancy)
      const id = createRes.path.pieces_[1]; // vacancy id
      const toUpdate = {...vacancy, id }

      // update new added vacancy with, add id
      await firebase.database().ref(`/jobs/${id}`).update(toUpdate)
      commit('ADD_JOB', toUpdate)

      // redirect to edit new added post
      this.$router.push(`/admin/vacancy/${id}`)
    } catch (error) {
      commit('SET_ERROR', error, { root: true })
      throw error
    }
  },

  // UPDATE VACANCY
  async updateVacancy({ dispatch, commit, getters }, toUpdate) {
    try {
      let vacancyId = toUpdate.id;

      await firebase.database().ref(`/jobs/${vacancyId}`).update(toUpdate)
      commit('UPDATE_JOB', toUpdate)

    } catch (error) {
      commit('SET_ERROR', error, { root: true })
      throw error
    }
  }

}

export const getters = {
  jobs: state => state.jobs,

  editingJob: state => state.editingJob,
  // editingJob: state => Object.assign({}, state.editingJob), //fixed [vuex] Do not mutate vuex store state outside mutation handlers. ERROR BUT FIALS VALIDATION?

  jobsCount: state => state.jobs.length
}
