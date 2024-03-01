<template>
  <div class="container">
 
    <div class="d-flex justify-content-center mt-5 ">
     <h4 class="text-primary text-uppercase"> Quản lý bán hoa quả</h4>
    </div>
    <div class="row mt-5">
      <product-card
        v-for="product in list"
        :key="product._id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ProductCard from "../components/ProductCard.vue";
export default {
  components: { ProductCard },
  data() {
    return {
      url: "http://localhost:3000/api/products",
      list: [],
      showModal: false,
    };
  },

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      axios.get(this.url).then(({ data }) => {
        this.list = data;
      });
    },

   
  },
};
</script>

<style scoped>
</style>