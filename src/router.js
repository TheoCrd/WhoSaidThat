import { createRouter, createWebHistory } from "vue-router";
import PageHome from "./pages/HeaderPages/pageHome.vue";
import pageSearchAnime from "./pages/HeaderPages/pageSearchAnime.vue";
import pageSearchCharacter from "./pages/HeaderPages/pageSearchCharacter.vue";
import QuoteDetailsAnime from "./pages/QuoteDetails/QuoteDetailsAnime.vue";
import QuoteDetailsCharacter from "./pages/QuoteDetails/QuoteDetailsCharacter.vue";
import Bookmarks from "./pages/HeaderPages/pageBookmarks.vue";

const routes = [
  { path: "/", name: "Home", component: PageHome },
  {
    path: "/SearchQuoteAnime",
    name: "SearchQuoteAnime",
    component: pageSearchAnime,
  },
  {
    path: "/SearchQuoteCharacter",
    name: "SearchQuoteCharacter",
    component: pageSearchCharacter,
  },
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
  { path: "/bookmarks", name: "Bookmarks", component: Bookmarks },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
