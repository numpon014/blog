import styles from "./styles.module.css";
import IPost from "@/model/post";
import PostGird from "@/components/posts/post-gird";

type Props = {
  posts: IPost[];
};

const FeaturedPosts = (props: Props) => {
  const { posts } = props;

  console.log(posts);
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostGird posts={posts} />
    </section>
  );
};

export default FeaturedPosts;
