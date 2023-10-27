import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "@/styles/common.scss";
// 引入懒加载指令插件，并且注册
import { lazyPlugin } from "@/directive/index.js";
import { componentPlugin } from "@/components/index.js";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
const app = createApp(App);
const pinia = createPinia();

// 注册持久化插件
pinia.use(piniaPluginPersistedstate);

app.use(componentPlugin);
app.use(pinia);
app.use(router);
app.use(ElementPlus);
app.use(lazyPlugin);

app.mount("#app");
