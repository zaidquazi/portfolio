import { Reveal } from '../ui/motion/Reveal';
import styles from './EngineeringDecisions.module.css';

interface Decision {
  choice: string;
  reason: string;
  tradeoff: string;
}

interface EngineeringDecisionsProps {
  decisions: Decision[];
}

export function EngineeringDecisions({ decisions }: EngineeringDecisionsProps) {
  if (!decisions || decisions.length === 0) return null;

  return (
    <section className={styles.section}>
      <Reveal>
        <h2 className={styles.title}>Engineering Decisions & Trade-offs</h2>
        <div className={styles.stack}>
          {decisions.map((decision, index) => (
            <div key={index} className={styles.card}>
              <h3 className={styles.choice}>{decision.choice}</h3>
              <div className={styles.details}>
                <div className={styles.detailGroup}>
                  <h4 className={styles.label}>Reasoning</h4>
                  <p className={styles.text}>{decision.reason}</p>
                </div>
                <div className={styles.detailGroup}>
                  <h4 className={styles.label}>Trade-off</h4>
                  <p className={styles.text}>{decision.tradeoff}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
