import Image from "next/image";
import Link from "next/link";
import styles from "./blogPreview.module.css";
import type { Blog } from "@/database/blogSchema";

export default function BlogPreview(props: Blog) {
  const img = props.image ?? "";
  const src = img ? (img.startsWith("/") ? img : `/${img}`) : "";

  const dateString =
    props.date instanceof Date
      ? props.date.toLocaleDateString("en-US")
      : props.date?.toString?.() ?? "";

  return (
    <article className={styles.card}>
      <Link href={`/blog/${props.slug}`} className={styles.cardLink}>
        <div className={styles.imageWrap}>
          {img ? (
            <Image
              src={src}
              alt={props.image_alt}
              fill
              sizes="(min-width: 768px) 33vw, 100vw"
            />
          ) : (
            <div className={styles.imagePlaceholder}>No image</div>
          )}
        </div>
      </Link>

      <div className={styles.body}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.desc}>{props.description}</p>
        <p className={styles.meta}>{dateString}</p>
      </div>
    </article>
  );
}
