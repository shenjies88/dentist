import Vue from 'vue'
import Vuex from 'vuex'
import patient from './patient'
import material from './material'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    patient,
    material
  }
})
