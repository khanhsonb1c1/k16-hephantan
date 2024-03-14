import type Pagination from "@/types/Pagination";
import type Product from "@/types/Product";
import type CheckProduct from "@/types/checkProduct";
import { defineStore } from "pinia";

export const productStore = defineStore({
  id: "product",
  state: () => ({
    top_products: {} as any,
    fetching: false,
    list: [] as Product[],
    pagination: {} as Pagination,
    detail: {} as Product,
    check_product: {} as CheckProduct,
  }),

  actions: {
    fetchTopProducts() {
     
    },

    fetchProductList(params: object) {
     
    },

    fetchDetailProduct(id: string) {
      
    },
    fetchCheckInfo(id: string) {
      
    },
  },
});
