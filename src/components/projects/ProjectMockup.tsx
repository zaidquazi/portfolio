import React from 'react';
import Image from 'next/image';
import styles from './ProjectsSection.module.css';

interface ProjectMockupProps {
  projectSlug: string;
  title: string;
  category: string;
  imagePath: string; // local path e.g. /images/talent-nexus/dashboard.png
  onOpenModal?: () => void;
}

export function ProjectMockup({ projectSlug, title, category, imagePath, onOpenModal }: ProjectMockupProps) {
  // Theme accents per project
  const accentColors: Record<string, string> = {
    'talent-nexus': '#3b82f6',
    'zashly': '#10b981',
    'home-town-hub': '#f59e0b'
  };

  const themeGradients: Record<string, string> = {
    'talent-nexus': 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(147, 51, 234, 0.1))',
    'zashly': 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(6, 182, 212, 0.1))',
    'home-town-hub': 'linear-gradient(135deg, rgba(245, 158, 11, 0.1), rgba(239, 68, 68, 0.1))'
  };

  const currentAccent = accentColors[projectSlug] || '#3b82f6';
  const currentGradient = themeGradients[projectSlug] || themeGradients['talent-nexus'];

  const [imgError, setImgError] = React.useState(false);

  return (
    <div
      className={styles.mockupContainer}
      style={{ background: currentGradient }}
      onClick={onOpenModal}
      role="button"
      tabIndex={0}
      aria-label={`Open fullscreen preview for ${title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onOpenModal?.();
        }
      }}
    >
      {/* Window Titlebar Header */}
      <div className={styles.mockupHeader}>
        <div className={styles.windowControls}>
          <span className={`${styles.controlDot} ${styles.dotRed}`} />
          <span className={`${styles.controlDot} ${styles.dotYellow}`} />
          <span className={`${styles.controlDot} ${styles.dotGreen}`} />
        </div>

        <div className={styles.addressBar}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
          </svg>
          <span className={styles.addressUrl}>
            {projectSlug === 'talent-nexus' ? 'talentnexus.vercel.app' : projectSlug === 'zashly' ? 'zashly.vercel.app' : 'home-town-hub-pi.vercel.app'}
          </span>
        </div>

        <div className={styles.headerTag}>
          <span className={styles.pulseDot} style={{ backgroundColor: currentAccent }} />
          <span>{category}</span>
        </div>
      </div>

      {/* Mockup Canvas Screen */}
      <div className={styles.mockupScreen}>
        {imagePath && (
          <Image
            key={imagePath}
            src={imagePath}
            alt={`${title} screenshot`}
            className={styles.mockupImage}
            style={{ display: imgError ? 'none' : 'block' }}
            fill
            unoptimized
            onError={() => setImgError(true)}
          />
        )}

        {imgError && (
          <div className={styles.screenshotFallback}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.3">
              <rect x="3" y="3" width="18" height="18" rx="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <p className={styles.fallbackLabel}>{title}</p>
            <p className={styles.fallbackPath}>Place screenshot at:</p>
            <code className={styles.fallbackCode}>public{imagePath}</code>
          </div>
        )}

        {/* Floating Zoom Action Badge — only shows on real images */}
        {!imgError && imagePath && (
          <div className={styles.zoomOverlay}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              <line x1="11" y1="8" x2="11" y2="14"></line>
              <line x1="8" y1="11" x2="14" y2="11"></line>
            </svg>
            <span>Click for Fullscreen</span>
          </div>
        )}
      </div>
    </div>
  );
}
