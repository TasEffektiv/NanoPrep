import Link from "next/link";
import styles from "./PromoBanner.module.css";

export default function PromoBanner({
  tag,
  heading,
  text,
  href,
  label,
}: {
  tag: string;
  heading: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <div className={styles.panel}>
      <div className={styles.text}>
        <div className={styles.tag}>{tag}</div>
        <h3>{heading}</h3>
        <p>{text}</p>
      </div>
      <Link href={href} className={styles.button}>
        {label} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}
