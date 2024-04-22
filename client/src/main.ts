import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import App from "./App.vue";
import ToastPlugin from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-bootstrap.css';


const app = createApp(App);

app.use(ToastPlugin);

app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.mount("#app");
