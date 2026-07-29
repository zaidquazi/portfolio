import React, { Suspense } from 'react';
import { GlobalHeader, SkipLink } from '../navigation';
import { GlobalFooter } from './GlobalFooter';
import { CommandPalette } from '../command/CommandPalette';
import styles from './GlobalLayout.module.css';

interface GlobalLayoutProps {
  children: React.ReactNode;
}

export function GlobalLayout({ children }: GlobalLayoutProps) {
  return (
    <>
      <SkipLink />
      <div className={styles.wrapper}>
        <GlobalHeader />
        <main id="main-content" className={styles.mainContent}>
          <Suspense fallback={null}>
            {children}
          </Suspense>
        </main>
        <GlobalFooter />
      </div>
      <CommandPalette />
    </>
  );
}
