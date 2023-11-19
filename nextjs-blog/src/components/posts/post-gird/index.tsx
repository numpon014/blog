import styles from "./styles.module.css";
import PostItem from "../post-item";

type Props = {
  posts: any[];
};

const PostGird = ({ posts }: Props) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
};
