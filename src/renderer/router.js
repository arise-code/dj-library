import { createRouter, createWebHashHistory } from "vue-router";

import StartPage from "./components/StartPage.vue";
import Library from "./components/Library.vue";

const routes = [
  { path: '/', component: StartPage },
  { path: "/library", component: Library }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export { routes };

export default router;