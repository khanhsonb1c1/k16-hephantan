<template>
  <product-detail :detail="detail">
    <template #check_info></template>
  </product-detail>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductDetail from "@/components/ProductDetail.vue";
import { getProductDetail } from "@/services/getAPI";

export default defineComponent({
  components: { ProductDetail },
  data() {
    return {
      detail: {} as any,
    };
  },
  computed: {
    id() {
      return String(this.$route.params.id);
    },
  },
  watch: {
    id: {
      immediate: true,
      handler() {
        getProductDetail(this.id).then(({data}) => {
          this.detail = data
        })
      },
    },
  },

  methods: {
    //
  },
});
</script>

<style scoped lang="scss"></style>
