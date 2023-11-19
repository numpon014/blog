import styles from "./styles.module.css";
import PostGird from "@/components/posts/post-gird";
import IPost from "@/model/post";

type Props = {
  posts: IPost[];
};

export const AllPosts = (props: Props) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostGird posts={props.posts} />
    </section>
  );
};

export default AllPosts;
