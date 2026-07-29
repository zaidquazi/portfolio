'use client';

import { useState } from 'react';
import { Section } from './ui/layout/Section';
import styles from './Contact.module.css';

export function Contact() {
  const [showPhone, setShowPhone] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [phoneCopied, setPhoneCopied] = useState(false);

  const email = "zaidhusain@gmail.com";
  const phone = "+91 93099 38127";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phone.replace(/\s+/g, ''));
    setPhoneCopied(true);
    setTimeout(() => setPhoneCopied(false), 2000);
  };

  return (
    <Section id="contact" className={styles.contactSection} hasBorder={false} aria-label="Contact Section">
      <div className={styles.container}>
        
        <div className={styles.centerHeader}>
          <h2 className={styles.heroHeading}>
            Let&apos;s Build<br />
            Scalable Software<br />
            Together.
          </h2>
          <p className={styles.heroSubtitle}>
            Open to Full-Time Software Engineering opportunities.<br />
            Always excited to collaborate on meaningful products.
          </p>
        </div>

        <div className={styles.cardContainer}>
          {/* Premium Email Contact Card */}
          <div className={styles.contactCard}>
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <span className={styles.cardLabel}>EMAIL</span>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.contactDetail}>{email}</p>
                <p className={styles.helperText}>Usually replies within 24 hours.</p>
              </div>
            </div>

            <div>
              <div className={styles.cardDivider} aria-hidden="true" />
              <div className={styles.cardActions}>
                <a href={`mailto:${email}`} className={styles.primaryButton} aria-label="Start Conversation">
                  Start Conversation
                </a>
                <button 
                  onClick={handleCopyEmail} 
                  className={styles.secondaryButton}
                  aria-label="Copy email to clipboard"
                  aria-live="polite"
                >
                  {emailCopied ? 'Copied ✓' : 'Copy Email'}
                </button>
              </div>
            </div>
          </div>

          {/* Premium Phone Contact Card */}
          <div className={styles.contactCard}>
            <div>
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper} aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <span className={styles.cardLabel}>PHONE</span>
              </div>

              <div className={styles.cardBody}>
                <p className={styles.contactDetail} aria-live="polite">
                  {showPhone ? phone : "+91 93099 •••••"}
                </p>
                <p className={styles.helperText}>Available for technical interviews.</p>
              </div>
            </div>

            <div>
              <div className={styles.cardDivider} aria-hidden="true" />
              <div className={styles.cardActions}>
                {showPhone ? (
                  <>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className={styles.primaryButton} aria-label="Call phone number">
                      Call Now
                    </a>
                    <button 
                      onClick={handleCopyPhone} 
                      className={styles.secondaryButton}
                      aria-label="Copy phone number"
                      aria-live="polite"
                    >
                      {phoneCopied ? 'Copied ✓' : 'Copy Number'}
                    </button>
                  </>
                ) : (
                  <button 
                    onClick={() => setShowPhone(true)} 
                    className={styles.revealButton}
                    aria-label="Reveal phone number"
                  >
                    Reveal Number
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Social Dock */}
        <div className={styles.socialDock} aria-label="Professional Links">
          <a href="https://github.com/zaidhusain" target="_blank" rel="noopener noreferrer" className={styles.dockItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/zaid-husain-329596257/" target="_blank" rel="noopener noreferrer" className={styles.dockItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            <span>LinkedIn</span>
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.dockItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
            <span>Resume</span>
          </a>
          <a href="https://github.com/zaidhusain/portfolio" target="_blank" rel="noopener noreferrer" className={styles.dockItem}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            <span>Source</span>
          </a>
        </div>

      </div>
      
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <span className={styles.copyright}>© {new Date().getFullYear()} Zaid Husain.</span>
          <span className={styles.note}>Based in India</span>
        </div>
      </footer>
    </Section>
  );
}
