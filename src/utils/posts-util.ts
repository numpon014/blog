import fs from "fs";
import path from "path";
import matter from "gray-matter";
import IPost from "@/model/post";

const postsDirectory = path.join(process.cwd(), "src", "posts");

export function getPostData(postIdentifier: string) {
  const postSlug = postIdentifier.replace(/\.md$/, "");
  const filePath = path.join(postsDirectory, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContent);

  const postData: Partial<IPost> = {
    slug: postSlug,
    ...data,
    content,
  };

  return postData;
}

export function getAllPosts() {
  const postFiles = fs.readdirSync(postsDirectory);

  const allPostsData = postFiles.map((postFile) => {
    return getPostData(postFile);
  });

  // @ts-ignore
  allPostsData.sort((postA, postB) => (postA.date > postB.date ? -1 : 1));

  return allPostsData;
}

export function getFeaturedPosts() {
  const allPosts = getAllPosts();

  return allPosts.filter((post) => post.isFeatured);
}
