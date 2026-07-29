import type { Metadata } from "next";
import { Button } from "../components/ui/Button";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "404 — Page Not Found | Zaid Husain Portfolio",
  description:
    "This page does not exist. Return to the portfolio of Zaid Husain — Full Stack Developer specializing in React.js, Node.js, and MERN Stack.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main
      className={styles.container}
      aria-label="Page Not Found"
      id="main-content"
    >
      <div className={styles.content}>
        <div className={styles.errorMeta}>
          <span className={styles.errorCode} aria-hidden="true">
            404
          </span>
          <span className={styles.errorLabel}>Page Not Found</span>
        </div>
        <h1 className={styles.title}>
          This page has been relocated or doesn&apos;t exist.
        </h1>
        <p className={styles.message}>
          If you were looking for a specific project, you can browse all my work
          on the homepage, or use the command palette{" "}
          <kbd className={styles.kbd}>⌘</kbd>
          <kbd className={styles.kbd}>K</kbd> to jump anywhere.
        </p>
        <nav aria-label="Recovery navigation" className={styles.actions}>
          <Button href="/" variant="primary">
            Return to Homepage
          </Button>
          <Button href="/projects" variant="secondary">
            View Projects
          </Button>
          <Button href="/contact" variant="secondary">
            Contact Me
          </Button>
        </nav>
      </div>
    </main>
  );
}
