"use client";
import { AuthProvider } from "@/context";
import { BlogUpload } from "./BlogUpload";
import { BlogList } from "./BlogList";
import withTheme from "@/theme";

const Blog = () => {
  return (
    <AuthProvider>
      <div className="blog-container justify-between">
        <div>blog</div>
        <div className="blog-list">
          <BlogUpload></BlogUpload>
          <BlogList></BlogList>
        </div>
      </div>
    </AuthProvider>
  );
};
const BlogPage = () => {
  return withTheme(<Blog />);
};
export default BlogPage;
