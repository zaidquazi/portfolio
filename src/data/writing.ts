export interface Article {
  title: string;
  category: string;
  date: string;
  summary: string;
  link: string;
}

export const articlesData: Article[] = [
  {
    title: "The Fallacy of Premature Microservices",
    category: "System Design",
    date: "Oct 2023",
    summary: "Why starting with a well-structured modular monolith is almost always the correct architectural decision for early-stage products.",
    link: "#"
  },
  {
    title: "Zero-Runtime CSS in React Server Components",
    category: "Frontend Architecture",
    date: "Aug 2023",
    summary: "An exploration of styling strategies that don't destroy your Core Web Vitals score when moving to the App Router.",
    link: "#"
  }
];
