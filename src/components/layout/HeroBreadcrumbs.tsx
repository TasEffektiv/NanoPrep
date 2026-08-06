import Link from "next/link";
import type { Crumb } from "./Breadcrumbs";
import styles from "./HeroBreadcrumbs.module.css";

export default function HeroBreadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav className={styles.breadcrumb} aria-label="Breadcrumb">
      <ol className={styles.inner}>
        {items.map((item, index) => (
          <li key={item.label} className={styles.item}>
            {item.href ? <Link href={item.href}>{item.label}</Link> : <span className={styles.current}>{item.label}</span>}
            {index < items.length - 1 && <span aria-hidden="true">/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
