import { createRouter, createWebHistory } from 'vue-router'
// import vCatalog from '../components/v-catalog.vue'
// import vCart from '../components/v-cart.vue'

const routes = [
  {
    path: '/',
    name: 'catalog',
    component: () => import('../components/v-catalog.vue')
  },
  {
    path: '/',
    name: 'cart',
    component: () => import('../components/v-cart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
