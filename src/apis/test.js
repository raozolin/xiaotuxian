import httpIntance from "@/utils/http";
export function getData() {
  return httpIntance({
    url: "home/category/head",
  });
}
