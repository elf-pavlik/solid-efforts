/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Person from '@/pages/Person.vue'
import Draft from '@/pages/Draft.vue'
import Implementation from '@/pages/Implementation.vue'
import Product from '@/pages/Product.vue'

const routes = [
  { path: '/', name: 'home', component: Home},
  { path: '/person', name: 'person', component: Person},
  { path: '/draft', name: 'draft', component: Draft},
  { path: '/implementation', name: 'implementation', component: Implementation},
  { path: '/product', name: 'product', component: Product},
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes 
})

export default router
