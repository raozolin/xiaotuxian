import httpIntance from "@/utils/http.js";
export const getBannerAPI = (params = {}) => {
  // 默认为1 商品为2
  // 不传的话就默认为1
  // 传的话就传个2下来
  const { distributionSite = "1" } = params;
  return httpIntance({
    url: "/home/banner",
    params: {
      distributionSite,
    },
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
