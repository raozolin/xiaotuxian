import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/user.js";
import router from "@/router";
const httpIntance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// 请求拦截器

httpIntance.interceptors.request.use(
  (config) => {
    // 1.从Pinia里面获取token数据
    const userStore = useUserStore();

    // 2.按照后端要求拼接token数据
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (e) => Promise.reject(e)
);

//   响应式拦截器
httpIntance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useUserStore();

    // 统一错误提示
    // 只要配置一次，就可以使得多个接口生效
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    // 401 token失效处理

    if (e.response.status === 401) {
      // 1.清除本地用户数据
      userStore.clearUserInfo();

      // 2.跳转到登录页
      router.push("/login");
    }
    return Promise.reject(e);
  }
);

export default httpIntance;
