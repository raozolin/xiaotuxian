import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { getCategoryAPI } from "@/apis/layout";
export const useCategoryStore = defineStore("category", () => {
  let cateList = ref([]);
  const getCategory = async () => {
    const res = await getCategoryAPI();
    cateList.value = res.result;
  };
  return {
    getCategory,
    cateList,
  };
});
