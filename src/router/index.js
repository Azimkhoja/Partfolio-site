import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "HomeView",
      component: HomeView,
    },
    {
      path: "/aboutme",
      name: "AboutView",
      component: () => import("../views/AboutView/AboutView.vue"),
    },
    {
      path: "/partfolio",
      name: "PartfolioView",
      component: () => import("../views/PartfolioView/PartfolioView.vue"),
    },
    {
      path: "/skills",
      name: "SkillsView",
      component: () => import("../views/SkillsView/SkillsView.vue"),
    },
  ],
});

export default router;
