import Link from "next/link";
import NewsCard from "@/components/news/NewsCard";
import { newsItems } from "@/content/news";
import styles from "./NewsPreview.module.css";

export default function NewsPreview() {
  const items = newsItems.slice(0, 3);

  return (
    <section className={styles.section} id="news">
      <div className={styles.container}>
        <div className={styles.sectionTag}>News &amp; Updates</div>
        <div className={styles.header}>
          <h2 className={styles.heading}>Latest from NanoPrep</h2>
          <Link href="/news" className={styles.viewAll}>
            View all news
          </Link>
        </div>
        <div className={styles.grid}>
          {items.map((item) => (
            <NewsCard key={item.slug} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
