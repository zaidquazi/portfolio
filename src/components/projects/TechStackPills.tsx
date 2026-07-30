'use client';

import React, { useState } from 'react';
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
  const [isExpanded, setIsExpanded] = useState(false);

  // If techStack object exists, split into primary vs secondary
  let allTech: { name: string; isPrimary: boolean }[] = [];

  if (techStack) {
    const primary = [
      ...(techStack.frontend || []),
      ...(techStack.backend || []),
      ...(techStack.database || [])
    ].map(t => ({ name: t, isPrimary: true }));
    
    const secondary = [
      ...(techStack.infrastructure || []),
      ...(techStack.tooling || [])
    ].map(t => ({ name: t, isPrimary: false }));

    allTech = [...primary, ...secondary];
  } else {
    allTech = techSummary.map((t, i) => ({ name: t, isPrimary: i < 4 }));
  }

  const VISIBLE_COUNT = 6;
  const visibleTech = isExpanded ? allTech : allTech.slice(0, VISIBLE_COUNT);
  const remainingCount = allTech.length - VISIBLE_COUNT;

  return (
    <div className={styles.techPillsContainer}>
      <span className={styles.techPillsTitle}>Core Technologies</span>
      <div className={styles.techPillsGrid}>
        {visibleTech.map((tech, index) => (
          <div key={`tech-${index}`} className={`${styles.techPill} ${!tech.isPrimary ? styles.techPillSecondary : ''}`}>
            {tech.isPrimary && <span className={styles.techPillDot} />}
            <span>{tech.name}</span>
          </div>
        ))}
        {!isExpanded && remainingCount > 0 && (
          <button 
            onClick={() => setIsExpanded(true)} 
            className={`${styles.techPill} ${styles.techPillSecondary} ${styles.techPillExpand}`}
            type="button"
          >
            <span>+{remainingCount} More</span>
          </button>
        )}
      </div>
    </div>
  );
}
