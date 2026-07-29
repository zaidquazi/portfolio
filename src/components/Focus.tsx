import { Section } from './ui/layout/Section';
import { SectionHeader } from './ui/layout/SectionHeader';
import { Reveal } from './ui/motion/Reveal';
import styles from './Focus.module.css';
import { focusData } from '../data/focus';

export function Focus() {
  return (
    <Section id="focus">
      <Reveal>
        <SectionHeader title="Current Focus" />
      </Reveal>

      <div className={styles.timeline}>
        {focusData.map((item, index) => (
          <Reveal key={index} delay={index * 150} animation="fade-up">
            <div className={styles.item}>
              <div className={styles.indicator}></div>
              <div className={styles.content}>
                <h3 className={styles.topic}>{item.topic}</h3>
                <p className={styles.context}>{item.context}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
