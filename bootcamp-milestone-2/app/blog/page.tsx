import BlogPreview from "@/components/blogPreview";
import { blogData } from "../blogData";
import styles from "./blogPage.module.css";

export default function Blog() {
  return (
    <section className={styles.container}>
      <div className={styles.grid}>
        {blogData.map((blog) => (
          <BlogPreview key={blog.slug} {...blog} />
        ))}
      </div>
    </section>
  );
}
