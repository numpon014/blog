import styles from "./post-content.module.css";
import PostHeader from "@/components/posts/post-detail/post-header";
import IPost from "@/model/post";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

type Props = {
  post: IPost;
};

const PostContent = (props: Props) => {
  const {
    post: { title, image, content, slug },
  } = props;

  const imagePath = `/images/posts/${slug}/${image}`;

  const customRenderers = {
    image(image: any) {
      return (
        <Image
          src={`/images/posts/${slug}/${image.src}`}
          alt={image.alt}
          width={600}
          height={300}
        />
      );
    },
    paragraph(paragraph: any) {
      const { node } = paragraph;

      if (node.children[0].type === "image") {
        const image = node.children[0];
        return (
          <div className={styles.image}>
            <Image
              src={`/images/posts/${slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
  };
  return (
    <article className={styles.content}>
      <PostHeader title={title} image={imagePath} />
      <ReactMarkdown
        components={{
          img: customRenderers.image,
          p: customRenderers.paragraph,
        }}
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
