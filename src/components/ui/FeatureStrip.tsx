import styles from "./FeatureStrip.module.css";

export default function FeatureStrip({ items }: { items: string[] }) {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {items.map((item) => (
          <span key={item} className={styles.pill}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
