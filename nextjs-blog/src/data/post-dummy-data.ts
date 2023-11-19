import IPost from "@/model/post";

export const DUMMY_POSTS = [
  {
    id: "p1",
    slug: "getting-started-with-nextjs",
    title: "Getting Started with NextJS",
    image: "getting-started-nextjs.png",
    excerpt:
      "NextJS is a the React framework for production - it makes building fullstack React apps and sites a breeze and ships with built-in SSR.",
    date: "2022-02-10",
    content: "# This is a first post",
  },
  {
    id: "p2",
    slug: "dolor-sit-amet",
    title: "Dolor Sit Amet",
    image: "getting-started-nextjs.png",
    excerpt: "Dolor sit amet, consectetur adipiscing elit.",
    date: "2022-01-02",
    content: "# This is a second post",
  },
  {
    id: "p3",
    slug: "adipiscing-elit",
    title: "Adipiscing Elit",
    image: "getting-started-nextjs.png",
    excerpt:
      "Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "2022-01-03",
    content: "# This is a third post",
  },
] as IPost[];
