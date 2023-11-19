import PostContent from "@/components/posts/post-detail/post-content";
import { DUMMY_POSTS } from "@/data/post-dummy-data";

export const PostDetailPage = () => {
  const firstPost = DUMMY_POSTS[0];
  return (
    <div>
      <PostContent post={firstPost} />
    </div>
  );
};

export default PostDetailPage;
