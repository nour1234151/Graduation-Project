import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Auth from "@/views/Auth.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    redirect: "/Auth",
  },
  {
    path: "/Auth",
    name: "Auth",
    component: Auth,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
