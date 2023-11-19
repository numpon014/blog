import { DUMMY_POSTS } from "@/data/post-dummy-data";
import AllPosts from "@/components/posts/all-posts";

export const AllPostsPage = () => {
  return <AllPosts posts={DUMMY_POSTS} />;
};

export default AllPostsPage;
