import axios from "axios";
const httpIntance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
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
