import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cate from '../views/Cate.vue'
import Search from '../components/search'
import Me from '../views/Me'
import Details from '../views/details'
import Cart from '../views/Cart'
import searchResult from '../views/searchResult.vue'
// import { component } from 'vue/types/umd'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/details/:pid',
    component: Details
  },
  {
    path: '/searchResult',
    component: searchResult
  },
  {
    path: '/cart',
    component: Cart
  },
  {
    path: '/search',
    name: 'Search',
    component:Search
  },
  {
    path: '/me',
    name: 'Me',
    component:Me
  },
  {
    path: '/cate',
    name: 'Cate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Cate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
