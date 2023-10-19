<template>
  <LayouFixed />
  <LayoutNav />
  <LayoutHeader />
  <!-- 破坏复用机制 强制销毁重建 解决路由缓存问题 -->
  <!-- <RouterView :key="$route.fullPath" /> -->
  <RouterView />>
  <LayoutFooter />
</template>
<script setup>
import LayoutNav from "./components/LayoutNav.vue";
import LayoutHeader from "./components/LayoutHeader.vue";
import LayoutFooter from "./components/LayoutFooter.vue";
import LayouFixed from "./components/LayoutFixed.vue";
// 父组件触发action
import { useCategoryStore } from "@/stores/category.js";
import { onMounted } from "vue";
const CategoryStore = useCategoryStore();
onMounted(() => {
  CategoryStore.getCategory();
});
</script>
