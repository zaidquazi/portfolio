'use client';

import React, { useEffect, useState, useRef } from 'react';
import styles from './ProjectsSection.module.css';
import { ProjectStat } from '../../data/projects';

interface ProjectStatsProps {
  stats: ProjectStat[];
}

export function ProjectStats({ stats }: ProjectStatsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <div className={styles.statsContainer} ref={containerRef}>
      {stats.map((stat, index) => (
        <StatCounter 
          key={index} 
          target={stat.value} 
          suffix={stat.suffix} 
          label={stat.label} 
          shouldAnimate={hasAnimated}
          delay={index * 100}
        />
      ))}
    </div>
  );
}

function StatCounter({ target, suffix, label, shouldAnimate, delay }: { 
  target: number; 
  suffix: string; 
  label: string; 
  shouldAnimate: boolean;
  delay: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldAnimate) return;

    let start = 0;
    const isFloat = !Number.isInteger(target);
    const duration = 1600; // ms
    const steps = 40;
    const stepTime = duration / steps;
    const increment = target / steps;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(isFloat ? parseFloat(start.toFixed(1)) : Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [shouldAnimate, target, delay]);

  return (
    <div className={styles.statBox}>
      <div className={styles.statNumber}>
        <span>{count}</span>
        <span className={styles.statSuffix}>{suffix}</span>
      </div>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}
