import { SEO } from "./seo.constants";

export interface FAQ {
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    question: `Who is ${SEO.PERSON_NAME}?`,
    answer: `${SEO.PERSON_NAME} is a ${SEO.JOB_TITLE} based in ${SEO.LOCATION.locality}, ${SEO.LOCATION.country}. He specializes in full-stack web development using React, Node.js, PostgreSQL, and MongoDB, and is the creator of several production-grade platforms including Zashly, Zashio, and Zashub.`
  },
  {
    question: "What is Zashly?",
    answer: `Zashly is a real-time chat and social networking platform created by ${SEO.PERSON_NAME}. It features instant messaging, WebRTC-based calling, and real-time presence, built on the MERN stack with Socket.IO.`
  },
  {
    question: "What is Zashio?",
    answer: `Zashio is an AI-powered campus placement and recruitment platform engineered by ${SEO.PERSON_NAME}. It streamlines the hiring process for institutions using React, Node.js, and PostgreSQL.`
  },
  {
    question: "What is Zashub?",
    answer: `Zashub is a comprehensive community and neighborhood engagement platform developed by ${SEO.PERSON_NAME}, designed to connect local communities through digital infrastructure.`
  },
  {
    question: `What technologies does ${SEO.PERSON_NAME} use?`,
    answer: `His core technology stack includes React.js, Next.js, Node.js, Express.js, TypeScript, and Python. For data, he uses PostgreSQL, MongoDB, and Redis. He also focuses heavily on scalable architecture, WebRTC, Socket.IO, and DevOps.`
  },
  {
    question: `Where can I see ${SEO.PERSON_NAME}'s projects?`,
    answer: `You can explore his open-source work on GitHub (${SEO.SOCIAL.GITHUB}), view his professional background on LinkedIn (${SEO.SOCIAL.LINKEDIN}), and see detailed case studies of Zashly, Zashio, and Zashub on his portfolio at ${SEO.SITE_URL}.`
  }
];
