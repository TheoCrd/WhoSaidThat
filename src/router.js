import { createRouter, createWebHistory } from 'vue-router'
import PageHome from "./pages/pageHome.vue"
import pageSearchAnime from "./pages/pageSearchAnime.vue"
import pageSearchCharacter from "./pages/pageSearchCharacter.vue"
import QuoteDetailsAnime from "./pages/QuoteDetailsAnime.vue"
import QuoteDetailsCharacter from "./pages/QuoteDetailsCharacter.vue"
import Bookmarks from "./pages/pageBookmarks.vue"

const routes = [
  { path: '/', name:"Home", component: PageHome },
  { path: '/SearchQuoteAnime', name:"SearchQuoteAnime", component: pageSearchAnime },
  { path: '/SearchQuoteCharacter', name:"SearchQuoteCharacter", component: pageSearchCharacter },
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
