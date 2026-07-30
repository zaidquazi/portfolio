'use client';

import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import styles from './ProjectsSection.module.css';
import { Project } from '../../data/projects';
import { CinematicShowcase } from './CinematicShowcase';
import { TechStackPills } from './TechStackPills';
import { ProjectButtons } from './ProjectButtons';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  // Cursor-reactive lighting and 3D tilt
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-150, 150], [4, -4]);
  const rotateY = useTransform(x, [-300, 300], [-4, 4]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;
    setMousePosition({ x: offsetX, y: offsetY });

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    x.set(offsetX - centerX);
    y.set(offsetY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className={`${styles.cinematicCard} ${project.isFlagship ? styles.flagshipCinematic : ''}`}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      transition={{ type: 'spring', stiffness: 250, damping: 25 }}
    >
      {/* Cursor-reactive Lighting Spotlight Layer */}
      <div 
        className={styles.cursorSpotlight} 
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.12), transparent 80%)`,
        }}
        aria-hidden="true"
      />

      {/* Top Gradient Edge Accent */}
      <div className={styles.cinematicAccentBar} />

      {/* Asymmetric 2-Column Grid Content */}
      <div className={styles.cinematicGrid}>
        {/* Left Column: Product Value Proposition & Hierarchy */}
        <div className={styles.showcaseLeftCol}>
          {/* Tag & Badges */}
          <div className={styles.badgeRow}>
            {project.isFlagship && (
              <div className={styles.flagshipPill}>
                <span className={styles.badgeDotPulse} />
                <span>Flagship Platform</span>
              </div>
            )}
            <span className={styles.rolePill}>{project.role}</span>
            <span className={styles.timelinePill}>{project.timeline}</span>
          </div>

          {/* Hero Headline */}
          <h3 className={styles.saasTitle}>{project.name}</h3>

          {/* Value Proposition */}
          <p className={styles.saasOneLiner}>{project.oneLiner}</p>



          {/* Technology Stack Pills */}
          <div className={styles.saasTechWrapper}>
            <TechStackPills techSummary={project.techSummary} techStack={project.techStack} />
          </div>

          {/* Action CTAs */}
          <div className={styles.saasActionsWrapper}>
            <ProjectButtons 
              githubUrl={project.githubUrl} 
              liveUrl={project.liveUrl} 
              slug={project.slug} 
            />
          </div>
        </div>

        {/* Right Column: Layered Floating Product Composition */}
        <div className={styles.showcaseRightCol}>
          <CinematicShowcase project={project} />
        </div>
      </div>
    </motion.div>
  );
}
