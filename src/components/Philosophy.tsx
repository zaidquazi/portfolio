import { Section } from './ui/layout/Section';
import { SectionHeader } from './ui/layout/SectionHeader';
import { Reveal } from './ui/motion/Reveal';
import styles from './Philosophy.module.css';

const principles = [
  {
    title: "Readable code lasts longer.",
    desc: "Complexity is an engineering failure, not a badge of honor. Code that is easily understood by the next developer will outlive code optimized purely for cleverness."
  },
  {
    title: "Performance is a feature.",
    desc: "A fast UI is a trustworthy UI. Performance isn't a final optimization step—it is a constraint that shapes the architecture from the very first commit."
  },
  {
    title: "Architecture should simplify.",
    desc: "Good architecture restricts choices to prevent errors. It provides obvious patterns for common problems so engineers can focus on business logic."
  },
  {
    title: "Testing creates confidence.",
    desc: "Without tests, developers fear refactoring. With a robust testing strategy, the team can ship aggressively without breaking production."
  }
];

export function Philosophy() {
  return (
    <Section id="philosophy">
      <Reveal>
        <SectionHeader title="Engineering Philosophy" />
      </Reveal>
      <div className={styles.editorialGrid}>
        {principles.map((principle, index) => (
          <Reveal key={index} delay={index * 150} animation="fade-up" className={styles.principleBlock}>
            <span className={styles.principleNumber}>0{index + 1}</span>
            <div className={styles.principleContent}>
              <h3 className={styles.principleTitle}>{principle.title}</h3>
              <p className={styles.principleDesc}>{principle.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
