import type { ResourceGroup } from "@/content/technicalResources";
import ResourceIconGlyph from "./ResourceIcons";
import styles from "./ResourceGroupCard.module.css";

function chunk<T>(items: T[], size: number): T[][] {
  const rows: T[][] = [];
  for (let i = 0; i < items.length; i += size) rows.push(items.slice(i, i + size));
  return rows;
}

export default function ResourceGroupCard({ group }: { group: ResourceGroup }) {
  const rows = chunk(group.items, 2);

  return (
    <div className={styles.group}>
      <div className={styles.header}>
        <h2>{group.name}</h2>
        <span className={styles.tag}>{group.tag}</span>
      </div>
      <p className={styles.description}>{group.description}</p>

      <div className={styles.card}>
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className={`${styles.row} ${rowIndex === rows.length - 1 ? styles.lastRow : ""}`}>
            {row.map((item, colIndex) => (
              <a
                key={item.href}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.item} ${
                  row.length === 1 ? styles.itemFull : colIndex === 0 ? styles.itemFirst : ""
                }`}
              >
                <span className={styles.itemIcon}>
                  <ResourceIconGlyph icon={item.icon} />
                </span>
                <span className={styles.itemText}>
                  <strong>{item.label}</strong>
                  <span className={styles.itemSub}>{item.sub}</span>
                </span>
                <span className={styles.downloadBtn} aria-hidden="true">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 4v11m0 0l-4-4m4 4l4-4" />
                    <path d="M5 19h14" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
