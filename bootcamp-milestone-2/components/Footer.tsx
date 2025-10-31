import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} Messiah&apos;s Personal Website | All Rights
      Reserved
    </footer>
  );
}
