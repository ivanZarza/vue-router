import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BrazilPageView from '@/views/BrazilPageView.vue'
import JamaicaPageView from '@/views/JamaicaPageView.vue'
import HawaiPageView from '@/views/HawaiPageView.vue'
import PanamaPageView from '@/views/PanamaPageView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/brazil',
      name: 'brazil',
      component: BrazilPageView
    },
    {
      path: '/hawaii',
      name: 'hawaii',
      component: HawaiPageView
    },
      {
      path: '/jamaica',
      name: 'jamaica',
      component: JamaicaPageView
    },
    {
      path: '/panama',
      name: 'panama',
      component: PanamaPageView
    }
  ]
})

export default router
