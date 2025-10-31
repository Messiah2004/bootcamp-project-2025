import styles from "./resume.module.css";
import Link from "next/link";

export default function ResumePage() {
  return (
    <main className={styles.container}>
      <h1 className={styles.pageTitle}>Resume</h1>

      <Link
        className={styles.downloadLink}
        href="./Messiah_Afzalyar_Resume.pdf"
        download
      >
        Download Resume
      </Link>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Education</h2>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>
            Cal Poly, San Luis Obispo — B.S. Electrical Engineering
          </h3>
          <p className={styles.entryInfo}>In progress</p>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>
            Modesto Junior College — A.S. Mathematics, Physics, Computer Science
          </h3>
          <p className={styles.entryInfo}>
            President’s List (2022–2025) • Engineering Inter-Club Council
            Representative
          </p>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>
            Open Valley School — High School Diploma
          </h3>
          <p className={styles.entryInfo}>
            Graduated early (01/21/2022) • GPA 4.00 • Class Rank #1
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Coursework</h2>
        <ul className={styles.list}>
          <li>
            Circuit Analysis; Modern Physics &amp; Electromagnetics; Engineering
            Design
          </li>
          <li>
            Data Structures &amp; Algorithms; Assembly Language Programming
          </li>
          <li>
            Calculus III; Linear Algebra &amp; Differential Equations; Discrete
            Mathematics
          </li>
          <li>General Chemistry II</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Skills</h2>
        <ul className={styles.list}>
          <li>Java, C++, JavaScript, HTML, CSS, Scheme</li>
          <li>Arduino, Inventor, Git, Microsoft Office</li>
          <li>
            Strong communication; team-building; explaining technical concepts
          </li>
          <li>Languages: English (native), Farsi (native)</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Projects</h2>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>
            CommunityALI — Full Stack Web Platform
          </h3>
          <p className={styles.entryInfo}>
            React • Node.js • Express • MongoDB
          </p>
          <p className={styles.entryDesc}>
            Helped build a student-facing club discovery site used by MJC.
            Implemented pages and flows that improved club outreach and contact.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>
            STEM Tutor — Modesto Junior College Library &amp; Learning Center
          </h3>
          <p className={styles.entryInfo}>Aug 2023 – Aug 2024</p>
          <p className={styles.entryDesc}>
            Tutored mathematics through Calculus III, physics, and inorganic
            chemistry; developed worksheets and study guides to reinforce core
            concepts.
          </p>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>
            Full Stack Developer — CommunityALI
          </h3>
          <p className={styles.entryInfo}>Sep 2023 – Jan 2024</p>
          <p className={styles.entryDesc}>
            Built frontend in React and CSS; implemented backend APIs with
            Node.js/Express and MongoDB to support club search and contact.
          </p>
        </div>
        <div className={styles.entry}>
          <h3 className={styles.entryTitle}>
            Innovation Center Technician — MJC Innovation Center
          </h3>
          <p className={styles.entryInfo}>Jan 2024 – Aug 2024</p>
          <p className={styles.entryDesc}>
            Trained students on 3D printers, laser/vinyl cutters, and the Roland
            BN-20A for stickers and apparel; supported projects from idea to
            production.
          </p>
        </div>
      </section>
    </main>
  );
}
