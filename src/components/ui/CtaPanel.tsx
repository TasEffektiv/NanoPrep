import Link from "next/link";
import styles from "./CtaPanel.module.css";

export default function CtaPanel({
  heading,
  text,
  href,
  label,
}: {
  heading: string;
  text: string;
  href: string;
  label: string;
}) {
  return (
    <div className={styles.panel}>
      <h3>{heading}</h3>
      <p className={styles.text}>{text}</p>
      <Link href={href} className={styles.button}>
        {label}
      </Link>
    </div>
  );
}
