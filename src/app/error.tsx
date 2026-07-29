"use client";

import { useEffect } from "react";
import styles from "./not-found.module.css";
import { Button } from "../components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service in production
    console.error("Global Error Boundary caught:", error);
  }, [error]);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.errorCode}>500</h1>
        <h2 className={styles.title}>System Exception</h2>
        <p className={styles.message}>
          An unexpected error occurred while processing your request. 
          The application state has been preserved.
        </p>
        
        <div className={styles.actions}>
          <Button onClick={() => reset()} variant="primary" size="md">
            Recover State
          </Button>
          <Button href="/" variant="secondary" size="md">
            Return Home
          </Button>
        </div>
      </div>
    </div>
  );
}
