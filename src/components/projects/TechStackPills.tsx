import React from 'react';
import styles from './ProjectsSection.module.css';

interface TechStackPillsProps {
  techSummary: string[];
  techStack?: {
    frontend?: string[];
    backend?: string[];
    database?: string[];
    infrastructure?: string[];
    tooling?: string[];
  };
}

export function TechStackPills({ techSummary, techStack }: TechStackPillsProps) {
  // If techStack object exists, split into primary vs secondary
  let primaryTech: string[] = [];
  let secondaryTech: string[] = [];

  if (techStack) {
    primaryTech = [
      ...(techStack.frontend || []),
      ...(techStack.backend || []),
      ...(techStack.database || [])
    ];
    secondaryTech = [
      ...(techStack.infrastructure || []),
      ...(techStack.tooling || [])
    ];
  } else {
    primaryTech = techSummary.slice(0, 4);
    secondaryTech = techSummary.slice(4);
  }

  return (
    <div className={styles.techPillsContainer}>
      <span className={styles.techPillsTitle}>Core Technologies</span>
      <div className={styles.techPillsGrid}>
        {primaryTech.map((tech, index) => (
          <div key={`pri-${index}`} className={styles.techPill}>
            <span className={styles.techPillDot} />
            <span>{tech}</span>
          </div>
        ))}
        {secondaryTech.map((tech, index) => (
          <div key={`sec-${index}`} className={`${styles.techPill} ${styles.techPillSecondary}`}>
            <span>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
