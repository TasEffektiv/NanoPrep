import Link from "next/link";
import styles from "./Breadcrumbs.module.css";

export interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.inner}>
        {items.map((item, index) => (
          <li key={item.label} style={{ display: "flex", gap: 6 }}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span className={styles.current}>{item.label}</span>}
            {index < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
