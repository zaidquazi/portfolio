import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  hasBorder?: boolean;
}

export function Section({ id, children, className = '', hasBorder = true }: SectionProps) {
  const borderClass = hasBorder ? styles.withBorder : '';
  
  return (
    <section id={id} className={`${styles.section} ${borderClass} ${className}`}>
      {children}
    </section>
  );
}
