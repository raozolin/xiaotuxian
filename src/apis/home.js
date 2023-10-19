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
// 写人气推荐的接口
export const getHotAPI = () => {
  return httpIntance({
    url: "/home/hot",
  });
};

// 写产品列表的接口
export const getProductAPI = () => {
  return httpIntance({
    url: "/home/goods",
  });
};
