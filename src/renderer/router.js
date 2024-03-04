import { createRouter, createWebHashHistory } from "vue-router";

import StartPage from "./components/StartPage.vue"

const routes = [
  { path: '/', component: StartPage },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export { routes };

export default router;