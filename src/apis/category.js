import httpIntance from "@/utils/http";

// 封装接口
export const getCategoryAPI = (id) => {
  return httpIntance({
    url: "/category",
    // 要请求的参数
    params: {
      id,
    },
  });
};
