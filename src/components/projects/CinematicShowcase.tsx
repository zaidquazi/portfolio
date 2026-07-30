'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './ProjectsSection.module.css';
import { Project } from '../../data/projects';

interface CinematicShowcaseProps {
  project: Project;
}

export function CinematicShowcase({ project }: CinematicShowcaseProps) {
  const primaryImage = project.slides[0]?.image || '/images/zashly/group-chat.png';
  const secondaryImage = project.slides[1]?.image || project.slides[0]?.image || '/images/zashly/group-chat.png';

  // Specific micro badges per project for SaaS product feel
  const microBadges: Record<string, Array<{ icon: string; title: string; subtitle: string }>> = {
    zashly: [
      { icon: '⚡', title: 'Realtime Engine', subtitle: 'Socket.IO + WebRTC' },
      { icon: '🔒', title: 'Auth Verified', subtitle: 'JWT Handshake' },
    ],
    zashio: [
      { icon: '🛡️', title: 'Data Scoped', subtitle: 'Supabase Postgres RLS' },
      { icon: '👥', title: 'Multi-Role RBAC', subtitle: 'Student / Recruiter / Admin' },
    ],
    zashub: [
      { icon: '🚀', title: 'Indexed Search', subtitle: 'MongoDB Regex Filter' },
      { icon: '📍', title: 'Local Discovery', subtitle: 'Directory & Events' },
    ],
  };

  const badges = microBadges[project.slug] || [
    { icon: '⚡', title: 'Production Ready', subtitle: 'Full-Stack Architecture' },
    { icon: '🔒', title: 'Secured System', subtitle: 'Authenticated APIs' },
  ];

  return (
    <div className={styles.showcaseWrapper}>
      {/* Ambient Theme Background Glow */}
      <div 
        className={styles.ambientGlow} 
        style={{
          background: project.slug === 'zashly' 
            ? 'radial-gradient(circle, rgba(16, 185, 129, 0.18) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 80%)'
            : project.slug === 'zashio'
            ? 'radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(147, 51, 234, 0.08) 50%, transparent 80%)'
            : 'radial-gradient(circle, rgba(245, 158, 11, 0.18) 0%, rgba(239, 68, 68, 0.08) 50%, transparent 80%)'
        }}
      />

      {/* Layer 1: Main Desktop Window Mockup */}
      <motion.div 
        className={styles.desktopFrame}
        initial={{ y: 0 }}
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className={styles.windowTitlebar}>
          <div className={styles.windowDots}>
            <span className={styles.dotRed} />
            <span className={styles.dotYellow} />
            <span className={styles.dotGreen} />
          </div>
          <div className={styles.windowAddressBar}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            <span>{project.slug}.vercel.app</span>
          </div>
          <div className={styles.windowStatusTag}>
            <span className={styles.statusDot} />
            <span>Active Production</span>
          </div>
        </div>

        <div className={styles.desktopScreen}>
          <Image
            src={primaryImage}
            alt={`${project.name} Desktop Interface`}
            fill
            className={styles.screenImage}
            unoptimized
          />
        </div>
      </motion.div>

      {/* Layer 2: Overlapping Mobile Device Mockup */}
      <motion.div 
        className={styles.mobileFrame}
        initial={{ y: 0 }}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
      >
        <div className={styles.mobileNotch}>
          <span className={styles.mobileSpeaker} />
          <span className={styles.mobileCamera} />
        </div>
        <div className={styles.mobileScreen}>
          <Image
            src={secondaryImage}
            alt={`${project.name} Mobile Interface`}
            fill
            className={styles.screenImage}
            unoptimized
          />
        </div>
      </motion.div>

      {/* Layer 3: Floating Micro Glass Cards */}
      <motion.div 
        className={`${styles.floatingBadge} ${styles.badgeTopRight}`}
        initial={{ y: 0 }}
        animate={{ y: [-4, 6, -4] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <span className={styles.badgeIcon}>{badges[0].icon}</span>
        <div className={styles.badgeText}>
          <span className={styles.badgeTitle}>{badges[0].title}</span>
          <span className={styles.badgeSubtitle}>{badges[0].subtitle}</span>
        </div>
      </motion.div>

      <motion.div 
        className={`${styles.floatingBadge} ${styles.badgeBottomLeft}`}
        initial={{ y: 0 }}
        animate={{ y: [6, -4, 6] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      >
        <span className={styles.badgeIcon}>{badges[1].icon}</span>
        <div className={styles.badgeText}>
          <span className={styles.badgeTitle}>{badges[1].title}</span>
          <span className={styles.badgeSubtitle}>{badges[1].subtitle}</span>
        </div>
      </motion.div>
    </div>
  );
}
