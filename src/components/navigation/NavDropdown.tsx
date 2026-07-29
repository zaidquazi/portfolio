'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import styles from './NavDropdown.module.css';

interface DropdownItem {
  href: string;
  label: string;
  description: string;
  icon: React.ReactNode;
}

const dropdownItems: DropdownItem[] = [
  {
    href: '/#experience',
    label: 'Experience',
    description: 'Work history & software engineering track record',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      </svg>
    ),
  },
  {
    href: '/#education',
    label: 'Education',
    description: 'Academic background & CS degree',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    href: '/#achievements',
    label: 'Credentials',
    description: 'Certifications, honors & live activity',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
  },
];

export function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleItemClick = () => {
    setIsOpen(false);
  };

  // Handle click outside and Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [isOpen]);

  return (
    <div
      className={styles.dropdownContainer}
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`${styles.triggerButton} ${isOpen ? styles.activeTrigger : ''}`}
        onClick={toggleDropdown}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Qualifications menu"
      >
        <span>Qualifications</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronRotated : ''}`}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`} role="menu">
        <div className={styles.menuInner}>
          <div className={styles.menuHeader}>
            <span className={styles.menuHeaderTitle}>Qualifications & Background</span>
          </div>

          <div className={styles.itemList}>
            {dropdownItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={styles.dropdownItem}
                onClick={handleItemClick}
                role="menuitem"
              >
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div className={styles.itemContent}>
                  <div className={styles.itemTitleRow}>
                    <span className={styles.itemTitle}>{item.label}</span>
                    <svg
                      className={styles.itemArrow}
                      width="12"
                      height="12"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                  <span className={styles.itemDescription}>{item.description}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
