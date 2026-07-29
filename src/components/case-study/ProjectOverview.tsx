import { Reveal } from '../ui/motion/Reveal';
import styles from './ProjectOverview.module.css';

interface ProjectOverviewProps {
  problem: string;
  goals: string[];
}

export function ProjectOverview({ problem, goals }: ProjectOverviewProps) {
  return (
    <section className={styles.section}>
      <Reveal>
        <div className={styles.grid}>
          <div className={styles.problem}>
            <h2 className={styles.title}>The Challenge</h2>
            <p className={styles.text}>{problem}</p>
          </div>
          
          <div className={styles.goals}>
            <h2 className={styles.title}>Project Goals</h2>
            <ul className={styles.goalList}>
              {goals.map((goal, index) => (
                <li key={index} className={styles.goalItem}>
                  {goal}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
