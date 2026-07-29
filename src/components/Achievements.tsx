'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Section } from './ui/layout/Section';
import { Reveal } from './ui/motion/Reveal';
import styles from './Achievements.module.css';

interface Achievement {
  id: string;
  title: string;
  category: 'Internship Certificate' | 'Verified Course' | 'Specialized Skill';
  organization: string;
  date: string;
  description: string;
  badge: string;
  credentialId: string;
  keyLearning: string[];
  imageUrl: string;
  isFeatured?: boolean;
}

const achievements: Achievement[] = [
  {
    id: "cert-internship",
    title: "Fullstack Web Development Internship",
    category: "Internship Certificate",
    organization: "Unified Mentor Pvt. Ltd. (ISO 9001:2015)",
    date: "May 2026 – Jun 2026",
    description: "Completed 6-month full-stack development internship building production web features, REST APIs, and client interfaces.",
    badge: "Verified Internship",
    credentialId: "CIN: U85500HR2023PTC115118",
    keyLearning: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    imageUrl: "/certificates/internship.jpg",
    isFeatured: true
  },
  {
    id: "cert-sql",
    title: "Introduction to SQL",
    category: "Verified Course",
    organization: "Simplilearn SkillUp",
    date: "Dec 31, 2024",
    description: "Demonstrated proficiency in database querying, relational schemas, aggregation functions, and query optimization.",
    badge: "Verified Credential",
    credentialId: "Credential ID: 7730123",
    keyLearning: ["SQL Queries", "Relational Schemas", "Aggregations", "Indexing"],
    imageUrl: "/certificates/sql.jpg"
  },
  {
    id: "cert-java",
    title: "Java Programming for Beginners",
    category: "Verified Course",
    organization: "Simplilearn SkillUp",
    date: "Jan 12, 2025",
    description: "Mastered Object-Oriented Programming principles, data structures, and modular Java application architecture.",
    badge: "Verified Credential",
    credentialId: "Credential ID: 7767283",
    keyLearning: ["Java Core", "OOP Principles", "Data Structures", "Control Flow"],
    imageUrl: "/certificates/java.jpg"
  },
  {
    id: "cert-python",
    title: "Python for Beginners",
    category: "Verified Course",
    organization: "Simplilearn SkillUp",
    date: "Jan 12, 2025",
    description: "Mastered Python core syntax, computational problem solving, algorithmic logic, and script automation.",
    badge: "Verified Credential",
    credentialId: "Credential ID: 7766322",
    keyLearning: ["Python Scripting", "Algorithmic Logic", "Data Structures", "Automation"],
    imageUrl: "/certificates/python.jpg"
  },
  {
    id: "cert-frontend",
    title: "Introduction to Front End Development",
    category: "Verified Course",
    organization: "Simplilearn SkillUp",
    date: "Jan 7, 2025",
    description: "Built responsive client interfaces using HTML5 semantic structure, modern CSS flexbox/grid, and clean DOM manipulation.",
    badge: "Verified Credential",
    credentialId: "Credential ID: 7748547",
    keyLearning: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    imageUrl: "/certificates/frontend.jpg"
  }
];

export function Achievements() {
  const [selectedCert, setSelectedCert] = useState<Achievement | null>(null);

  // Handle Escape key to close modal preview
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedCert) {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedCert]);

  return (
    <Section id="achievements" aria-label="Verified Credentials & Continuous Learning">
      <Reveal>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>05 / VERIFIED CREDENTIALS &amp; CONTINUOUS LEARNING</span>
          <h2 className={styles.title}>Verified Credentials &amp; Continuous Learning</h2>
          <p className={styles.subtitle}>
            A documented record of verified industry credentials, practical full-stack development certifications, and an active technical learning roadmap.
          </p>
        </div>
      </Reveal>

      {/* Verified Metrics Banner */}
      <Reveal delay={100} animation="fade-up">
        <div className={styles.metricsBanner}>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>5</span>
            <span className={styles.metricLabel}>Verified Certifications</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>4+</span>
            <span className={styles.metricLabel}>Full-Stack Systems</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>6 Mos</span>
            <span className={styles.metricLabel}>Developer Internship</span>
          </div>
          <div className={styles.metricCard}>
            <span className={styles.metricValue}>100%</span>
            <span className={styles.metricLabel}>Authentic Credentials</span>
          </div>
        </div>
      </Reveal>

      {/* Certification Cards Grid */}
      <div className={styles.grid}>
        {achievements.map((item, index) => {
          const isFeatured = !!item.isFeatured;

          return (
            <Reveal key={item.id} delay={140 + index * 50} animation="fade-up">
              <div
                className={`${styles.card} ${isFeatured ? styles.featuredCard : ''}`}
                onClick={() => setSelectedCert(item)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedCert(item);
                  }
                }}
                aria-label={`View verified certificate image for ${item.title}`}
              >
                <div className={styles.cardTop}>
                  <div className={styles.badgeGroup}>
                    <span className={`${styles.categoryBadge} ${isFeatured ? styles.featuredCategoryBadge : ''}`}>
                      {item.category}
                    </span>
                    {isFeatured && (
                      <span className={styles.featuredBadge}>FEATURED CREDENTIAL</span>
                    )}
                  </div>
                  <span className={styles.dateText}>{item.date}</span>
                </div>

                <div className={styles.cardMainInfo}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <span className={styles.orgName}>{item.organization}</span>
                </div>

                <p className={styles.description}>{item.description}</p>

                <div className={styles.skillList}>
                  {item.keyLearning.map((skill, i) => (
                    <span key={i} className={styles.skillTag}>{skill}</span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.credentialGroup}>
                    <span className={styles.statusPill}>✓ {item.badge}</span>
                    <span className={styles.credentialId}>{item.credentialId}</span>
                  </div>
                  <span className={styles.verifyAction}>
                    {isFeatured ? 'Verify Internship Credential ↗' : 'Verify Credential ↗'}
                  </span>
                </div>

                <div className={styles.hoverOverlay}>
                  <div className={styles.hoverImagePreview}>
                    <Image
                      src={item.imageUrl}
                      alt={`${item.title} preview`}
                      className={styles.thumbnailImg}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      loading="lazy"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.hoverBackdrop}>
                      <span className={styles.hoverText}>View Certificate Image 🖼️</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>


      {/* Section Ending */}
      <Reveal delay={200} animation="fade-up">
        <div className={styles.sectionEndingRow}>
          <span className={styles.sectionEndingText}>
            Continuous technical learning and verified credentials drive reliable, production-grade software engineering.
          </span>
        </div>
      </Reveal>

      {/* Certificate Modal Viewer */}
      {selectedCert && (
        <div
          className={styles.modalOverlay}
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-cert-title"
        >
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.modalCloseBtn}
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate preview"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
              </svg>
            </button>

            <div className={styles.modalHeader}>
              <div className={styles.modalTitleGroup}>
                <span className={styles.modalBadge}>{selectedCert.category}</span>
                <h3 id="modal-cert-title" className={styles.modalTitle}>{selectedCert.title}</h3>
                <span className={styles.modalOrg}>
                  {selectedCert.organization} • {selectedCert.date} • {selectedCert.credentialId}
                </span>
              </div>
              <a
                href={selectedCert.imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.modalDownloadBtn}
              >
                <span>High Res Image ↗</span>
              </a>
            </div>

            <div className={styles.imageViewerContainer}>
              <Image
                src={selectedCert.imageUrl}
                alt={`${selectedCert.title} Certificate`}
                className={styles.certificateImage}
                fill
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
