import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "@/styles/common.scss";
// 引入懒加载指令插件，并且注册
import { lazyPlugin } from "@/directive/index.js";
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ElementPlus);
app.use(lazyPlugin);

app.mount("#app");
