import axios from "axios";
const httpIntance = axios.create({
  // 接口基地址
  baseURL: "http://pcapi-xoaotuxian-front-devtest.itheima.net",
  // 接口超时时间
  timeout: 5000,
});

// 请求拦截器

httpIntance.interceptors.request.use(
  (config) => {
    return config;
  },
  (e) => Promise.reject(e)
);

//   响应式拦截器
httpIntance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e);
  }
);

export default httpIntance;
