import { createRouter, createWebHashHistory } from "vue-router";

import login from '../views/login.vue';
import navs from '../views/navs.vue';
import heightDynamic from '../views/heightDynamic.vue';
import heightFixed from '../views/heightFixed.vue';
const routes = [
  {
    path: "/",
    name: "login",
    component: login,
  },
  {
    path: "/navs",
    name: "navs",
    component: navs,
  },
  {
    path: "/height-dynamic",
    name: "heightDynamic",
    component: heightDynamic,
  },
  {
    path: "/height-fixed",
    name: "heightFixed",
    component: heightFixed,
  },
  // {
  //   path: "/test",
  //   name: "Test",
  //   component: () => import("../views/Test.vue")
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
export default router;