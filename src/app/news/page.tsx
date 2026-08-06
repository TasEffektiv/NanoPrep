import PageHeader from "@/components/ui/PageHeader";
import FeaturedNewsCard from "@/components/news/FeaturedNewsCard";
import NewsCard from "@/components/news/NewsCard";
import { newsItems } from "@/content/news";
import { buildMetadata } from "@/lib/metadata";
import styles from "./news.module.css";

export const metadata = buildMetadata({
  title: "News & Updates",
  description: "The latest news, media coverage and project updates from NanoPrep and Rezitech.",
  path: "/news",
});

export default function NewsPage() {
  const [featured, ...rest] = newsItems;

  return (
    <>
      <PageHeader
        eyebrow="News & Updates"
        title="News from"
        highlight="NanoPrep"
        sub="Project features, industry coverage and the latest from the field — corrosion protection without abrasive blasting."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "News" }]}
      />

      {featured && (
        <section className={styles.featuredSection}>
          <div className={styles.inner}>
            <div className={styles.sectionEyebrow}>Featured Story</div>
            <FeaturedNewsCard item={featured} />
          </div>
        </section>
      )}

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.sectionEyebrow}>More News</div>
          <h2 className={styles.heading}>Recent updates &amp; project spotlights</h2>
          <div className={styles.grid}>
            {rest.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
