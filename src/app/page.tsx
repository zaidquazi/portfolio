import type { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";
import { AboutMe } from "../components/AboutMe";
import { TechnicalSkills } from "../components/TechnicalSkills";
import { Work } from "../components/Work";
import { Experience } from "../components/Experience";
import { Education } from "../components/Education";
import { Achievements } from "../components/Achievements";
import { Contact } from "../components/Contact";
import { Button } from "../components/ui/Button";
import { ResumeButton } from "../components/ui/ResumeButton";

export const metadata: Metadata = {
  title: "Zaid Husain | Full Stack Developer — React, Node.js, MERN Portfolio",
  description:
    "Portfolio of Zaid Husain — Full Stack Developer from Amravati, Maharashtra, India. Specializes in React.js, Node.js, Express.js, MongoDB, PostgreSQL, TypeScript, and Python. Open to Full-Time, Internship, and Remote opportunities.",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "en-US": "/",
      "x-default": "/",
    },
  },
};

export default function Home() {
  return (
    <main id="main-content" className={styles.container} aria-label="Zaid Husain Portfolio Home">
      <div className={styles.main}>
        {/* 1. HERO SECTION */}
        <section id="hero" aria-label="Introduction" className={styles.hero}>
          <div className={styles.heroLayout}>
            <div className={styles.heroContent}>
              <div className={`${styles.availabilityBadge} ${styles.cinematicReveal} ${styles.delay1}`}>
                <span className={styles.availabilityDot} aria-hidden="true" />
                <span>Available for Full-Time Software Engineering Roles</span>
              </div>

              <h1 className={`${styles.title} ${styles.cinematicReveal} ${styles.delay2}`}>
                <span className={styles.titleLine}>Zaid Husain</span><br />
                <span className={styles.titleLine}>
                  <span className={styles.highlightText}>Full-Stack Developer</span><br />
                </span>
              </h1>

              <p className={`${styles.subtitle} ${styles.cinematicReveal} ${styles.delay3}`}>
                Computer Science Engineer specializing in Full-Stack Web Development (React.js, Node.js, Express.js, MongoDB, SQL/MySQL, Python, TypeScript, Tailwind) with active focus on DevOps &amp; MLOps.
              </p>

              <div className={`${styles.ctaGroup} ${styles.cinematicReveal} ${styles.delay4}`}>
                <Button href="#work" variant="primary" size="lg">Explore Projects</Button>
                <ResumeButton />
                <Button href="https://github.com/zaidhusain" variant="ghost" size="md" target="_blank" rel="noopener noreferrer">GitHub ↗</Button>
                <Button href="https://www.linkedin.com/in/zaid-husain-329596257/" variant="ghost" size="md" target="_blank" rel="noopener noreferrer">LinkedIn ↗</Button>
              </div>
            </div>

            <div className={`${styles.heroImageWrapper} ${styles.cinematicReveal} ${styles.delay2}`}>
              <div className={styles.heroImageContainer}>
                <Image 
                  src="/p1.png" 
                  alt="Zaid Husain" 
                  fill 
                  className={styles.heroImage} 
                  priority 
                  sizes="(max-width: 768px) 100vw, 500px" 
                />
              </div>
              <div className={styles.imageGlow} aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* 2. ABOUT ME */}
        <AboutMe />

        {/* 3. TECHNICAL SKILLS */}
        <TechnicalSkills />

        {/* 4. FEATURED PROJECTS */}
        <Work />

        {/* 5. PROFESSIONAL EXPERIENCE */}
        <Experience />

        {/* 6. EDUCATION & ACADEMIC FOCUS */}
        <Education />

        {/* 7. ACHIEVEMENTS & CERTIFICATIONS */}
        <Achievements />

        {/* 7. CONTACT */}
        <Contact />
      </div>
    </main>
  );
}
