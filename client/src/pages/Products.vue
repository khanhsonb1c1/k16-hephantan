<template>
  <section class="promo-section ptb-100">
    <div class="container">
      <div class="filter-category">
        <!-- <div class="item" v-for="item in categories" :key="item.id">
          <span>{{ item.name }}</span>
        </div> -->
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
import ProductCart from "@/components/ProductCart.vue";
import CartItemSkeleton from "@/components/CartItemSkeleton.vue";
import { getProduct } from "@/services/getAPI";

export default defineComponent({
  name: "product-list-page",
  components: {
    ProductCart,
    CartItemSkeleton,
  },
  data() {
    return {
      products: [] as any,
    };
  },
  computed: {},
  watch: {
    query: {
      immediate: true,
      handler() {
        this.fetchProduct();
      },
    },
  },

  created() {
    this.fetchProduct();
  },

  methods: {
    fetchProduct() {
      getProduct({
        page: 1,
      }).then(({ data }) => {
        console.log(data);
        this.products = data;
      });
    },
  },
});
</script>

<style scoped lang="scss">
.promo-section {
  margin-top: 50px;
}
@media screen and (max-width: 767px) {
  .promo-section {
    margin-top: 80px;
  }
}

.filter-category {
  display: flex;
  flex-wrap: wrap;
}
</style>
