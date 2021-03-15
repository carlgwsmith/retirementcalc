import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Results from '../views/Results.vue'
import LongevityChart from '../components/charts/LongevityChart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path:'/Results',
    name: 'Results',
    component: Results
  },
  {
    path:'/chart',
    name: 'Chart',
    component: LongevityChart
  }
]

const router = new VueRouter({
  routes
})

export default router
