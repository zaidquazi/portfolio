'use client';

import styles from './ResumeButton.module.css';

export function ResumeButton() {
  return (
    <div className={styles.splitBtn} role="group" aria-label="Resume options">
      {/* Left half — View */}
      <a
        href="/resume.jpg"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.half}
        aria-label="View resume in new tab"
      >
        <span className={styles.icon}>
          {/* Eye icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
            <circle cx="12" cy="12" r="3"/>
          </svg>
        </span>
        <span className={styles.label}>View Resume</span>
        <span className={styles.arrow}>↗</span>
      </a>

      {/* Divider */}
      <span className={styles.divider} aria-hidden="true" />

      {/* Right half — Download */}
      <a
        href="/api/resume"
        className={styles.half}
        aria-label="Download resume PDF"
      >
        <span className={styles.icon}>
          {/* Download icon */}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
        </span>
        <span className={styles.label}>Download</span>
      </a>
    </div>
  );
}
