"use client";
import { AuthProvider } from "@/context";
import { BlogUpload } from "./BlogUpload";
import { useBlogData } from "./useBlogData";

export default function Blog() {
  const data = useBlogData();

  return (
    <AuthProvider>
      <div className="blog-container justify-between">
        <div>blog</div>
        <div className="blog-list">
          <BlogUpload></BlogUpload>
          {/* {data?.map((blog) => <BlogItem key={blog.id} blog={blog}></BlogItem>)} */}
        </div>
      </div>
    </AuthProvider>
  );
}
