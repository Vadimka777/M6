import { createRouter, createWebHistory } from "vue-router";
import Main from "../views/Main.vue";
import Strategy from "../views/Strategy.vue";
import Royale from "../views/Royale.vue";
import Fantasy from "../views/Fantasy.vue";
import Shooter from "../views/Shooter.vue";
import Rpg from "../views/Rpg.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
    },
    {
      path: "/fantasy",
      name: "fantasy",
      component: Fantasy,
    },
    {
      path: "/rpg",
      name: "rpg",
      component: Rpg,
    },
    {
      path: "/shooter",
      name: "shooter",
      component: Shooter,
    },
    {
      path: "/strategy",
      name: "strategy",
      component: Strategy,
    },
    {
      path: "/royale",
      name: "royale",
      component: Royale,
    },
  ],
});

export default router;
