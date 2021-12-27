import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import installElementPlus from "./plugins/element";
import "./assets/css/icon.css";
import { createPinia } from 'pinia';
import { useStore } from "@/store/index" //每次刷新，vuex刷新，拉取本地缓存
const app = createApp(App);
installElementPlus(app);
app.use(createPinia()).use(router).mount("#app");
useStore().RefreshVuex()//每次刷新，vuex刷新，拉取本地缓存
