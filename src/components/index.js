// 把components中的所有组件都进行全局化注册
// 通过插件化的方式

import imageView from "./imageView/index.vue";
import Sku from "./XtxSku/index.vue";
export const componentPlugin = {
  install(app) {
    // app.component('组件的名字'，组件的配置对象)
    app.component("imageView", imageView);
    app.component("Sku", Sku);
  },
};
