import { Reveal } from '../ui/motion/Reveal';
import styles from './TechStack.module.css';

interface TechStackGroups {
  frontend?: string[];
  backend?: string[];
  database?: string[];
  infrastructure?: string[];
  tooling?: string[];
}

interface TechStackProps {
  techStack: TechStackGroups;
}

export function TechStack({ techStack }: TechStackProps) {
  if (!techStack || Object.keys(techStack).length === 0) return null;

  return (
    <section className={styles.section}>
      <Reveal>
        <h2 className={styles.title}>Technology Stack</h2>
        <div className={styles.grid}>
          {Object.entries(techStack).map(([category, technologies]) => {
            if (!technologies || technologies.length === 0) return null;
            
            return (
              <div key={category} className={styles.group}>
                <h3 className={styles.groupTitle}>{category}</h3>
                <div className={styles.tags}>
                  {technologies.map((tech: string) => (
                    <span key={tech} className={styles.tag}>{tech}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
