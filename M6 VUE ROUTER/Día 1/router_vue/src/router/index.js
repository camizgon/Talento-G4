import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () => import(/* webpackChunkName: "contact" */ "../views/ContactView.vue"), // Corrige la coma aquí
  },
  {
    path: "/products",
    name: "products",
    component: () => import(/* webpackChunkName: "about" */ "../views/ProductsView.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
