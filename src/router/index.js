import { createRouter, createWebHashHistory } from "vue-router";

import MakeupHome from "../pages/MakeupHome.vue";
import MessagePage from "../pages/MessagePage.vue";
import MinePage from "../pages/MinePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: MakeupHome
  },
  {
    path: "/message",
    name: "message",
    component: MessagePage
  },
  {
    path: "/mine",
    name: "mine",
    component: MinePage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
