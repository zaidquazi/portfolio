'use client';

import React from 'react';
import styles from './ProjectsSection.module.css';
import { ProjectSlide } from '../../data/projects';
import { ProjectMockup } from './ProjectMockup';

interface ProjectCarouselProps {
  projectSlug: string;
  slides: ProjectSlide[];
  onOpenModal?: () => void;
}

export function ProjectCarousel({ projectSlug, slides, onOpenModal }: ProjectCarouselProps) {
  const currentSlide = slides[0];

  if (!currentSlide) return null;

  return (
    <div className={styles.carouselContainer} tabIndex={0} aria-label="Project screenshot preview">
      {/* Single Static Mockup Canvas Screen */}
      <ProjectMockup
        projectSlug={projectSlug}
        title={currentSlide.title}
        category={currentSlide.category}
        imagePath={currentSlide.image}
        onOpenModal={onOpenModal}
      />
    </div>
  );
}

