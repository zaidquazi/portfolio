export interface CapabilityGroup {
  domain: string;
  focus: string[];
  description: string;
}

export const capabilities: CapabilityGroup[] = [
  {
    domain: "Full-Stack Development",
    focus: [
      "React.js & Tailwind CSS",
      "Node.js & Express.js",
      "MongoDB, SQL & MySQL",
      "JWT Auth & Middleware",
      "TypeScript & JavaScript"
    ],
    description: "Building complete web applications with React, Node.js, Express, MongoDB, SQL, MySQL, and secure JWT middleware authentication."
  },
  {
    domain: "Programming & Problem Solving",
    focus: [
      "Python Data Structures",
      "C Programming Logic",
      "Database Indexing",
      "HTML & CSS Foundation",
      "Postman API Testing"
    ],
    description: "Applying Python for Data Structures & Algorithms, C for core computational fundamentals, Database Indexing for query speed, and Postman for API verification."
  },
  {
    domain: "Deployment, Tools & Learning",
    focus: [
      "Vercel & Render Hosting",
      "Git & GitHub Workflows",
      "n8n Workflow Automation",
      "DevOps (Learning)",
      "MLOps (Learning)"
    ],
    description: "Deploying applications on Vercel and Render, managing version control with Git & GitHub, automating workflows with n8n, and actively learning DevOps and MLOps."
  }
];
