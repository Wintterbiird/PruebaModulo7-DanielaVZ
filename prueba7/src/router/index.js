import { createRouter, createWebHashHistory } from 'vue-router'
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
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/ejercicio1',
    name: 'ejercicio1',
    component: () => import('../views/Ejercicio1View.vue'),
  },
  {
    path: '/ejercicio3',
    name: 'ejercicio3',
    component: () => import('../views/Ejercicio3View.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
