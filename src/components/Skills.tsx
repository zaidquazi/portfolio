import styles from './Skills.module.css';
import { skills } from '../data/skills';

const categoryTitles: Record<string, string> = {
  frontend: "Frontend Development",
  backend: "Backend Development",
  databases: "Databases & Storage",
  programming: "Programming Languages",
  devopsAndCloud: "DevOps & Cloud (Currently Learning)",
  toolsAndAutomation: "Tools & Automation",
  softSkills: "Soft Skills & Leadership"
};

export function Skills() {
  return (
    <section id="capabilities" className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Core Skills & Technologies</h2>
      </div>
      <div className={styles.categories}>
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className={styles.category}>
            <h3 className={styles.categoryTitle}>{categoryTitles[category] || category}</h3>
            <div className={styles.items}>
              {items.map((item) => (
                <div key={item.name} className={styles.item}>
                  <h4 className={styles.itemName}>{item.name}</h4>
                  <p className={styles.itemReason}>{item.reason}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
