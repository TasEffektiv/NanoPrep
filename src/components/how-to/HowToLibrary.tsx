import type { HowToCategory } from "@/content/howToGuides";
import HowToGuideCard from "./HowToGuideCard";
import styles from "./HowToLibrary.module.css";

export default function HowToLibrary({ categories }: { categories: HowToCategory[] }) {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Applications</h2>
      </div>

      {categories.map((category) => (
        <div key={category.name} className={styles.category}>
          <h3>{category.name}</h3>
          <div className={styles.grid}>
            {category.guides.map((guide) => (
              <HowToGuideCard key={guide.slug} guide={guide} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
