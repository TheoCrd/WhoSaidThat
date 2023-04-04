import { createRouter, createWebHistory } from 'vue-router'
import Page1 from "./pages/pageHome.vue"
import Page2 from "./pages/pageSecond.vue"

const routes = [
  { path: '/', name:"Home", component: Page1 },
  { path: '/pageSecond', name:"Second", component: Page2 }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
