import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/user.js";
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
    // 统一错误提示
    // 只要配置一次，就可以使得多个接口生效
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });
    return Promise.reject(e);
  }
);

export default httpIntance;
