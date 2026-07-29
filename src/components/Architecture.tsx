import { Section } from './ui/layout/Section';
import { SectionHeader } from './ui/layout/SectionHeader';
import { Reveal } from './ui/motion/Reveal';
import styles from './Architecture.module.css';
import { architectureData } from '../data/architecture';

export function Architecture() {
  return (
    <Section id="architecture">
      <Reveal>
        <SectionHeader title="System Architecture" />
      </Reveal>

      <div className={styles.container}>
        {architectureData.map((arch, index) => (
          <Reveal key={index} delay={index * 200} animation="fade-up">
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h3 className={styles.cardTitle}>{arch.title}</h3>
                <p className={styles.cardDescription}>{arch.description}</p>
              </div>
              
              <div className={styles.layers}>
                <div className={styles.layer}>
                  <span className={styles.layerLabel}>Client</span>
                  <p className={styles.layerValue}>{arch.layers.client}</p>
                </div>
                <div className={styles.layer}>
                  <span className={styles.layerLabel}>API Gateway</span>
                  <p className={styles.layerValue}>{arch.layers.api}</p>
                </div>
                <div className={styles.layer}>
                  <span className={styles.layerLabel}>Database</span>
                  <p className={styles.layerValue}>{arch.layers.database}</p>
                </div>
                <div className={styles.layer}>
                  <span className={styles.layerLabel}>Infrastructure</span>
                  <p className={styles.layerValue}>{arch.layers.infrastructure}</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
