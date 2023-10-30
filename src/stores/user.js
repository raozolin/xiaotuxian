// 管理用户数据相关
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";
import { ref } from "vue";
import { useCartStore } from "./cartStore";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    // 1.定义管理用户数据的state
    const userInfo = ref({});
    // 2.定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
    };
    // 退出时清除用户信息和购物车信息
    const clearUserInfo = () => {
      userInfo.value = {};
      cartStore.clearCartAll();
    };

    // 3.以对象的格式，把state和actionreturn出去

    return {
      clearUserInfo,
      userInfo,
      getUserInfo,
    };
  },
  {
    persist: true,
  }
);
