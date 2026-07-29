'use client';

import React, { useState } from 'react';
import { Section } from '../ui/layout/Section';
import { Reveal } from '../ui/motion/Reveal';
import styles from './ProjectsSection.module.css';
import { projects } from '../../data/projects';
import { ProjectCard } from './ProjectCard';

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'flagship' | 'realtime' | 'community'>('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'flagship') return project.isFlagship;
    if (activeFilter === 'realtime') return project.slug === 'zashly';
    if (activeFilter === 'community') return project.slug === 'home-town-hub';
    return true;
  });

  return (
    <Section id="work" className={styles.sectionWrapper}>
      {/* Background Animated Gradient & Grid Overlay */}
      <div className={styles.backgroundGlow} aria-hidden="true" />
      <div className={styles.gridOverlay} aria-hidden="true" />

      {/* Section Header */}
      <Reveal>
        <div className={styles.sectionHeader}>
          <div className={styles.headerBadge}>
            <span className={styles.badgeDot} />
            <span>Featured Engineering Work</span>
          </div>

          <h2 className={styles.sectionTitle}>
            Production Software &<br />
            Architectural Systems.
          </h2>

          <p className={styles.sectionSubtitle}>
            A curated showcase of production-ready full-stack applications, real-time engines, and distributed backend solutions built with modern software architecture principles.
          </p>

          {/* Interactive Filter / Quick Jump Tabs */}
          <div className={styles.filterTabs}>
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`${styles.filterTab} ${activeFilter === 'all' ? styles.filterTabActive : ''}`}
            >
              All Systems ({projects.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('flagship')}
              className={`${styles.filterTab} ${activeFilter === 'flagship' ? styles.filterTabActive : ''}`}
            >
              Flagship AI Platform
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('realtime')}
              className={`${styles.filterTab} ${activeFilter === 'realtime' ? styles.filterTabActive : ''}`}
            >
              Real-Time WebSockets
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('community')}
              className={`${styles.filterTab} ${activeFilter === 'community' ? styles.filterTabActive : ''}`}
            >
              Local Discovery Hub
            </button>
          </div>
        </div>
      </Reveal>

      {/* Project Cards List */}
      <div className={styles.projectsList}>
        {filteredProjects.map((project, index) => (
          <Reveal key={project.slug} delay={index * 120} animation="fade-up">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
