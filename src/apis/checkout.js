import httpIntance from "@/utils/http";

// 结算页面的接口
export const getCheckInfoAPI = () => {
  return httpIntance({
    url: "/member/order/pre",
  });
};
// 创建订单
export const createOrderAPI = (data) => {
  return httpIntance({
    url: "/member/order",
    method: "POST",
    data,
  });
};
