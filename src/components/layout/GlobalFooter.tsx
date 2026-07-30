import Link from 'next/link';
import styles from './GlobalFooter.module.css';

export function GlobalFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} aria-label="Global Footer">
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Left Column: Brand & Engineering Bio */}
          <div className={styles.brandColumn}>
            <div className={styles.brandHeader}>
              <h2 className={styles.brandName}>Zaid Husain</h2>
              <div className={styles.statusPill} aria-label="Current Availability">
                <span className={styles.statusDot} aria-hidden="true" />
                <span>Available for Full-Time Roles</span>
              </div>
            </div>
            <p className={styles.bioText}>
              Full-stack software engineer crafting performant web applications with clean architecture and intentional user experiences.
            </p>
          </div>

          {/* Navigation Column */}
          <nav className={styles.navColumn} aria-label="Footer Navigation">
            <h3 className={styles.columnTitle}>Navigation</h3>
            <ul className={styles.linkList}>
              <li><Link href="/#work" className={styles.footerLink}>Projects</Link></li>
              <li><Link href="/#experience" className={styles.footerLink}>Experience</Link></li>
              <li><Link href="/#contact" className={styles.footerLink}>Contact</Link></li>
              <li>
                <a href="/resume.jpg" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Resume <span className={styles.arrow} aria-hidden="true">↗</span>
                </a>
              </li>
            </ul>
          </nav>

          {/* Connect Column */}
          <nav className={styles.navColumn} aria-label="Social Links">
            <h3 className={styles.columnTitle}>Connect</h3>
            <ul className={styles.linkList}>
              <li>
                <a href="https://github.com/zaidhusain" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  GitHub <span className={styles.arrow} aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/zaid-husain-329596257/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  LinkedIn <span className={styles.arrow} aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/zaidhusain/" target="_blank" rel="noopener noreferrer" className={styles.footerLink}>
                  Instagram <span className={styles.arrow} aria-hidden="true">↗</span>
                </a>
              </li>
              <li>
                <a href="mailto:zaidquazi412@gmail.com" className={styles.footerLink}>
                  Email
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Bottom Copyright Row */}
        <div className={styles.bottomSection}>
          <p className={styles.designedBy}>Designed &amp; Developed by Zaid Husain</p>
          <div className={styles.metaInfo}>
            <span className={styles.copyright}>© {currentYear}</span>
            <span className={styles.dotSeparator} aria-hidden="true">•</span>
            <span className={styles.version}>Computer Science Engineer</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
