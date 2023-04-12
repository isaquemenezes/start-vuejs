//import has history, com # na url 
// import { createRouter, createWebHashHistory } from 'vue-router'

// import history, sem # 
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/service',
    name: 'service',
    component: () => import('@/views/ServiceView.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: () => import('@/views/PortfolioView.vue')
  },
  {
    path: '/usuarios/:id',
    name: 'usuarios-editar',
    component: () => import('@/views/UserEditView.vue')
  }

]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
