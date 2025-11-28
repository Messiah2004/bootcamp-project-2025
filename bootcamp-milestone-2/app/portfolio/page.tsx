import Image from "next/image";
import Link from "next/link";
import styles from "./portfolio.module.css";
import connectDB from "@/database/db";
import ProjectModel, { type Project } from "@/database/projectSchema";

async function getProjects(): Promise<Project[] | null> {
  try {
    await connectDB();
    const rawProjects = await ProjectModel.find().lean();
    return rawProjects as unknown as Project[];
  } catch (err) {
    console.error("Error fetching projects", err);
    return null;
  }
}

export default async function PortfolioPage() {
  const projects = await getProjects();

  if (!projects) {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Portfolio</h1>
        <p className={styles.error}>Could not load projects.</p>
      </main>
    );
  }

  if (projects.length === 0) {
    return (
      <main className={styles.container}>
        <h1 className={styles.title}>Portfolio</h1>
        <p className={styles.empty}>No projects yet.</p>
      </main>
    );
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Portfolio</h1>

      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.slug} className={styles.projectCard}>
            <Link
              href={project.link}
              className={styles.imageLink}
              target="_blank"
            >
              <Image
                src={project.image}
                alt={project.image_alt}
                width={750}
                height={400}
                className={styles.image}
              />
            </Link>

            <div className={styles.details}>
              <p className={styles.name}>{project.name}</p>
              <p className={styles.description}>{project.description}</p>
            </div>

            <Link
              className={styles.learnMore}
              href={project.link}
              target="_blank"
            >
              Learn more
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}
