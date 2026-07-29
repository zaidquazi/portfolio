import React from 'react';
import styles from './PageTransition.module.css';

interface PageTransitionProps {
  children: React.ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  return (
    <div className={styles.transitionWrapper}>
      {children}
    </div>
  );
}
