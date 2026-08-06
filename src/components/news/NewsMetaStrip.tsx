import styles from "./NewsMetaStrip.module.css";

export default function NewsMetaStrip({ fields }: { fields: { label: string; value: string }[] }) {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        {fields.map((field) => (
          <div key={field.label} className={styles.field}>
            <strong>{field.label}:</strong> <span>{field.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
