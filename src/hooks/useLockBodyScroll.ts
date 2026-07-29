import { useEffect } from 'react';

export function useLockBodyScroll(isLocked: boolean) {
  useEffect(() => {
    if (isLocked) {
      document.body.style.overflow = 'hidden';
      // Prevent layout shift from scrollbar disappearing
      document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
    } else {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isLocked]);
}
