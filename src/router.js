import { createRouter, createWebHistory } from 'vue-router'
import Page1 from "./pages/pageHome.vue"
import Page2 from "./pages/pageSecond.vue"
import Page3 from "./pages/pageThird.vue"
import QuoteDetailsAnime from "./pages/QuoteDetailsAnime.vue"
import QuoteDetailsCharacter from "./pages/QuoteDetailsCharacter.vue"
import Bookmarks from "./pages/pageBookmarks.vue"

const routes = [
  { path: '/', name:"Home", component: Page1 },
  { path: '/pageSecond', name:"Second", component: Page2 },
  { path: '/pageThird', name:"Third", component: Page3 },
  {
    path: "/quoteAnime",
    name: "QuoteDetailsAnime",
    component: QuoteDetailsAnime,
    props: true,
  },
  {
    path: "/quoteCharacter",
    name: "QuoteDetailsCharacter",
    component: QuoteDetailsCharacter,
    props: true,
  },
  { path: '/bookmarks', name:"Bookmarks", component: Bookmarks },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router
