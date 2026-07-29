'use client';

import { useEffect, useState } from 'react';
import styles from './CursorSpotlight.module.css';

export function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      // For performance, we can use requestAnimationFrame, but simple state is usually fine
      // if the component is just transforming a single div.
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div 
      className={styles.spotlight}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
      aria-hidden="true"
    />
  );
}
