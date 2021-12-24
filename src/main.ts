import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import installElementPlus from "./plugins/element";
import "./assets/css/icon.css";
import { createPinia } from 'pinia';
const app = createApp(App);
installElementPlus(app);
app.use(createPinia()).use(router).mount("#app");
