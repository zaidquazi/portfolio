import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { projects } from "../../../data/projects";
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

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://zaidhusainonline.vercel.app";

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
      title: "Project Not Found | Zaid Husain",
      robots: { index: false, follow: false },
    };
  }

  const techKeywords = project.techSummary.map(
    (t) => `${t} project by Zaid Husain`
  );
  const url = `${BASE_URL}/projects/${project.slug}`;

  return {
    title: `${project.name} | ${project.role} — Zaid Husain`,
    description: project.oneLiner,
    keywords: [
      `Zaid Husain ${project.name}`,
      project.name,
      project.role,
      ...project.techSummary,
      ...techKeywords,
      "Zaid Husain Portfolio",
      "Full Stack Developer Project India",
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
      title: `${project.name} — Case Study | Zaid Husain`,
      description: project.oneLiner,
      siteName: "Zaid Husain Portfolio",
      images: [
        {
          url: `${BASE_URL}/opengraph-image.png`,
          width: 1200,
          height: 630,
          alt: `${project.name} — ${project.role} by Zaid Husain`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.name} | Zaid Husain`,
      description: project.oneLiner,
      images: [`${BASE_URL}/twitter-image.png`],
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

  const projectUrl = `${BASE_URL}/projects/${project.slug}`;

  const projectSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareSourceCode",
        "@id": `${projectUrl}/#sourcecode`,
        name: project.name,
        description: project.oneLiner,
        url: projectUrl,
        codeRepository: project.githubUrl,
        installUrl: project.liveUrl || undefined,
        programmingLanguage: project.techSummary,
        runtimePlatform: project.techStack.infrastructure,
        author: { "@id": `${BASE_URL}/#person` },
        creator: { "@id": `${BASE_URL}/#person` },
        dateCreated: project.timeline,
        keywords: project.techSummary.join(", "),
      },
      {
        "@type": "CreativeWork",
        "@id": `${projectUrl}/#creativework`,
        name: `${project.name} — Case Study`,
        description: project.narrative.problem,
        url: projectUrl,
        author: { "@id": `${BASE_URL}/#person` },
        creator: { "@id": `${BASE_URL}/#person` },
        dateCreated: project.timeline,
        keywords: allTechStack.join(", "),
        about: {
          "@type": "SoftwareApplication",
          name: project.name,
          description: project.oneLiner,
          url: project.liveUrl || projectUrl,
          applicationCategory: "WebApplication",
          operatingSystem: "Any",
          softwareRequirements: project.techSummary.join(", "),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
          {
            "@type": "ListItem",
            position: 2,
            name: "Projects",
            item: `${BASE_URL}/projects`,
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
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
          <Link href="/#work" className={styles.backLink}>
            ← Back to Projects
          </Link>
        </nav>

        <CaseStudyHero
          name={project.name}
          oneLiner={project.oneLiner}
          role={project.role}
          timeline={project.timeline}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
        />

        {project.metrics && <MetricsGrid metrics={project.metrics} />}

        <ProjectOverview
          problem={project.narrative.problem}
          goals={project.narrative.goals}
        />

        {project.techStack && <TechStack techStack={project.techStack} />}

        <ArchitectureSection
          frontend={project.narrative.architecture.frontend}
          backend={project.narrative.architecture.backend}
          database={project.narrative.architecture.database}
        />

        {project.narrative.decisions &&
          project.narrative.decisions.length > 0 && (
            <EngineeringDecisions decisions={project.narrative.decisions} />
          )}

        {project.narrative.results &&
          project.narrative.results.length > 0 && (
            <section className={styles.resultsSection}>
              <h2 className={styles.sectionTitle}>Key Results</h2>
              <ul className={styles.resultsList}>
                {project.narrative.results.map((result, i) => (
                  <li key={i}>{result}</li>
                ))}
              </ul>
            </section>
          )}

        {project.narrative.lessonsLearned && (
          <section className={styles.lessonsSection}>
            <h2 className={styles.sectionTitle}>Lessons Learned</h2>
            <p className={styles.text}>{project.narrative.lessonsLearned}</p>
          </section>
        )}

        <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
      </div>
    </div>
  );
}
