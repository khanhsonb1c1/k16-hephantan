// import { createApp } from 'vue'
import router from './router';
import './style.css'
import App from './App.vue'
import { createApp } from "vue";

const app = createApp(App);
app.use(router);
app.mount("#app");

// Đây là file khởi tạo
// chỉ quan tâm file này với file App.vue, vì t chỉ demo 1 trang