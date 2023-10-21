import httpIntance from "@/utils/http";

// 封装一级分类接口
export const getCategoryAPI = (id) => {
  return httpIntance({
    url: "/category",
    // 要请求的参数
    params: {
      id,
    },
  });
};
// 封装二级分类接口
export const getSubCategoryAPI = (id) => {
  return httpIntance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};
