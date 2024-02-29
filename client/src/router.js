import { createRouter, createWebHistory } from "vue-router";
import ProductList from "./pages/ProductList.vue";
import ProductDetail from "./pages/ProductDetail.vue";

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
      component: ProductList,
    },
    {
      path: "/product/:id",
      name: "detail",
      component: ProductDetail,
    },
  ],
});

export default router;
