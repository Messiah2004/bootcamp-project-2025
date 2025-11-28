import type { IComment } from "@/database/blogSchema";
import styles from "./Comment.module.css";

type CommentProps = {
  comment: IComment;
};

function formatCommentTime(time: Date | string) {
  const d = typeof time === "string" ? new Date(time) : time;

  return d.toLocaleString("en-US", {
    month: "long", // September
    day: "numeric", // 19
    year: "numeric", // 2025
    hour: "numeric",
    minute: "2-digit",
    hour12: true, // 8:30 AM
  });
}

export default function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <h4 className={styles.user}>{comment.user}</h4>
        <span className={styles.time}>{formatCommentTime(comment.time)}</span>
      </div>
      <p className={styles.body}>{comment.comment}</p>
    </div>
  );
}
