<template>
  <section class="hero-section hero-section-2 ptb-100">
    <div class="circles">
      <div class="point animated-point-1"></div>
      <div class="point animated-point-2"></div>
      <div class="point animated-point-3"></div>
      <div class="point animated-point-4"></div>
      <div class="point animated-point-5"></div>
      <div class="point animated-point-6"></div>
      <div class="point animated-point-7"></div>
      <div class="point animated-point-8"></div>
      <div class="point animated-point-9"></div>
    </div>
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="col-md-6 col-lg-6">
          <div class="hero-content-left ptb-100 text-white">
            <h1 class="text-white" style="color: #06b5e4 !important">Hoang Long Fruit</h1>
            <p class="lead" style="color: #44546b !important">
              Hoang Long Fruit là công ty hàng đầu trong lĩnh vực bán lẻ hoa quả tại Việt Nam.
            </p>

            <div class="download-btn mt-5">
              <router-link to="/#about" class="btn google-play-btn mr-3"> Tìm hiểu thêm</router-link>
              <!-- <a href="#" class="btn app-store-btn"><span class="ti-apple"></span> App Store</a> -->
            </div>
          </div>
        </div>
        <div class="col-md-6 col-lg-5">
          <div class="hero-animation-img">
            <img class="img-fluid d-block animation-one" src="/public/img/banner.png" alt="animation image" />
      
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "banner-component",
});
</script>

<style lang="scss" scoped></style>
