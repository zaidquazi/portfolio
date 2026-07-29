'use client';

import React, { useState } from 'react';
import styles from './ProjectsSection.module.css';
import { Project } from '../../data/projects';
import { ProjectCarousel } from './ProjectCarousel';
import { ProjectStats } from './ProjectStats';
import { TechStackPills } from './TechStackPills';
import { ProjectButtons } from './ProjectButtons';
import { ProjectModal } from './ProjectModal';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      <div className={`${styles.projectCard} ${project.isFlagship ? styles.flagshipCard : ''}`}>
        {/* Top Accent Line */}
        <div className={styles.accentBar} />

        {/* Card Header Topbar */}
        <div className={styles.cardHeader}>
          <div className={styles.titleRow}>
            <div className={styles.titleGroup}>
              {project.isFlagship && (
                <div className={styles.flagshipBadge}>
                  <span className={styles.badgePulse} />
                  <span>Flagship Project</span>
                </div>
              )}
              <h3 className={styles.projectName}>{project.name}</h3>
            </div>
            <div className={styles.metaBadges}>
              <span className={styles.projectRole}>{project.role}</span>
              <span className={styles.projectTimeline}>{project.timeline}</span>
            </div>
          </div>
          <p className={styles.oneLiner}>{project.oneLiner}</p>
        </div>

        {/* 2-Column Split Dossier */}
        <div className={styles.cardSplitLayout}>
          {/* Left Column: Visual & Core Problem */}
          <div className={styles.leftVisualCol}>
            {/* The Visual Showcase */}
            <ProjectCarousel 
              projectSlug={project.slug} 
              slides={project.slides} 
              onOpenModal={handleOpenModal}
            />
            
            {/* Engineering Narrative (Problem/Solution) */}
            <div className={styles.narrativeBlock}>
              <h4 className={styles.narrativeTitle}>Engineering Context</h4>
              <p className={styles.narrativeText}><strong>Problem:</strong> {project.narrative.problem}</p>
              <p className={styles.narrativeText}><strong>Solution:</strong> {project.narrative.goals[0]}</p>
            </div>
            
            {/* Production Animated Counter Stats */}
            <ProjectStats stats={project.stats} />
          </div>

          {/* Right Column: Technical Details */}
          <div className={styles.rightInfoCol}>
            {/* Engineering Highlights */}
            {project.highlights && project.highlights.length > 0 && (
              <div className={styles.highlightsContainer}>
                <h4 className={styles.highlightsTitle}>Architecture & Engineering Impact</h4>
                <ul className={styles.highlightsList}>
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx}>
                      <span className={styles.highlightCheck}>✓</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Stack Hierarchical Pills */}
            <TechStackPills techSummary={project.techSummary} techStack={project.techStack} />

            {/* Action Buttons Group */}
            <ProjectButtons 
              githubUrl={project.githubUrl} 
              liveUrl={project.liveUrl} 
              slug={project.slug} 
            />
          </div>
        </div>
      </div>

      {/* Architecture Deep Dive Modal */}
      <ProjectModal 
        isOpen={modalOpen}
        project={project}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
