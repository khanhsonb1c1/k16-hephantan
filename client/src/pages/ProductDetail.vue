<template>
  <div class="container">
    <div class="row p-5">
      <div class="col-6">
        <div class="form-outline">
          <label class="form-label">Tên sản phẩm</label>
          <input type="text" class="form-control" v-model="detail.name" />
        </div>
      </div>
      <div class="col-6">
        <div class="form-outline">
          <label class="form-label">Giá</label>
          <input type="number" class="form-control" v-model="detail.price" />
        </div>
      </div>
      <div class="col-6">
        <div class="form-outline">
          <label class="form-label">Mô tả</label>
          <input
            type="text"
            class="form-control"
            v-model="detail.description"
          />
        </div>
      </div>
      <div class="col-6">
        <div class="form-outline">
          <label class="form-label">Link hình ảnh</label>
          <input type="text" class="form-control" v-model="detail.img_url" />
        </div>
      </div>

      <div class="col-12 mt-3">
        <div class="btn btn-success" @click="updateData">Cập nhật</div>
      </div>
    </div>
  </div>
</template>

<script >
import axios from "axios";
export default {
  data() {
    return {
      detail: {},
    };
  },

  computed: {},

  created() {
    this.fetchData();
  },

  methods: {
    fetchData() {
      const url = `http://localhost:3000/api/products/${this.$route.params.id}`;
      axios.get(url).then(({ data }) => {
        this.detail = data;
      });
    },

    updateData() {
      const url = `http://localhost:3000/api/products/${this.$route.params.id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.detail),
        mode: "cors",
      });
      //   axios
      //     .put(url, {
      //       ...this.detail,
      //     })
      //     .then(({ data }) => {
      //       this.detail = data;
      //     });
    },
  },
};
</script>

<style scoped>
.col-6 {
  margin-top: 1em;
}
</style>