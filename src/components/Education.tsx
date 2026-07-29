import styles from './Education.module.css';
import { education, academicFocus } from '../data/education';

export function Education() {
  return (
    <section id="education" className={styles.section}>
      <div className={styles.grid}>
        <div className={styles.header}>
          <h2 className={styles.title}>Education & Academic Focus</h2>
        </div>
        
        <div className={styles.content}>
          <div className={styles.educationBlock}>
            <div className={styles.blockHeader}>
              <h3 className={styles.degree}>{education.degree}</h3>
              <span className={styles.year}>{education.year}</span>
            </div>
            <p className={styles.institution}>{education.institution}</p>
            <ul className={styles.highlights}>
              {education.highlights.map((h, i) => <li key={i}>{h}</li>)}
            </ul>
          </div>

          <div className={styles.certifications}>
            {academicFocus.map((item, idx) => (
              <div key={idx} className={styles.cert}>
                <h4 className={styles.certName}>{item.area}</h4>
                <p className={styles.certReason}>{item.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
