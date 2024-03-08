import { BlogItem } from "./BlogItem";
import { useBlogData } from "./useBlogData";

export const BlogList = () => {
  const blogs = useBlogData();
  console.log(blogs);

  return (
    <>{blogs?.map((blog) => <BlogItem key={blog.id} blog={blog}></BlogItem>)}</>
  );
};
