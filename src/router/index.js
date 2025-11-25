import { createRouter, createWebHashHistory } from "vue-router";

import MakeupHome from "../pages/MakeupHome.vue";
import MessagePage from "../pages/MessagePage.vue";
import MinePage from "../pages/MinePage.vue";
import MakeupDetail from "../pages/MakeupDetail.vue";
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
  },
   {
    path: "/makeup/:id",
    name: "makeupDetail",
    component: MakeupDetail
  },
  {
  path: '/chat/:id',
  name: 'chat',
  component: () => import('@/pages/ChatPage.vue')
},{
  path: "/orders",
  name: "orders",
  component: () => import("@/pagess/OrdersPage.vue")
}


];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
