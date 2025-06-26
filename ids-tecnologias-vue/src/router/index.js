import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/hidrogeno',
    name: 'Hydrogen',
    component: () => import('../views/HydrogenView.vue')
  },
  {
    path: '/servicios-industriales',
    name: 'IndustrialServices',
    component: () => import('../views/IndustrialServicesView.vue')
  },
  {
    path: '/servicios-ambientales',
    name: 'EnvironmentalServices',
    component: () => import('../views/EnvironmentalServicesView.vue')
  },
  {
    path: '/empresa',
    name: 'Company',
    component: () => import('../views/CompanyView.vue')
  },
  {
    path: '/contacto',
    name: 'Contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/:pathMatch(.*)*', // Catch-all para 404
    name: 'NotFound',
    component: () => import('../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL || '/'), // Asegúrate que tu proyecto Vue esté en la raíz o configura BASE_URL en vite.config.js si está en un subdirectorio en producción
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

export default router // ESTA ES LA LÍNEA CLAVE
