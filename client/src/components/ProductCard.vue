<template>
  <div class="col-3 mt-2 mb-1">
    <div class="card">
      <img :src="product.img_url" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <h4>{{ product.price }}đ</h4>
        <p class="card-text">
          {{ product.description }}
        </p>
        <div class="d-flex" style="justify-content: space-between">
          <router-link  :to="`/product/${product._id}`" class="btn btn-primary">Chi tiết</router-link>
        <div class="btn btn-danger" @click="deleteProduct()">Xóa</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  props: ["product"],
  methods: {
    deleteProduct() {
      const url = `http://localhost:3000/api/products/${this.product._id}`
      axios.delete(url).then(() => {
       alert("Xoa thanh cong")
      });
    }
  },
};
</script>

<style>
</style>