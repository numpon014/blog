import PostContent from "@/components/posts/post-detail/post-content";
import { getAllPosts, getPostData } from "@/utils/posts-util";
import IPost from "@/model/post";

type Props = {
  post: IPost;
};
export const PostDetailPage = (props: Props) => {
  const { post } = props;

  return (
    <div>
      <PostContent post={post} />
    </div>
  );
};

export const getStaticProps = async (context: any) => {
  const {
    params: { slug },
  } = context;

  const post = getPostData(slug);

  return {
    props: {
      post: JSON.parse(JSON.stringify(post)),
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
