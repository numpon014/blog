export interface IPost {
  id?: string;
  title: string;
  image: string;
  content: string;
  slug: string;
  date: Date;
  excerpt: string;
  isFeatured: boolean;
}

export default IPost;
