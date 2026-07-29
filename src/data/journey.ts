export interface EngineeringMilestone {
  id: string;
  stageBadge: string;
  stageTitle: string;
  role: string;
  company: string;
  timeline: string;
  badgeLabel: string;
  problem: string;
  solution: string;
  engineeringDecision: string;
  outcome: string;
  techStack: string[];
  type: 'work' | 'education' | 'horizon';
}

export const journeyMilestones: EngineeringMilestone[] = [
  {
    id: "internship",
    stageBadge: "01 / LEARN",
    stageTitle: "Production Internship",
    role: "MERN Stack Developer Intern",
    company: "Unified Mentor",
    timeline: "6 Months",
    badgeLabel: "Internship • 6 Months",
    problem: "Monolithic client workflows created high latency, tight client-server coupling, and unvalidated data flows across production endpoints.",
    solution: "Architected modular React client interfaces coupled with RESTful Express micro-services to streamline real-time state synchronization.",
    engineeringDecision: "Enforced strict backend request validation schemas, token authorization middleware, and indexed MongoDB collections to isolate data mutation operations.",
    outcome: "Reduced client API response latency by 35%, eliminated data synchronization race conditions, and established automated Postman testing pipelines.",
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Postman", "Git"],
    type: "work"
  },
  {
    id: "product-lead",
    stageBadge: "02 / BUILD & SCALE",
    stageTitle: "Full-Stack System Architecture",
    role: "Full-Stack Project Lead & Developer",
    company: "Business Management Solution (Self-Directed)",
    timeline: "2024 – Present",
    badgeLabel: "Independent Product • Current",
    problem: "Manual business tracking and paper-based inventory led to catalog stock discrepancies, untracked orders, and delayed customer fulfillment.",
    solution: "Engineered a full-stack ERP web platform delivering real-time dashboard analytics, role-based access controls, and automated stock workflows.",
    engineeringDecision: "Implemented granular Role-Based Access Control (RBAC), optimized compound database indices for catalog queries under 50ms, and designed n8n background event queues.",
    outcome: "Digitized 100% of paper workflows, guaranteed real-time stock alert accuracy, and scaled data query throughput across thousands of SKU items.",
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Python", "n8n", "Tailwind"],
    type: "work"
  },
  {
    id: "education",
    stageBadge: "03 / FOUNDATION",
    stageTitle: "Computer Science Engineering",
    role: "B.Tech in Computer Science & Engineering",
    company: "G H Raisoni University, Amravati",
    timeline: "2024 – 2028 (Expected)",
    badgeLabel: "Education • Expected 2028",
    problem: "Building production software requires deep theoretical grounding in algorithms, system architecture, memory models, and database design.",
    solution: "Pursuing a 4-year Computer Science Engineering degree while serving as College Team Lead to drive collaborative peer engineering initiatives.",
    engineeringDecision: "Bridged core academic coursework (Data Structures, Algorithms, OS, DBMS) with hands-on full-stack development and team software lifecycle management.",
    outcome: "Maintained strong academic performance (CGPA 7.4) while concurrently building production applications and mentoring student developers.",
    techStack: ["Data Structures", "Algorithms", "DBMS", "OOP", "Python", "C++"],
    type: "education"
  }
];
