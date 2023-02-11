/* eslint-disable no-unused-vars */
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HistoryView from '../views/HistoryView.vue'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Diabetic Retinopathy - Home'
      }
    },
    {
      path: '/history',
      name: 'history',
      component: HistoryView,
      meta: {
        title: 'Diabetic Retinopathy - History'
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: 'Diabetic Retinopathy - About'
      }
    }
  ],
  linkActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  NProgress.done()
})

export default router
