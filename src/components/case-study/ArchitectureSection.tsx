import { Reveal } from '../ui/motion/Reveal';
import styles from './ArchitectureSection.module.css';

interface ArchitectureProps {
  frontend: string;
  backend: string;
  database: string;
}

export function ArchitectureSection({ frontend, backend, database }: ArchitectureProps) {
  return (
    <section className={styles.section}>
      <Reveal>
        <h2 className={styles.title}>System Architecture</h2>
        
        <div className={styles.grid}>
          {frontend && frontend !== "N/A" && (
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Client Layer</h3>
              <p className={styles.cardText}>{frontend}</p>
            </div>
          )}
          
          {backend && backend !== "N/A (Frontend Infrastructure)" && backend !== "N/A" && (
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Application Layer</h3>
              <p className={styles.cardText}>{backend}</p>
            </div>
          )}
          
          {database && database !== "N/A" && (
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Data Layer</h3>
              <p className={styles.cardText}>{database}</p>
            </div>
          )}
        </div>
      </Reveal>
    </section>
  );
}
