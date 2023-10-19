import httpIntance from "@/utils/http.js";
export const getBannerAPI = () => {
  return httpIntance({
    url: "/home/banner",
  });
};
// 写新鲜好物的接口
export const getNewAPI = () => {
  return httpIntance({
    url: "/home/new",
  });
};
