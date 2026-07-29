'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './Reveal.module.css';

interface RevealProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right';
  delay?: number;
  duration?: 'fast' | 'base' | 'slow';
  threshold?: number;
  className?: string;
  as?: React.ElementType;
}

export function Reveal({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 'slow',
  threshold = 0.1,
  className = '',
  as: Component = 'div'
}: RevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const currentRef = ref.current;

    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const timer = requestAnimationFrame(() => setIsVisible(true));
      return () => cancelAnimationFrame(timer);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold
      }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  const style: React.CSSProperties = {
    transitionDelay: `${delay}ms`,
  };

  const animationClass = styles[animation];
  const durationClass = styles[`duration-${duration}`];
  const stateClass = isVisible ? styles.visible : styles.hidden;

  return (
    <Component
      ref={ref}
      style={style}
      className={`${styles.base} ${animationClass} ${durationClass} ${stateClass} ${className}`}
    >
      {children}
    </Component>
  );
}
