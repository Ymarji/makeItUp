import Vue from "vue";
import VueRouter from "vue-router";
import HomeViews from "@/views/HomeViews";
import productsView from "@/views/productsView";
import loginView from "@/views/loginView";
import signView from "@/views/signView";
import cartView from "@/views/cartView";
import productDescription from "@/views/productDescription";
import cheackoutView from "@/views/cheackoutView";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeViews,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/products",
    name: "products",
    component: productsView,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "login",
    component: loginView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/signin",
    name: "signin",
    component: signView,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/description/:id",
    name: "description",
    component: productDescription,
    meta: {
      requiresAuth: false,
    },
    props: true,
  },
  {
    path: "/cart",
    name: "cart",
    component: cartView,
    meta: {
      requiresAuth: true,
    },
    props: true,
  },
  {
    path: "/checkout",
    name: "checkout",
    component: cheackoutView,
    meta: {
      requiresAuth: true,
    },
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
