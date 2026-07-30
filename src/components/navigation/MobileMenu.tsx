'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { useFocusTrap } from '../../hooks/useFocusTrap';
import { useLockBodyScroll } from '../../hooks/useLockBodyScroll';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const containerRef = useFocusTrap(isOpen);
  useLockBodyScroll(isOpen);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} ref={containerRef}>
      <div className={styles.backdrop} onClick={onClose} aria-hidden="true" />
      <nav className={styles.menu} aria-label="Mobile Navigation">
        <div className={styles.menuHeader}>
          <span className={styles.menuTitle}>ZH.</span>
          <button 
            className={styles.closeButton} 
            onClick={onClose}
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <ul className={styles.linkList}>
          <li>
            <Link href="/#about" onClick={onClose}>
              <span>About</span>
              <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </li>
          <li>
            <Link href="/#skills" onClick={onClose}>
              <span>Skills</span>
              <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </li>
          <li>
            <Link href="/#work" onClick={onClose}>
              <span>Projects</span>
              <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </li>
          <li>
            <Link href="/#experience" onClick={onClose}>
              <span>Experience</span>
              <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </li>
          <li>
            <Link href="/#education" onClick={onClose}>
              <span>Education</span>
              <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </li>
          <li>
            <Link href="/#achievements" onClick={onClose}>
              <span>Credentials</span>
              <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </li>
          <li>
            <Link href="/#contact" onClick={onClose}>
              <span>Contact</span>
              <svg className={styles.arrowIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </li>
          <li>
            <Link href="/resume" onClick={onClose}>
              <span>Resume</span>
              <span className={styles.badge}>PDF</span>
            </Link>
          </li>
        </ul>

        <div className={styles.menuFooter}>
          <div className={styles.socialRow}>
            <a href="https://github.com/zaidquazi" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>GitHub</a>
            <span className={styles.dot}>•</span>
            <a href="https://www.linkedin.com/in/zaid-husain-329596257/" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>LinkedIn</a>
          </div>
        </div>
      </nav>
    </div>
  );
}
