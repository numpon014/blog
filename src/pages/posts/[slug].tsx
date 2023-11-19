import PostContent from "@/components/posts/post-detail/post-content";
import { DUMMY_POSTS } from "@/data/post-dummy-data";
import { getAllPosts, getPostData } from "@/utils/posts-util";

export const PostDetailPage = () => {
  const firstPost = DUMMY_POSTS[0];
  return (
    <div>
      <PostContent post={firstPost} />
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  const {
    params: { slug },
  } = context;

  const allPosts = getPostData(slug);

  return {
    props: {
      posts: JSON.parse(JSON.stringify(allPosts)),
    },
    revalidate: 1800,
  };
};

export const getStaticPaths = async () => {
  const allPosts = getAllPosts();
  const paths = allPosts.map((post) => ({ params: { slug: post.slug } }));

  return {
    paths,
    fallback: false,
  };
};

export default PostDetailPage;
