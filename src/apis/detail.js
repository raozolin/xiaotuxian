import httpIntance from "@/utils/http";

// 封装商品详情页的接口
export const getDetailAPI = (id) => {
  return httpIntance({
    url: "/goods",
    params: {
      id,
    },
  });
};
