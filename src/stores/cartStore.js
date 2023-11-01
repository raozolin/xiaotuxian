// 封装购物车模块
import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./user.js";
import { insertCartAPI, findNewCartListAPI, delCartAPI } from "@/apis/cart.js";

export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);
    // 1.定义state
    const cartList = ref([]);
    // 获取最新的购物车列表
    const updateNewList = async () => {
      const res = await findNewCartListAPI();
      cartList.value = res.result;
    };

    // 2.定义action
    const addCart = async (goods) => {
      const { skuId, count } = goods;
      console.log(skuId, count);

      if (isLogin.value) {
        // 登录之后的加入购车逻辑
        await insertCartAPI({ skuId, count });
        updateNewList();
      } else {
        // 登录之前的购物车逻辑
        // 添加购物车操作
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item) => {
          goods.skuId === item.skuId;
        });
        // 1.已经添加过，count+1
        if (item) {
          item.count++;
        }
        // 2.没有添加过，直接push
        else {
          cartList.value.push(goods);
        }
      }
    };
    // 3.添加删除购物车功能
    const clearCart = async (skuId) => {
      if (isLogin.value) {
        await delCartAPI([skuId]);
        const res = await findNewCartListAPI();
        cartList.value = res.result;
      } else {
        // 找到要删除项的下标值-splice方法||使用数组的过滤方法filter
        const index = cartList.value.findIndex((item) => skuId === item.skuId);
        cartList.value.splice(index, 1);
      }
    };

    // 计算属性
    // 1.总的数量 所有项的count之和
    const allCount = computed(() => {
      cartList.value.reduce((a, c) => a + c.count, 0);
    });
    // 2.总价 所有项的count*price之和
    const allPrice = computed(() =>
      cartList.value.reduce((a, c) => a + c.count * c.price, 0)
    );

    // 单选功能
    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => (item.skuId = skuId));
      item.selected = selected;
    };

    // 是否全选
    const isAll = computed(() => {
      cartList.value.every((item) => {
        item.selected;
      });
    });

    // 全选功能
    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };
    //已选择数量
    const selectedCount = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count, 0)
    );
    // 4. 已选择商品价钱合计
    const selectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((a, c) => a + c.count * c.price, 0)
    );

    // 清除购物车
    const clearCartAll = () => {
      cartList.value = "";
    };
    return {
      clearCartAll,
      selectedPrice,
      selectedCount,
      allCheck,
      isAll,
      singleCheck,
      allCount,
      allPrice,
      cartList,
      addCart,
      clearCart,
      updateNewList,
    };
  },
  {
    persist: true,
  }
);
