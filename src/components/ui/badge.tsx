import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'outline';
  children: React.ReactNode;
  className?: string;
}

export function Badge({ variant = 'default', children, className = '' }: BadgeProps) {
  const combinedClasses = [
    styles.badge,
    styles[variant],
    className
  ].filter(Boolean).join(' ');

  return (
    <span className={combinedClasses}>
      {children}
    </span>
  );
}
