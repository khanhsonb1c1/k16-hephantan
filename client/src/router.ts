import { createRouter, createWebHistory } from "vue-router";
import { nextTick } from "vue";
import HomePage from "./pages/HomePage.vue";
import Products from "./pages/Products.vue";
import ProductDetail from "./pages/ProductDetail.vue";
import Login from "./pages/Login.vue";
import Register from "./pages/Register.vue";
import ChangePassword from "./pages/ChangePassword.vue";
import Manager from "./pages/ProductManager.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/products",
      name: "Products",
      component: Products,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/change-password",
      name: "change password",
      component: ChangePassword,
    },
    {
      path: "/manager",
      name: "Manager",
      component: Manager,
    },
    {
      path: "/products/:id",
      name: "Products detail",
      component: ProductDetail,
    },
  ],

  scrollBehavior() {
    return { top: 0 };
  },
});
router.afterEach((to) => {
  nextTick(() => {
    document.title = (to.meta.title || to.name) + " | " + "";
  });
});

export default router;
