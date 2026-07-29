import { Section } from './ui/layout/Section';
import { SectionHeader } from './ui/layout/SectionHeader';
import { Reveal } from './ui/motion/Reveal';
import styles from './Writing.module.css';
import { articlesData } from '../data/writing';

export function Writing() {
  return (
    <Section id="writing">
      <Reveal>
        <SectionHeader title="Technical Writing" />
      </Reveal>

      <div className={styles.grid}>
        {articlesData.map((article, index) => (
          <Reveal key={index} delay={index * 120} animation="fade-up">
            <a href={article.link} className={styles.article}>
              <div className={styles.meta}>
                <span className={styles.category}>{article.category}</span>
                <span className={styles.date}>{article.date}</span>
              </div>
              <h3 className={styles.articleTitle}>{article.title}</h3>
              <p className={styles.summary}>{article.summary}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
