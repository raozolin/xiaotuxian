import httpIntance from "@/utils/http";
// 编写接口函数
export function getCategoryAPI() {
  return httpIntance({
    url: "/home/category/head",
  });
}
