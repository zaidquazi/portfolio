'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Section } from './ui/layout/Section';
import { Reveal } from './ui/motion/Reveal';
import styles from './AboutMe.module.css';
import { SEO } from '../data/seo.constants';

export function AboutMe() {
  const [copied, setCopied] = useState(false);

  const profileJson = JSON.stringify(
    {
      engineer: SEO.PERSON_NAME,
      title: SEO.JOB_TITLE,
      degree: "B.Tech CS Engineering (2024-2028)",
      location: `${SEO.LOCATION.locality}, ${SEO.LOCATION.country}`,
      coreStack: ["React.js", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "TypeScript", "Python"],
      built: ["Zashly", "Zashio", "Zashub"],
      status: "Available for Full-Time Roles"
    },
    null,
    2
  );

  const handleCopy = () => {
    navigator.clipboard.writeText(profileJson);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section id="about">
      <Reveal>
        <div className={styles.header}>
          <span className={styles.sectionBadge}>01 / ABOUT ME</span>
          <h2 className={styles.title}>
            Engineering Scalable Systems with Clean Architecture.
          </h2>
          <p className={styles.subtitle}>
            {SEO.JOB_TITLE} focused on building production-ready modern web applications. I specialize in designing structured REST APIs, optimizing database performance, and crafting resilient software with long-term maintainability in mind.
          </p>
        </div>
      </Reveal>

      <div className={styles.grid}>
        {/* Left Column: Developer Terminal Card */}
        <Reveal delay={100} animation="fade-up">
          <div className={styles.terminalCard}>
            <div className={styles.terminalHeader}>
              <div className={styles.controls}>
                <span className={`${styles.dot} ${styles.red}`} />
                <span className={`${styles.dot} ${styles.yellow}`} />
                <span className={`${styles.dot} ${styles.green}`} />
              </div>
              <span className={styles.terminalTitle}>zaid@engineer:~ (profile.json)</span>
              <button
                onClick={handleCopy}
                className={styles.copyBtn}
                title="Copy Profile JSON"
              >
                {copied ? '✓ Copied' : 'Copy JSON'}
              </button>
            </div>

            <div className={styles.terminalBody}>
  <pre className={styles.codeSnippet}>
    <code>
      <div className={styles.codeLine} style={{ animationDelay: '0ms' }}>
        {'{'}
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '40ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;engineer&quot;</span>: <span className={styles.codeString}>&quot;{SEO.PERSON_NAME}&quot;</span>,
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '80ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;role&quot;</span>: <span className={styles.codeString}>&quot;{SEO.JOB_TITLE}&quot;</span>,
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '120ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;built&quot;</span>: [<span className={styles.codeString}>&quot;Zashly&quot;</span>, <span className={styles.codeString}>&quot;Zashio&quot;</span>, <span className={styles.codeString}>&quot;Zashub&quot;</span>],
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '160ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;specialization&quot;</span>: [<span className={styles.codeString}>&quot;Backend Engineering&quot;</span>, <span className={styles.codeString}>&quot;REST APIs&quot;</span>, <span className={styles.codeString}>&quot;Scalable Web Apps&quot;</span>],
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '200ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;coreStack&quot;</span>: [<span className={styles.codeString}>&quot;React&quot;</span>, <span className={styles.codeString}>&quot;Node&quot;</span>, <span className={styles.codeString}>&quot;Express&quot;</span>, <span className={styles.codeString}>&quot;MongoDB&quot;</span>, <span className={styles.codeString}>&quot;PostgreSQL&quot;</span>, <span className={styles.codeString}>&quot;TypeScript&quot;</span>],
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '240ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;tools&quot;</span>: [<span className={styles.codeString}>&quot;Docker&quot;</span>, <span className={styles.codeString}>&quot;Git&quot;</span>, <span className={styles.codeString}>&quot;GitHub&quot;</span>, <span className={styles.codeString}>&quot;Supabase&quot;</span>],
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '280ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;terminal&quot;</span>: <span className={styles.codeString}>&quot;npm run dev&quot;</span>,
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '320ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;coffeePowered&quot;</span>: <span className={styles.codeGreen}>true</span>,
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '360ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;debugMode&quot;</span>: <span className={styles.codeString}>&quot;Always ON&quot;</span>,
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '400ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;favoriteError&quot;</span>: <span className={styles.codeString}>&quot;404: Sleep Not Found&quot;</span>,
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '440ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;commitMessage&quot;</span>: <span className={styles.codeString}>&quot;feat: engineered another feature&quot;</span>,
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '480ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;status&quot;</span>: <span className={styles.codeString}>&quot;Building. Learning. Shipping.&quot;</span>,
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '520ms' }}>
        &nbsp;&nbsp;<span className={styles.codeKey}>&quot;availability&quot;</span>: <span className={styles.codeGreen}>&quot;Open to Full-Time Software Engineering Roles&quot;</span>,
      </div>

      <div className={styles.codeLine} style={{ animationDelay: '560ms' }}>
        {'}'}<span className={styles.cursor} />
      </div>
    </code>
  </pre>

  <div className={styles.terminalImageContainer}>
    <Image 
      src="/chair.png" 
      alt={`${SEO.PERSON_NAME} Workstation`} 
      width={500} 
      height={300} 
      className={styles.terminalImage}
    />
  </div>
