import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogData } from "../../blogData";
import styles from "./detail.module.css";

export async function generateStaticParams() {
  return blogData.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) return { title: "Post not found" };
  return {
    title: post.title,
    description: post.description.slice(0, 160),
  };
}

export default async function BlogDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogData.find((p) => p.slug === slug);
  if (!post) return notFound();

  const src = post.image.startsWith("/") ? post.image : `/${post.image}`;

  return (
    <main className={styles.container}>
      <article className={styles.article}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.meta}>Posted on {post.date}</p>

        <div className={styles.heroWrap}>
          <Image src={src} alt={post.imageAlt} fill />
        </div>

        <p className={styles.body}>{post.description}</p>

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
