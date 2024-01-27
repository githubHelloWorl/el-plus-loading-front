import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Cascader from "../views/Cascader.vue";

const routes = [
  {
    path: "/",
    name: "home",
    redirect: "/cascader",
    component: () => import("../views/Cascader.vue"),
  },
  {
    path: "/cascader",
    name: "cascader",
    component: () => import("../views/Cascader.vue"),
  },
  {
    path: "/loayload",
    name: "loayload",
    component: () => import("@/views/LoayLoad.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
