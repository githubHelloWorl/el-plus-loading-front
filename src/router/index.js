import { createRouter, createWebHistory } from "vue-router";

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
  },
  {
    path: "/cascadertest",
    name: "cascadertest",
    component: () => import("@/views/CascaderTest.vue"),
  },
  {
    path: "/cascaderconvert",
    name: "cascaderconvert",
    component: () => import("@/views/CascaderConvert.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
