import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import { IPost } from "@/model/post";

type Props = {
  post: IPost;
};

const PostItem = (props: Props) => {
  const {
    post: { title, image, excerpt, date, slug },
  } = props;

  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const imagePath = `/images/posts/${slug}/${image}`;

  return (
    <li className={styles.post}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.image}>
          <Image src={imagePath} alt={title} width={300} height={200} />
        </div>
        <div className={styles.content}>
          <h3>{title}</h3>
          <time>{formattedDate}</time>
          <p>{excerpt}</p>
        </div>
      </Link>
    </li>
  );
};

export default PostItem;
