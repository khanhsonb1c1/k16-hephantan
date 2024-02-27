
<template>
  <div>
    ok
    <!-- Chỗ này sẽ render danh sách user theo biến users ở dòng 13 -->
    <div class="" v-for="i in users" :key="i._id">{{ i }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: [],
    };
  },

  created() {
    this.fetch();
  },

  methods: {
    // Hàm này xử lý "Bất đồng bộ" để gọi API kết nối từ server
    // Lưu ý phải start cái server trước
    async fetch() {
      const res = await fetch("http://localhost:3000/user");
      const data = await res.json();
      // sau khi có dữ liệu trả về sẽ cập nhật lại cái biến user ở dòng 13
      this.users = data;
    },
  },
};
</script>


<style scoped>
</style>
