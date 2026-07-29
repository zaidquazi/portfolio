import { Section } from './ui/layout/Section';
import { SectionHeader } from './ui/layout/SectionHeader';
import { Reveal } from './ui/motion/Reveal';
import styles from './FAQ.module.css';
import { faqs } from '../data/faq';

export function FAQ() {
  return (
    <Section id="faq">
      <Reveal>
        <SectionHeader title="Frequently Asked Questions" />
      </Reveal>

      <div className={styles.accordion}>
        {faqs.map((faq, index) => (
          <Reveal key={index} delay={index * 150} animation="fade-up" as="details" className={styles.details}>
            <summary className={styles.summary}>
              <span className={styles.question}>{faq.question}</span>
              <span className={styles.icon}>+</span>
            </summary>
            <div className={styles.answerWrapper}>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
