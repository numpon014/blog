import styles from "./styles.module.css";

type Props = {
  posts: any[];
};

const FeaturedPosts = (props: Props) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
    </section>
  );
};

export default FeaturedPosts;
