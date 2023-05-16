import { createRouter, createWebHistory } from 'vue-router'
import Page1 from "./pages/pageHome.vue"
import Page2 from "./pages/pageSecond.vue"
import QuoteDetails from "./pages/QuoteDetails.vue"
import Search from "./pages/SearchPage.vue"

const routes = [
  { path: '/', name:"Home", component: Page1 },
  { path: '/pageSecond', name:"Second", component: Page2 },
  {
    path: "/quote",
    name: "QuoteDetails",
    component: QuoteDetails,
    props: true,
  },
  { path: '/Search', name:"Search", component: Search }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
