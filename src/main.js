import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.min.css";

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "@/assets/css/main.scss";
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
