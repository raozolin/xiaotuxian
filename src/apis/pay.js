import httpIntance from "@/utils/http";
export const getOrderAPI = (id) => {
  return httpIntance({
    url: `/member/order/${id}`,
  });
};
