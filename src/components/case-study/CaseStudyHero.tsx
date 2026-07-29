import { Reveal } from '../ui/motion/Reveal';
import { Button } from '../ui/Button';
import styles from './CaseStudyHero.module.css';

interface CaseStudyHeroProps {
  name: string;
  oneLiner: string;
  role: string;
  timeline: string;
  liveUrl?: string;
  githubUrl?: string;
}

export function CaseStudyHero({
  name,
  oneLiner,
  role,
  timeline,
  liveUrl,
  githubUrl
}: CaseStudyHeroProps) {
  return (
    <section className={styles.hero}>
      <Reveal>
        <div className={styles.meta}>
          <span className={styles.timeline}>{timeline}</span>
          <span className={styles.role}>{role}</span>
        </div>
      </Reveal>
      <Reveal delay={100}>
        <h1 className={styles.title}>{name}</h1>
      </Reveal>
      <Reveal delay={200}>
        <p className={styles.oneLiner}>{oneLiner}</p>
      </Reveal>
      
      {(liveUrl || githubUrl) && (
        <Reveal delay={300}>
          <div className={styles.actions}>
            {liveUrl && (
              <Button href={liveUrl} target="_blank" rel="noopener noreferrer" variant="primary">
                View Live Demo
              </Button>
            )}
            {githubUrl && (
              <Button href={githubUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                View Source Code
              </Button>
            )}
          </div>
        </Reveal>
      )}
    </section>
  );
}
