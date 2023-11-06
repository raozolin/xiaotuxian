//封装倒计时逻辑函数
import { computed, onMounted, ref } from "vue";
import dayjs from "dayjs";
export const useCountDown = () => {
  // 1.响应式数据
  const time = ref(0);
  let timer;
  //   格式化时间
  const formatTime = computed(() => {
    dayjs.unix(time.value).format("mm分ss秒");
  });
  // 2.开启倒计时的函数
  const start = (currentTime) => {
    // 核心倒计时的逻辑，每个一秒就减1
    formatTime.value = currentTime;
    timer = setInterval(() => {
      formatTime.value--;
    }, 1000);
  };

  //   组件销毁时清除定时器
  onMounted(() => {
    timer && clearInterval(timer);
  });
  return {
    formatTime,
    start,
  };
};
