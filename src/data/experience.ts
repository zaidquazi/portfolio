export interface ExperienceMilestone {
  role: string;
  company: string;
  timeline: string;
  mission: string;
  impact: string[];
  techStack: string[];
}

export const experience: ExperienceMilestone[] = [
  {
    role: "MERN Stack Developer Intern",
    company: "Unified Mentor",
    timeline: "6 Months",
    mission: "Engineered full-stack web application features, developed RESTful API endpoints, and optimized client-side state management for production workflows.",
    impact: [
      "Collaborated on production-grade MERN stack applications, building modular React interfaces and Express micro-services.",
      "Engineered secure API routes, input validation layers, and database queries in MongoDB to optimize data flow.",
      "Participated in agile code reviews, version control workflows with Git/GitHub, and backend integration testing using Postman."
    ],
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB", "Postman", "Git"]
  },
  {
    role: "Full-Stack Project Lead & Developer",
    company: "Business Management Solution (Self-Directed)",
    timeline: "2024 - Present",
    mission: "Designing and deploying a full-stack business management application to modernize and streamline daily operations, inventory management, and customer tracking.",
    impact: [
      "Architected end-to-end data schemas and UI components to digitize manual business workflows.",
      "Implemented role-based access control and responsive dashboard interface using React and Tailwind/CSS Modules.",
      "Integrated automated background notifications and workflow tracking via n8n automation tools."
    ],
    techStack: ["React.js", "Node.js", "MongoDB", "Express.js", "Python", "n8n"]
  }
];

