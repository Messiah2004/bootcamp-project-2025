"use client";

import styles from "./contact.module.css";

export default function ContactPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Contact</h1>

      <form
        id="contact-form"
        className={styles.form}
        onSubmit={(e) => e.preventDefault()}
      >
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className={styles.input}
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
        />

        <label htmlFor="message" className={styles.label}>
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          required
          className={styles.textarea}
        />

        <input type="submit" value="Submit" className={styles.submit} />
      </form>
    </main>
  );
}
