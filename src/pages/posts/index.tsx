import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/utils/posts-util";
import IPost from "@/model/post";

type Props = {
  posts: IPost[];
};

export const AllPostsPage = (props: Props) => {
  return <AllPosts posts={props.posts} />;
};

export const getStaticProps = async () => {
  const allPosts = getAllPosts();

  return {
    props: {
      posts: JSON.parse(JSON.stringify(allPosts)),
    },
    revalidate: 1800,
  };
};

export default AllPostsPage;
