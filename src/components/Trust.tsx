import { Section } from './ui/layout/Section';
import { SectionHeader } from './ui/layout/SectionHeader';
import { Reveal } from './ui/motion/Reveal';
import styles from './Trust.module.css';

export function Trust() {
  return (
    <Section id="trust">
      <Reveal>
        <SectionHeader
          title="Professional Synthesis"
          subtitle="I build systems that withstand the unpredictability of production environments."
        />
      </Reveal>
      <Reveal animation="fade-up" delay={150}>
        <div className={styles.content}>
          <p className={styles.paragraph}>
            By prioritizing absolute architectural clarity, rigorous code reviews, and relentless performance tuning, I ensure that my engineering output directly accelerates business objectives rather than accumulating technical debt.
          </p>
          <p className={styles.paragraph}>
            If you are looking for an engineer who treats software craftsmanship as a baseline rather than an exception, we should talk.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
