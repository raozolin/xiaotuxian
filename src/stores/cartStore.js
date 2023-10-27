// 封装购物车模块
import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartStore = defineStore(
  "cart",
  () => {
    // 1.定义state
    const cartList = ref([]);
    // 2.定义action
    const addCart = (goods) => {
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
    };

    return {
      cartList,
      addCart,
    };
  },
  {
    persist: true,
  }
);
