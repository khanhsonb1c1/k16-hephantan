<template>
  <banner />
  <products />
  <!-- <highlight /> -->
  <about />
  <!-- <Activity /> -->
  <services />

  <contact />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Banner from "@/components/Banner.vue";
import Services from "@/components/Services.vue";
import Contact from "@/components/Contact.vue";
import Products from "@/components/Products.vue";
import About from "@/components/About.vue";

export default defineComponent({
  components: {
    Banner,
    Services,
    Contact,
    Products,
    About,
  },
  computed: {
   
  },
});
</script>

<style></style>
