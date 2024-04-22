<template>
  <!--partners section start-->
  <section id="products" class="promo-section ptb-100">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-7 col-md-8">
          <div class="section-heading text-center mb-5">
            <h2 style="font-size: 2.4em">Sản phẩm nổi bật</h2>
            <p class="lead">Cùng khám phá những sản phẩm hoa quả đang được ưa chuộng tại Hoang Long fruit.</p>
          </div>
        </div>
      </div>
      <div class="row equal" v-if="fetching">
        <cart-item-skeleton v-for="i in 8" :key="i" />
      </div>
      <div class="row equal" v-else>
        <product-cart v-for="item in products" :key="item.id" :item="item" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductCart from "./ProductCart.vue";
import CartItemSkeleton from "./CartItemSkeleton.vue";
import { getProduct } from "@/services/getAPI";

export default defineComponent({
  name: "products-component",
  components: {
    ProductCart,
    CartItemSkeleton,
  },
  data() {
    return {
      products: [] as any,
    };
  },
  created() {
    getProduct({
      page: 1,
    }).then(({ data }) => {
      console.log(data);
      this.products = data;
    });
  },
  computed: {},
});
</script>

<style></style>
