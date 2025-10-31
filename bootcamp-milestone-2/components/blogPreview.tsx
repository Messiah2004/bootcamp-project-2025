import Image from "next/image";
import styles from "./blogPreview.module.css";
import Link from "next/link";
import type { Blog } from "@/app/blogData";

export default function BlogPreview(props: Blog) {
  const src = props.image.startsWith("/") ? props.image : `/${props.image}`;

  return (
    <article className={styles.card}>
      <Link href={`/blog/${props.slug}`} className={styles.cardLink}>
        <div className={styles.imageWrap}>
          <Image
            src={src}
            alt={props.imageAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
          />
        </div>
      </Link>

      <div className={styles.body}>
        <h3 className={styles.title}>{props.title}</h3>
        <p className={styles.desc}>{props.description}</p>
        <p className={styles.meta}>{props.date}</p>
      </div>
    </article>
  );
}
