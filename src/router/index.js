import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import User from '../views/User'
import Map from '../views/Map'
import Control from '../views/Control'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/User',
    name: 'User',
    component: User
  },
  {
    path: '/Map',
    name: 'Map',
    component: Map
  },
  {
    path: '/Control',
    name: 'Control',
    component: Control
  }
]

const router = new VueRouter({
  routes
})

export default router
