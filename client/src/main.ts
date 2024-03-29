import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "./router";
import App from "./App.vue";

const app = createApp(App);
app.use(VueAxios, axios);
app.use(createPinia());
app.use(router);
app.mount("#app");
