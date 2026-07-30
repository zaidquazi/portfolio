import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "../../../data/projects";
import { SEO } from "../../../data/seo.constants";
import styles from "./page.module.css";
import {
  CaseStudyHero,
  ProjectOverview,
  MetricsGrid,
  TechStack,
  ArchitectureSection,
  EngineeringDecisions,
  ProjectNavigation,
} from "../../../components/case-study";
import { ProjectCarousel } from "../../../components/projects/ProjectCarousel";
import { ProjectStats } from "../../../components/projects/ProjectStats";
import { Reveal } from "../../../components/ui/motion/Reveal";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  const project = projects.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: `Project Not Found | ${SEO.PERSON_NAME}`,
      robots: { index: false, follow: false },
    };
  }

  const url = `${SEO.SITE_URL}/projects/${project.slug}`;

  return {
    title: project.seoTitle || `${project.name} | ${project.role} — ${SEO.PERSON_NAME}`,
    description: project.seoDescription || project.oneLiner,
    keywords: [
      ...(project.seoKeywords || []),
      `${SEO.PERSON_NAME} ${project.name}`,
      project.name,
      ...project.techSummary,
      `${SEO.PERSON_NAME} Portfolio`,
    ],
    alternates: {
      canonical: `/projects/${project.slug}`,
      languages: {
        "en-IN": `/projects/${project.slug}`,
        "x-default": `/projects/${project.slug}`,
      },
    },
    openGraph: {
      type: "article",
      url,
      title: project.seoTitle || `${project.name} — Deep Architecture Case Study | ${SEO.PERSON_NAME}`,
      description: project.seoDescription || project.oneLiner,
      siteName: `${SEO.PERSON_NAME} Portfolio`,
      images: [
        {
          url: `${SEO.SITE_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `${project.name} — ${project.role} by ${SEO.PERSON_NAME}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle || `${project.name} | ${SEO.PERSON_NAME}`,
      description: project.seoDescription || project.oneLiner,
      images: [`${SEO.SITE_URL}/twitter-image.png`],
    },
  };
}

export default async function ProjectCaseStudy({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const projectIndex = projects.findIndex(
    (p) => p.slug === resolvedParams.slug
  );
  const project = projects[projectIndex];

  if (!project) {
    notFound();
  }

  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null;

  const allTechStack = [
    ...project.techStack.frontend,
    ...project.techStack.backend,
    ...project.techStack.database,
    ...project.techStack.infrastructure,
    ...project.techStack.tooling,
  ];

  const projectUrl = `${SEO.SITE_URL}/projects/${project.slug}`;

  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${projectUrl}/#webapplication`,
        name: project.name,
        description: project.seoDescription || project.oneLiner,
        url: project.liveUrl || projectUrl,
        applicationCategory: "WebApplication",
        creator: { "@id": `${SEO.SITE_URL}/#person` },
        author: { "@id": `${SEO.SITE_URL}/#person` },
        publisher: { "@id": `${SEO.SITE_URL}/#person` },
        codeRepository: project.githubUrl,
        operatingSystem: "Any",
        softwareRequirements: project.techSummary.join(", "),
        keywords: allTechStack.join(", "),
        isPartOf: { "@id": `${SEO.SITE_URL}/#website` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SEO.SITE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${SEO.SITE_URL}/#work`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: project.name,
            item: projectUrl,
          },
        ],
      },
    ],
  };

  return (
    <div className={styles.container}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <div className={styles.main}>
        {/* Navigation Breadcrumb */}
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/#work" className={styles.backLink}>
            ← Back to Projects
          </Link>
          {project.isFlagship && (
            <span className={styles.flagshipTag}>⚡ Flagship Deep Dive</span>
          )}
        </nav>

        {/* Hero Section */}
        <CaseStudyHero
          name={project.name}
          oneLiner={project.oneLiner}
          role={project.role}
          timeline={project.timeline}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
        />

        {/* Primary Achievement Banner */}
        {project.primaryAchievement && (
          <Reveal>
            <div className={styles.achievementBanner}>
              <span className={styles.achievementLabel}>Core Engineering Achievement</span>
              <p>{project.primaryAchievement}</p>
            </div>
          </Reveal>
        )}

        {/* Interactive Screenshot Showcase Carousel */}
        {project.slides && project.slides.length > 0 && (
          <Reveal>
            <section className={styles.gallerySection}>
              <h2 className={styles.sectionTitle}>System Interface & Feature Tour</h2>
              <ProjectCarousel 
                projectSlug={project.slug} 
                slides={project.slides}
              />
            </section>
          </Reveal>
        )}

        {/* Animated Performance Metrics & Stats */}
        {project.stats && project.stats.length > 0 && (
          <Reveal>
            <section className={styles.statsSection}>
              <h2 className={styles.sectionTitle}>Production Stats</h2>
              <ProjectStats stats={project.stats} />
            </section>
          </Reveal>
        )}

        {project.metrics && <MetricsGrid metrics={project.metrics} />}

        {/* Engineering Challenge & Goals */}
        <ProjectOverview
          problem={project.narrative.problem}
          goals={project.narrative.goals}
        />

        {/* Categorized Tech Stack */}
        {project.techStack && <TechStack techStack={project.techStack} />}

        {/* Deep Architecture Breakdown */}
        <ArchitectureSection
          frontend={project.narrative.architecture.frontend}
          backend={project.narrative.architecture.backend}
          database={project.narrative.architecture.database}
        />

        {/* Performance & Security Architecture Cards */}
        {(project.narrative.performance || project.narrative.security) && (
          <Reveal>
            <section className={styles.perfSecSection}>
              <h2 className={styles.sectionTitle}>Performance & Security Architecture</h2>
              <div className={styles.perfSecGrid}>
                {project.narrative.performance && (
                  <div className={styles.perfSecCard}>
                    <div className={styles.cardHeaderIcon}>⚡ Performance & Scalability</div>
                    <p>{project.narrative.performance}</p>
                  </div>
                )}
                {project.narrative.security && (
                  <div className={styles.perfSecCard}>
                    <div className={styles.cardHeaderIcon}>🔒 Security & Access Control</div>
                    <p>{project.narrative.security}</p>
                  </div>
                )}
              </div>
            </section>
          </Reveal>
        )}

        {/* Trade-offs & Engineering Decisions */}
        {project.narrative.decisions && project.narrative.decisions.length > 0 && (
          <EngineeringDecisions decisions={project.narrative.decisions} />
        )}

        {/* Key Results & Impact */}
        {project.narrative.results && project.narrative.results.length > 0 && (
          <Reveal>
            <section className={styles.resultsSection}>
              <h2 className={styles.sectionTitle}>Key Results & Production Impact</h2>
              <ul className={styles.resultsList}>
                {project.narrative.results.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>
            </section>
          </Reveal>
        )}

        {/* Lessons Learned */}
        {project.narrative.lessonsLearned && (
          <Reveal>
            <section className={styles.lessonsSection}>
              <h2 className={styles.sectionTitle}>Engineering Takeaways & Lessons Learned</h2>
              <div className={styles.lessonCard}>
                <p className={styles.text}>{project.narrative.lessonsLearned}</p>
              </div>
            </section>
          </Reveal>
        )}

        {/* Navigation to Next/Prev Projects */}
        <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
      </div>
    </div>
  );
}
