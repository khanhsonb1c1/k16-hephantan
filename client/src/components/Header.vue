<template>
  <header class="header">
    <!--start navbar-->
    <nav class="navbar navbar-expand-lg fixed-top" style="background: #b6ebfc">
      <div class="container">
        <button class="navbar-toggler" @click="handleCollapse">
          <span class="ti-menu"></span>
        </button>

        <div class="collapse navbar-collapse main-menu" ref="menu" @click="handleCollapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-for="(item, index) in menu" :key="index">
              <RouterLink class="nav-link page-scroll" :to="item.path">{{ item.name }}</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink class="nav-link page-scroll" to="/manager" v-if="user?.role === 'admin'">Quản lý</RouterLink>
            </li>
            <li class="nav-item" v-if="!user._id">
              <RouterLink class="nav-link page-scroll" to="/login">Đăng nhập</RouterLink>
            </li>

            <li class="nav-item" v-else>
              <RouterLink class="nav-link page-scroll" to="/login" @click="onLogout()">Đăng xuất</RouterLink>
            </li>
          </ul>
          <ul class="navbar-nav ml-auto">
            <RouterLink to="/products" class="btn google-play-btn mr-3">SẢN PHẨM</RouterLink>
          </ul>
        </div>
      </div>
    </nav>
    <!--end navbar-->
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { authStore } from "../stores/authStore.";

export default defineComponent({
  name: "header-component",
  data() {
    return {
      menu: [
        {
          name: "Trang chủ",
          path: "/",
        },
        {
          name: "Dịch vụ",
          path: "/#services",
        },
        {
          name: "Giới thiệu",
          path: "/#about",
        },
        {
          name: "Liên hệ",
          path: "/#contact",
        },
      ],
    };
  },

  computed: {
    user() {
      return authStore().auth;
    },
  },

  methods: {
    handleCollapse() {
      const menu_element: any = this.$refs.menu;

      if (menu_element.classList.contains("collapse")) {
        menu_element.classList.remove("collapse");
      } else {
        menu_element.classList.add("collapse");
      }
    },

    onLogout() {
      authStore().auth = {};
    },
  },
});
</script>

<style></style>
