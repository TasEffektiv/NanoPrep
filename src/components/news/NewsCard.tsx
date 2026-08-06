import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/content/news";
import styles from "./NewsCard.module.css";

export default function NewsCard({ item }: { item: NewsItem }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {item.image ? (
          <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 900px) 33vw, 100vw" />
        ) : (
          <div className={styles.placeholderIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="8.5" cy="10" r="1.5" />
              <path d="M21 16l-5.5-5.5a1.5 1.5 0 0 0-2.1 0L4 19" />
            </svg>
          </div>
        )}
        <span className={`${styles.tag} ${item.tagVariant === "media" ? styles.tagMedia : ""}`}>{item.tag}</span>
        <span className={styles.date}>{item.dateShort}</span>
      </div>
      <div className={styles.content}>
        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>
        <Link href={item.href} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
}
