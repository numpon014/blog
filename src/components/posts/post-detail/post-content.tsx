import styles from "./post-content.module.css";
import PostHeader from "@/components/posts/post-detail/post-header";
import IPost from "@/model/post";
import ReactMarkdown from "react-markdown";

type Props = {
  post: IPost;
};

const PostContent = (props: Props) => {
  const {
    post: { title, image, content, slug },
  } = props;

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
