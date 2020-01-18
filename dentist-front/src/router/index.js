import Vue from 'vue'
import VueRouter from 'vue-router'
import patient from './patient'
import material from './material'

Vue.use(VueRouter)

const routes = [
  patient,
  material
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
