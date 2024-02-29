<template>
  <div class="col-3">
    <div class="card">
      <img :src="product.img_url" class="card-img-top" />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
        <h4>{{ product.price }}đ</h4>
        <p class="card-text">
          {{ product.description }}
        </p>

        <router-link  :to="`/product/${product._id}`" class="btn btn-primary">Mua ngay</router-link>
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