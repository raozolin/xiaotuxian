import httpIntance from "@/utils/http";

// 结算页面的接口
export const getCheckInfoAPI = () => {
  return httpIntance({
    url: "/member/order/pre",
  });
};
