"use client";

import { useState, FormEvent } from "react";
import styles from "./contact.module.css";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.ok) {
        throw new Error(data?.message || "Failed to send message");
      }

      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch (err: unknown) {
      const msg =
        err instanceof Error ? err.message : "Something went wrong sending";
      setErrorMsg(msg);
      setStatus("error");
    }
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Contact</h1>

      <form id="contact-form" className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={styles.input}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="message" className={styles.label}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          required
          className={styles.textarea}
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <input
          type="submit"
          value={status === "loading" ? "Sending..." : "Submit"}
          className={styles.submit}
          disabled={status === "loading"}
        />

        {status === "success" && (
          <p className={styles.success}>Message sent successfully!</p>
        )}
        {status === "error" && <p className={styles.error}>{errorMsg}</p>}
      </form>
    </main>
  );
}
