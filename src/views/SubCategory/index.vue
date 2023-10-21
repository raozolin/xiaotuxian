<script setup>
import { getSubCategoryAPI } from "@/apis/category.js";
import { ref, onMounted } from "vue";
import { getSubCategoryGoodAPI } from "@/apis/category.js";
import GoodsItem from "../Home/components/GoodsItem.vue";
// 获得路由里面的那个参数
import { useRoute } from "vue-router";
const route = useRoute();

const subList = ref({});

const getSubCategory = async () => {
  const res = await getSubCategoryAPI(route.params.id);
  subList.value = res.result;
};
onMounted(() => {
  getSubCategory();
});

// 获取基础列表数据渲染
const goodList = ref([]);
// 准备基础参数
// 这是后端的字段
const reqData = ref({
  categoryId: route.params.id,
  // 以下都是默认值
  page: 1,
  pageSize: 20,
  sortField: "publishTime",
});

const getGoodList = async () => {
  // 把上面准备好的参数列表传入里面
  const res = await getSubCategoryGoodAPI(reqData.value);
  goodList.value = res.result.items;
};
onMounted(() => {
  getGoodList();
});

// tab切换回调
const tabChange = () => {
  // 使用新参数重新发送网络请求

  getGoodList();
};

// 这是到达底部的时候触发的函数
const disabled = ref(false);
const load = async () => {
  // 获取下一页数据
  reqData.value.page++;
  // 根据新参数重新发送请求
  const res = await getSubCategoryGoodAPI(reqData.value);
  // 新老数据拼接
  goodList.value = [...goodList.value, ...res.result.items];
  //   加载完毕停止监听
  if (res.result.length === 0) {
    disabled.value = true;
  }
};
</script>

<template>
  <div class="container">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <!-- 这是一级路由的跳转路径 -->
        <el-breadcrumb-item :to="{ path: `/category/${subList.parentId}` }">{{
          subList.parentName
        }}</el-breadcrumb-item>
        <el-breadcrumb-item>{{ subList.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
      <!-- 双向绑定这个参数 -->
      <el-tabs v-model="reqData.sortField">
        <!-- 当点击下面的元素的时候，会把name的值赋值给sortField -->
        <el-tab-pane
          label="最新商品"
          name="publishTime"
          @tan-change="tabChange"
        ></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <!-- 图片无线加载的功能项目配置 -->
      <div
        class="body"
        v-infinite-scroll="load"
        :infinite-scroll-disabled="disabled"
      >
        <!-- 商品列表-->
        <!-- :goods="goods" 是这个组间本身要求传入的参数 -->
        <GoodsItem v-for="goods in goodList" :goods="goods" :key="goods.id" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

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

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
}
</style>
