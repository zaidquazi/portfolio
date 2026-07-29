import React from 'react';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  children: React.ReactNode;
}

export function Button({ 
  variant = 'primary', 
  size = 'md', 
  isLoading = false, 
  href,
  children, 
  className,
  disabled,
  target,
  rel,
  download,
  ...props 
}: ButtonProps) {
  const combinedClasses = [
    styles.button,
    styles[variant],
    styles[size],
    isLoading ? styles.loading : '',
    className
  ].filter(Boolean).join(' ');

  if (href) {
    return (
      <a 
        href={href}
        className={combinedClasses} 
        target={target}
        rel={rel}
        download={download}
      >
        <span className={styles.content}>{children}</span>
      </a>
    );
  }

  return (
    <button 
      className={combinedClasses} 
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? <span className={styles.spinner} aria-hidden="true" /> : null}
      <span className={styles.content}>{children}</span>
    </button>
  );
}
