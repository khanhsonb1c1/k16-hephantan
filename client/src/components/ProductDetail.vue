<template>
  <section class="promo-section ptb-100 gray-bg">
    <div class="container pl-0">
      <bread-crumb :target="target_breadcrump" />
    </div>

    <div class="container white-bg">
      <div class="row equal mt-3">
        <div class="col-lg-6">
          <div class="product-images">
            <main id="gallery">
              <div class="main-img position-relative">
                <img class="" :src="detail?.img_url || 'https://via.placeholder.com/1000x670'" id="current" alt="#" />
              </div>

              <div class="images scroll-x scroll-hidden">
                <img
                  v-for="(img, index) in detail?.images"
                  :key="index"
                  :src="img.url || 'https://via.placeholder.com/1000x670'"
                  class="img"
                  alt="#"
                />
              </div>
            </main>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="product-content">
            <div class="option">
              <p>Nhà cung cấp: <span>IKOM</span></p>
            </div>

            <div class="name">
              <h3>{{ detail?.name }}</h3>
            </div>

            <div class="reviews">
              <!-- <span>{{ detail?.star || 5 }} </span> -->
              <star />
              <div class="dot"></div>
              <span> {{ detail?.reviews_count }} </span>
              <p class="text-primary">Đánh giá</p>
            </div>

            <div class="price-box">
              <text-money :amount="detail.price" :to_vnd="true" />
            </div>

            <div class="info row">
              <div class="col-lg-4"><p>Mô tả:</p></div>
              <div class="col-lg-8">
                <span> {{ detail.description }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Star from "@/components/Star.vue";
import TextMoney from "@/components/TextMoney.vue";
import BreadCrumb from "@/components/BreadCrumb.vue";
// import ProductReview from "./ProductReview.vue";

export default defineComponent({
  name: "product-detail-component",
  components: { Star, TextMoney, BreadCrumb },
  props: {
    detail: {
      type: {} as any,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    id() {
      return String(this.$route.params.id);
    },

    target_breadcrump() {
      return this.detail?.categories?.length ? this.detail?.categories[0].name : this.detail?.name;
    },
  },

  methods: {},
});
</script>

<style scoped lang="scss">
.gray-bg {
  background: #edf0f3;
}
.white-bg {
  background: #ffff;
  border-radius: 0.75em;
}
.product-images {
  padding: 2em;
  img {
    width: 100%;
    cursor: pointer;
    // border: 1px solid #eee;
    border-radius: 4px;
    overflow: hidden;
    padding: 8px;
    object-fit: contain;
  }

  .images {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 1em 1em;
    margin-top: 1em;
    display: flex;

    img {
      width: 20%;
      overflow: unset;
      object-fit: contain;
      border: 1px solid #eee;
    }

    // @media #{$xs} {
    //   grid-template-columns: repeat(3, 1fr);
    // }
  }

  @keyframes fadeIn {
    to {
      opacity: 1;
    }
  }

  .fade-in {
    animation: fadeIn 0.5s ease-in 1 forwards;
  }

  .main-img {
    text-align: center;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      max-height: 100%;
    }
    // @media #{$md,$xs} {
    //   height: 350px;
    // }
    .current-img {
      width: auto;
      max-width: 100%;
      max-height: 100%;
    }

    .fa-solid {
      font-size: 1.5em;
      transition: 0.5s;
      cursor: pointer;

      &:hover {
        color: #b10813;
      }
    }
    .fa-angle-left {
      position: absolute;
      top: 50%;
      left: 10px;
    }
    .fa-angle-right {
      position: absolute;
      top: 50%;
      right: 10px;
    }
  }
}
.scroll-hidden ::-webkit-scrollbar {
  height: 0;
  width: 0;
}

.scroll-x {
  overflow-x: auto;

  &.scroll-hidden {
    padding-right: 10px;
    &::-webkit-scrollbar {
      height: 0px !important;
      width: 0 !important;
    }
  }

  &.scroll-tiny::-webkit-scrollbar {
    height: 1px !important;
    width: 0px !important;
  }
}

.description {
  overflow: hidden;
}
@media screen and (max-width: 767px) {
  .container {
    border-radius: 0;
  }
  .promo-section {
    margin-top: 20px;
  }
}
</style>
