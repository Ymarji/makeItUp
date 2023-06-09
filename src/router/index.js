import Vue from "vue";
import VueRouter from "vue-router";
import HomeViews from "@/views/HomeViews";
import productsView from "@/views/productsView";
import loginView from "@/views/loginView";
import signView from "@/views/signView";
import cartView from "@/views/cartView";
import productDescription from "@/views/productDescription";
import checkInfoView from "@/views/checkInfoView";
import PageNotFound from "@/views/pageNotFound";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeViews,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/products",
    name: "products",
    component: productsView,
    meta: {
      requiresAuth: false,
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
  },
  {
    path: "/checkout",
    name: "checkout",
    component: checkInfoView,
    meta: {
      requiresAuth: false,
    },
  },
  { path: "*", component: PageNotFound },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
