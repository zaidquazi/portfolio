'use client';

import React, { useEffect } from 'react';
import styles from './ProjectsSection.module.css';
import { Project } from '../../data/projects';

interface ProjectModalProps {
  isOpen: boolean;
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ isOpen, project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modalContentDoc} onClick={(e) => e.stopPropagation()}>
        {/* Modal Topbar */}
        <div className={styles.modalHeader}>
          <div className={styles.modalTitleGroup}>
            <span className={styles.modalProjectName}>{project.name}</span>
            <span className={styles.modalDivider}>•</span>
            <span className={styles.modalSlideTitle}>Architecture Deep Dive</span>
          </div>
          <button type="button" className={styles.modalCloseBtn} onClick={onClose} aria-label="Close modal">✕</button>
        </div>

        {/* Modal Body Document */}
        <div className={styles.modalBodyDoc}>
          <div className={styles.docSection}>
            <h3 className={styles.docSectionTitle}>The Problem</h3>
            <p className={styles.docText}>{project.narrative.problem}</p>
          </div>
          
          <div className={styles.docSection}>
            <h3 className={styles.docSectionTitle}>Engineering Goals</h3>
            <ul className={styles.docList}>
              {project.narrative.goals.map((goal, idx) => (
                <li key={idx}>{goal}</li>
              ))}
            </ul>
          </div>

          <div className={styles.docSection}>
            <h3 className={styles.docSectionTitle}>System Architecture</h3>
            <div className={styles.architectureGrid}>
              <div className={styles.archBox}>
                <span className={styles.archLabel}>Frontend Node</span>
                <span className={styles.archValue}>{project.narrative.architecture.frontend}</span>
              </div>
              <div className={styles.archBox}>
                <span className={styles.archLabel}>Backend Service</span>
                <span className={styles.archValue}>{project.narrative.architecture.backend}</span>
              </div>
              <div className={styles.archBox}>
                <span className={styles.archLabel}>Database Layer</span>
                <span className={styles.archValue}>{project.narrative.architecture.database}</span>
              </div>
            </div>
          </div>

          <div className={styles.docSection}>
            <h3 className={styles.docSectionTitle}>Key Architectural Decisions</h3>
            <div className={styles.decisionsList}>
              {project.narrative.decisions.map((decision, idx) => (
                <div key={idx} className={styles.decisionCard}>
                  <h4 className={styles.decisionChoice}>{decision.choice}</h4>
                  <p className={styles.decisionReason}><strong>Why:</strong> {decision.reason}</p>
                  <p className={styles.decisionTradeoff}><strong>Tradeoff:</strong> {decision.tradeoff}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.docGrid}>
            <div className={styles.docSection}>
              <h3 className={styles.docSectionTitle}>Performance</h3>
              <p className={styles.docText}>{project.narrative.performance}</p>
            </div>
            <div className={styles.docSection}>
              <h3 className={styles.docSectionTitle}>Security</h3>
              <p className={styles.docText}>{project.narrative.security}</p>
            </div>
          </div>

          <div className={styles.docSection}>
            <h3 className={styles.docSectionTitle}>Outcomes & Lessons Learned</h3>
            <ul className={styles.docList}>
              {project.narrative.results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
            <p className={styles.docLesson}><strong>Insight:</strong> {project.narrative.lessonsLearned}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
