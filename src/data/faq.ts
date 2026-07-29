export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: "What is your core technology stack?",
    answer: "My primary ecosystem is TypeScript, React, Next.js, and Node.js. For databases, I prefer PostgreSQL for relational data and Redis for ephemeral state/caching. However, I consider myself language-agnostic; I focus on architectural patterns rather than syntax."
  },
  {
    question: "Are you open to remote opportunities?",
    answer: "Yes. I have extensive experience operating in asynchronous, remote-first engineering cultures. I value exhaustive documentation, over-communication in pull requests, and predictable delivery over mandatory seat time."
  },
  {
    question: "How do you approach learning new technologies?",
    answer: "I learn by building and reading source code. When evaluating a new tool, I look past the marketing material and directly at the architectural trade-offs it makes. I believe in mastering fundamentals (networking, databases, browser rendering) because frameworks change, but fundamentals do not."
  },
  {
    question: "Do you contribute to open source?",
    answer: "Yes. I actively maintain several small utility libraries and occasionally submit bug fixes to larger ecosystem tools when I encounter issues in production. It is a critical way I give back and refine my code-reading skills."
  },
  {
    question: "What kind of team are you looking for?",
    answer: "I am looking for a team that values engineering quality, rigorous code reviews, and psychological safety. I thrive in environments where engineers are encouraged to push back on requirements and deeply understand the business problem before writing a single line of code."
  }
];
