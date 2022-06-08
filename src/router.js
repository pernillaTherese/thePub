import { createRouter, createWebHashHistory } from "vue-router";

import HomeView from "./views/HomeView.vue";
import BrewView from "./views/BrewView.vue";
import PubView from "./views/PubView.vue";
import ToastView from "./views/ToastView.vue";
import DrinkView from "./views/DrinkView.vue";

export default createRouter({
  history: createWebHashHistory(),

  routes: [
    {
      component: HomeView,
      path: "/",
    },
    {
      component: BrewView,
      path: "/breweries",
    },
    {
      component: PubView,
      path: "/pub",
    },
    {
      component: ToastView,
      path: "/toast",
    },
    {
      component: DrinkView,
      path: "/drink",
    },
  ],
});
