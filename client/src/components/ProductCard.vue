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
        <div class="btn btn-danger">Xóa</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["product"],
  methods: {
    
  },
};
</script>

<style>
</style>