import styles from './OpenSource.module.css';
import { openSourceData } from '../data/opensource';

export function OpenSource() {
  return (
    <section id="opensource" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Open Source & Community</h2>
      </div>

      <div className={styles.list}>
        {openSourceData.map((item, index) => (
          <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className={styles.item}>
            <div className={styles.itemHeader}>
              <h3 className={styles.repoName}>{item.repoName}</h3>
              <span className={styles.description}>{item.description}</span>
            </div>
            <p className={styles.impact}>{item.impact}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
