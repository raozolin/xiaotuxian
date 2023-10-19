import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "@/styles/common.scss";
import { useIntersectionObserver } from "@vueuse/core";

const app = createApp(App);
// 定义懒加载全局指令
app.directive("img-lazy", {
  mounted(el, binding) {
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting) {
        // 进入视口区域
        el.src = binding.value;
      }
    });
  },
});
app.use(createPinia());
app.use(router);
app.use(ElementPlus);

app.mount("#app");
