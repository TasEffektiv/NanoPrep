import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumbs from "@/components/layout/Breadcrumbs";
import ArticleBlocks from "@/components/case-studies/ArticleBlocks";
import NewsMetaStrip from "@/components/news/NewsMetaStrip";
import RelatedCaseStudiesList from "@/components/news/RelatedCaseStudiesList";
import { newsItems, getNewsItem } from "@/content/news";
import { buildMetadata } from "@/lib/metadata";
import styles from "./news-article.module.css";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return newsItems.filter((item) => item.blocks).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item || !item.blocks) return {};

  return buildMetadata({
    title: item.metaTitle ?? item.title,
    description: item.metaDescription ?? item.excerpt,
    path: `/news/${item.slug}`,
  });
}

export default async function NewsArticlePage({ params }: { params: Params }) {
  const { slug } = await params;
  const item = getNewsItem(slug);
  if (!item || !item.blocks) notFound();

  return (
    <>
      <Breadcrumbs
        items={[{ label: "Home", href: "/" }, { label: "News", href: "/news" }, { label: item.title }]}
      />

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={`${styles.tag} ${item.tagVariant === "media" ? styles.tagMedia : styles.tagCategory}`}>
            {item.tag}
          </span>
          <h1 className={styles.title}>{item.title}</h1>
          {item.byline && (
            <p className={styles.byline}>
              Published in the <strong>{item.byline.publication}</strong> — {item.byline.edition}
            </p>
          )}
        </div>
      </header>

      {item.metaFields && <NewsMetaStrip fields={item.metaFields} />}

      <div className={styles.contentWrap}>
        <p className={styles.lead}>{item.excerpt}</p>

        <ArticleBlocks blocks={item.blocks} />

        <Link href="/news" className={styles.backLink}>
          Back to all news
        </Link>
      </div>

      {item.relatedCaseStudies && (
        <RelatedCaseStudiesList slugs={item.relatedCaseStudies} eyebrow="More News" heading="Related updates" />
      )}
    </>
  );
}
