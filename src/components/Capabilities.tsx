import { Section } from './ui/layout/Section';
import { Reveal } from './ui/motion/Reveal';
import styles from './Capabilities.module.css';
import { capabilities } from '../data/capabilities';

export function Capabilities() {
  return (
    <Section id="capabilities">
      <div className={styles.container}>
        {/* Left Sticky Header */}
        <div className={styles.headerColumn}>
          <Reveal>
            <div className={styles.headerSticky}>
              <h2 className={styles.title}>
                Core
                <br />
                <span className={styles.titleHighlight}>Capabilities</span>
              </h2>
              <p className={styles.headerDescription}>
                A multidisciplinary approach to software engineering, combining modern web development with robust computer science fundamentals and cloud operations.
              </p>
              
              <div className={styles.decorativeLine} />
            </div>
          </Reveal>
        </div>

        {/* Right Content Cards */}
        <div className={styles.cardsColumn}>
          {capabilities.map((cap, index) => (
            <Reveal key={index} delay={index * 150} animation="fade-up">
              <div className={styles.capabilityCard}>
                <div className={styles.cardGlow} />
                <div className={styles.cardContent}>
                  <div className={styles.cardHeader}>
                    <span className={styles.cardNumber}>{(index + 1).toString().padStart(2, '0')}</span>
                    <h3 className={styles.domain}>{cap.domain}</h3>
                  </div>
                  
                  <p className={styles.description}>{cap.description}</p>
                  
                  <div className={styles.skillsGrid}>
                    {cap.focus.map((item, i) => (
                      <span key={i} className={styles.skillTag}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
