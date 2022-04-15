import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/logout',
    component: () => import('@/views/Logout.vue')
  },
  {
    path: '/manager/list',
    component: () => import('@/views/manager/List.vue')
  },
  {
      path: '/manager/findPassword',
      component: () => import('@/views/manager/FindPassword.vue')
  },
  {
    path: '/statis',
    component: () => import('@/views/Statistics.vue')
  },
  {
    path: '/movies',
    component: () => import('@/views/ListMovies.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
