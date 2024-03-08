import { useSWR } from "@/api/useFetch";
import { BlogItemIF } from "./type";

export const useBlogData = () => {
  const { data } = useSWR<{ blogs: BlogItemIF[] }>(
    "/floria-service/excerpt/list"
  );

  return data?.blogs;
};
