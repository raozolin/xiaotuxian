// 使用逻辑函数拆分业务
//封装banner轮播图相关的业务代码
// 获取banner里面的数据
import { getBannerAPI } from "@/apis/home";
import { ref, onMounted } from "vue";
export function useBanner() {
  const bannerList = ref([]);
  const getBanner = async () => {
    const res = await getBannerAPI({
      // 传入参数为2
      distributionSite: "2",
    });
    bannerList.value = res.result;
  };
  onMounted(() => {
    getBanner();
  });
  return {
    bannerList,
  };
}
