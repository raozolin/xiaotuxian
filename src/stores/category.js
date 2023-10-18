import { defineStore } from "pinia";
import { ref, onMounted } from "vue";
import { getCategoryAPI } from "@/apis/layout";
let cateList = ref([]);
export const getCategoryStore = defineStore(() => {
  const getCategory = async () => {
    const res = await getCategoryAPI();
    cateList.value = res.result;
  };
  return {
    getCategory,
    cateList,
  };
});
