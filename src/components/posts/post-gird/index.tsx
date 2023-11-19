import styles from "./styles.module.css";
import PostItem from "../post-item";
import { IPost } from "@/model/post";

type Props = {
  posts: IPost[];
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

export default PostGird;
