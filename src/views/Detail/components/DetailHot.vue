<script setup>
import { fetchHotGoodsAPI } from "@/apis/detail.js";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();

// 设置参数列表
const GoodData = ref({
  id: route.params.id,
  type: 1,
});
const HotGoodList = ref([]);
const fetchHotGoods = async () => {
  const res = await fetchHotGoodsAPI(GoodData.value);
  HotGoodList.value = res.result;
};
onMounted(() => {
  fetchHotGoods();
});
</script>

<template>
  <div class="goods-hot">
    <h3>周日榜单</h3>
    <!-- 商品区块 -->
    <RouterLink
      to="/"
      class="goods-item"
      v-for="item in HotGoodList"
      :key="item.id"
    >
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.price }}</p>
    </RouterLink>
  </div>
</template>

<style lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }
}
</style>
