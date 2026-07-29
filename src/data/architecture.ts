export interface SystemArchitecture {
  title: string;
  description: string;
  layers: {
    client: string;
    api: string;
    database: string;
    infrastructure: string;
  };
}

export const architectureData: SystemArchitecture[] = [
  {
    title: "Full-Stack MERN Architecture",
    description: "Architecting modular full-stack applications with clear separation of concerns. From client-side React components to Express REST APIs and MongoDB document collections, I build systems for maintainability, reliability, and clean developer workflows.",
    layers: {
      client: "React.js with modular CSS Modules for responsive, accessible user interfaces.",
      api: "Node.js & Express.js RESTful API layer with JWT authentication and input validation.",
      database: "MongoDB for flexible document storage and SQL for relational data requirements.",
      infrastructure: "Git version control, Docker containerization, and n8n workflow automation."
    }
  }
];

