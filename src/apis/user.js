// 封装所有和用户相关的接口函数
import httpIntance from "@/utils/http";

// 封装登录的接口
export const loginAPI = ({ account, password }) => {
  return httpIntance({
    url: "/login",
    method: "POST",
    data: {
      account,
      password,
    },
  });
};
