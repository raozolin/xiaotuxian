import httpIntance from "@/utils/http.js";
export const getBannerAPI = () => {
  return httpIntance({
    url: "/home/banner",
  });
};
