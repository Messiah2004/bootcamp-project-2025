"use client";

import { useState, FormEvent } from "react";

type CommentFormProps = {
  slug: string;
};

export default function CommentForm({ slug }: CommentFormProps) {
  const [user, setUser] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch(`/api/blog/${slug}/comment`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user, comment }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(data?.message || "Failed to post comment");
      }

      setStatus("success");
      setUser("");
      setComment("");
      window.location.reload();
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong posting";
      setErrorMsg(msg);
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: "1.5rem" }}>
      <h3>Add a comment</h3>

      <div style={{ marginBottom: "0.5rem" }}>
        <label>
          Name:
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            style={{
              display: "block",
              marginTop: 4,
              padding: 6,
              width: "100%",
            }}
          />
        </label>
      </div>

      <div style={{ marginBottom: "0.5rem" }}>
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            required
            rows={4}
            style={{
              display: "block",
              marginTop: 4,
              padding: 6,
              width: "100%",
            }}
          />
        </label>
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        style={{ padding: "8px 16px" }}
      >
        {status === "loading" ? "Posting..." : "Post comment"}
      </button>

      {status === "success" && (
        <p style={{ color: "lightgreen", marginTop: 8 }}>
          Comment posted successfully!
        </p>
      )}
      {status === "error" && (
        <p style={{ color: "salmon", marginTop: 8 }}>{errorMsg}</p>
      )}
    </form>
  );
}
