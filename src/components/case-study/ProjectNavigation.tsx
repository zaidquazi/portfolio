import Link from 'next/link';
import { Project } from '../../data/projects';
import styles from './ProjectNavigation.module.css';

interface ProjectNavigationProps {
  prevProject: Project | null;
  nextProject: Project | null;
}

export function ProjectNavigation({ prevProject, nextProject }: ProjectNavigationProps) {
  if (!prevProject && !nextProject) return null;

  return (
    <nav className={styles.navigation}>
      {prevProject ? (
        <Link href={`/projects/${prevProject.slug}`} className={`${styles.link} ${styles.prev}`}>
          <span className={styles.label}>Previous Project</span>
          <span className={styles.title}>{prevProject.name}</span>
        </Link>
      ) : (
        <div className={styles.placeholder} />
      )}
      
      {nextProject ? (
        <Link href={`/projects/${nextProject.slug}`} className={`${styles.link} ${styles.next}`}>
          <span className={styles.label}>Next Project</span>
          <span className={styles.title}>{nextProject.name}</span>
        </Link>
      ) : (
        <div className={styles.placeholder} />
      )}
    </nav>
  );
}