</div>

            <div className={styles.terminalFooter}>
              <div className={styles.statusIndicator}>
                <span className={styles.statusPulse} />
                <span>Active &amp; Ready for Production</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Right Column: Engineering Pillars & Principles */}
        <div className={styles.pillarsColumn}>
          <Reveal delay={200} animation="fade-up">
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>01</span>
                <h3 className={styles.pillarTitle}>Backend &amp; API Engineering</h3>
              </div>
              <p className={styles.pillarDesc}>
                Designing structured RESTful APIs with Node.js and Express.js, implementing JWT authentication, role-based access control (RBAC), robust payload validation, and clean service-layer abstractions for scalable server applications like Zashly.
              </p>
              <div className={styles.pillarBadges}>
                <span className={styles.pillarBadge}>REST APIs</span>
                <span className={styles.pillarBadge}>JWT Auth</span>
                <span className={styles.pillarBadge}>Node.js</span>
                <span className={styles.pillarBadge}>RBAC</span>
                <span className={styles.pillarBadge}>API Validation</span>
                <span className={styles.pillarBadge}>Architecture</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={300} animation="fade-up">
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>02</span>
                <h3 className={styles.pillarTitle}>Database &amp; System Design</h3>
              </div>
              <p className={styles.pillarDesc}>
                Structuring relational and document database schemas using PostgreSQL, MongoDB, and Supabase. Focused on entity modeling, index optimization, data normalization, and query performance in production environments like Zashio and Zashub.
              </p>
              <div className={styles.pillarBadges}>
                <span className={styles.pillarBadge}>PostgreSQL</span>
                <span className={styles.pillarBadge}>MongoDB</span>
                <span className={styles.pillarBadge}>Supabase</span>
                <span className={styles.pillarBadge}>Schema Design</span>
                <span className={styles.pillarBadge}>Query Optimization</span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={400} animation="fade-up">
            <div className={styles.pillarCard}>
              <div className={styles.pillarHeader}>
                <span className={styles.pillarNumber}>03</span>
                <h3 className={styles.pillarTitle}>Engineering Principles</h3>
              </div>
              <p className={styles.pillarDesc}>
                Writing modular, self-documenting code with clear separation of concerns, performance optimizations, type safety, and accessibility standards to build maintainable, AI-powered software systems.
              </p>
              <div className={styles.pillarBadges}>
                <span className={styles.pillarBadge}>Clean Code</span>
                <span className={styles.pillarBadge}>Performance</span>
                <span className={styles.pillarBadge}>Scalability</span>
                <span className={styles.pillarBadge}>Maintainability</span>
                <span className={styles.pillarBadge}>AI Applications</span>
                <span className={styles.pillarBadge}>Production Ready</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
