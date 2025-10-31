import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";

export default function PortfolioPage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Portfolio</h1>

      <div className={styles.projectCard}>
        <Link href="/">
          <Image
            src="/PortfolioScreenshot.png"
            alt="Social network that I helped build in community college"
            width={750}
            height={400}
            className={styles.image}
          />
        </Link>

        <div className={styles.details}>
          <p className={styles.name}>CommunityALI</p>
          <p className={styles.description}>
            Social network that I helped build in community college. Fun times.
          </p>
        </div>

        <Link className={styles.learnMore} href="/">
          Learn more
        </Link>
      </div>
    </main>
  );
}
