import BlogPreview from "@/components/blogPreview";
import connectDB from "@/database/db";
import BlogModel, { type Blog } from "@/database/blogSchema";
import styles from "./blogPage.module.css";

async function getBlogs(): Promise<Blog[] | null> {
  await connectDB();

  try {
    const rawBlogs = await BlogModel.find().sort({ date: -1 }).lean().exec();

    const blogs = rawBlogs as unknown as Blog[];

    return blogs;
  } catch (err) {
    console.error("Error fetching blogs", err);
    return null;
  }
}

export default async function BlogPage() {
  const blogs = await getBlogs();

  if (!blogs) {
    return (
      <section className={styles.container}>
        <p className={styles.error}>Could not load blogs.</p>
      </section>
    );
  }

  if (blogs.length === 0) {
    return (
      <section className={styles.container}>
        <p className={styles.empty}>No blogs available.</p>
      </section>
    );
  }

  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {blogs.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </section>
  );
}
