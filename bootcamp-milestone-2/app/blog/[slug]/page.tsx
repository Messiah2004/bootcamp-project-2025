import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import connectDB from "@/database/db";
import BlogModel, { type Blog } from "@/database/blogSchema";
import styles from "./detail.module.css";
import Comment from "@/components/Comment";

type Params = { slug: string };

export async function generateStaticParams() {
  await connectDB();

  const rawBlogs = await BlogModel.find().select("slug").lean();

  const blogs = rawBlogs as unknown as { slug: string }[];

  return blogs.map((b: { slug: string }) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  await connectDB();

  const post = await BlogModel.findOne({ slug }).lean<Blog>();
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.description.slice(0, 160),
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  await connectDB();

  const post = await BlogModel.findOne({ slug }).lean<Blog>();
  if (!post) return notFound();

  const src = post.image.startsWith("/") ? post.image : `/${post.image}`;

  const dateString =
    post.date instanceof Date
      ? post.date.toLocaleDateString("en-US")
      : post.date;

  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>Posted on {dateString}</p>

        <div className={styles.heroWrap}>
          <Image src={src} alt={post.image_alt} fill />
        </div>

        <p className={styles.body}>{post.content}</p>

        {post.comments && post.comments.length > 0 && (
          <>
            <hr className={styles.hr} />
            <h2 className={styles.commentsTitle}>Comments</h2>
            {post.comments.map((c, idx) => (
              <Comment key={idx} comment={c} />
            ))}
          </>
        )}

        <hr className={styles.hr} />
        <p>
          <Link href="/blog" className={styles.back}>
            ← Back to Blog
          </Link>
        </p>
      </article>
    </main>
  );
}
