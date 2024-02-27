
<template>
  <div>
    ok
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
    async fetch() {
      const res = await fetch("http://localhost:3000/user");
      const data = await res.json();
      this.users = data;
    },
  },
};
</script>


<style scoped>
</style>
