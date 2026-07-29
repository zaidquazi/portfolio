import styles from './page.module.css';

export default function Loading() {
  return (
    <div className={styles.container} aria-label="Loading page content" role="status">
      <div aria-live="polite" className="sr-only">Loading...</div>
    </div>
  );
}
