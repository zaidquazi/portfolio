import { Reveal } from '../ui/motion/Reveal';
import styles from './MetricsGrid.module.css';

interface Metric {
  label: string;
  value: string;
}

interface MetricsGridProps {
  metrics: Metric[];
}

export function MetricsGrid({ metrics }: MetricsGridProps) {
  if (!metrics || metrics.length === 0) return null;

  return (
    <section className={styles.section}>
      <Reveal>
        <div className={styles.grid}>
          {metrics.map((metric, index) => (
            <div key={index} className={styles.metricCard}>
              <div className={styles.value}>{metric.value}</div>
              <div className={styles.label}>{metric.label}</div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
