import Image from "next/image";
import Link from "next/link";
import type { NewsItem } from "@/content/news";
import styles from "./FeaturedNewsCard.module.css";

export default function FeaturedNewsCard({ item }: { item: NewsItem }) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        {item.image && (
          <Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 900px) 50vw, 100vw" className={styles.cover} />
        )}
      </div>
      <div className={styles.body}>
        <span className={styles.tag}>{item.tag}</span>
        <h2>{item.title}</h2>
        <p>{item.excerpt}</p>
        <div className={styles.actions}>
          <Link href={item.href} className={styles.button}>
            Read full story
          </Link>
        </div>
      </div>
    </article>
  );
}
