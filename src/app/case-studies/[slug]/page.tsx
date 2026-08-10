import { notFound } from "next/navigation";
import DetailHero from "@/components/ui/DetailHero";
import MetaStrip from "@/components/case-studies/MetaStrip";
import ArticleBlocks from "@/components/case-studies/ArticleBlocks";
import ContactPanel from "@/components/case-studies/ContactPanel";
import RelatedCaseStudies from "@/components/case-studies/RelatedCaseStudies";
import { caseStudies, getCaseStudy } from "@/content/caseStudies";
import { buildMetadata } from "@/lib/metadata";
import styles from "./case-study.module.css";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return caseStudies.map((caseStudy) => ({ slug: caseStudy.slug }));
}

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  return buildMetadata({
    title: caseStudy.metaTitle,
    description: caseStudy.metaDescription,
    path: `/case-studies/${caseStudy.slug}`,
  });
}

export default async function CaseStudyDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  return (
    <>
      <DetailHero
        tag={caseStudy.industryLabel}
        title={caseStudy.title}
        sub={caseStudy.heroSub}
        image={caseStudy.heroImage}
        downloadHref={caseStudy.downloadHref}
        downloadLabel={caseStudy.downloadLabel}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Case Studies", href: "/case-studies" },
          { label: caseStudy.breadcrumbLabel },
        ]}
        style={{ minHeight: 300, height: 300 }}
      />
      <MetaStrip meta={caseStudy.meta} />

      <div className={styles.contentWrap}>
        <ArticleBlocks blocks={caseStudy.blocks} />
        {caseStudy.showContactPanel !== false ? (
          <aside className={styles.sidebar}>
            <ContactPanel />
          </aside>
        ) : null}
      </div>

      <RelatedCaseStudies currentSlug={caseStudy.slug} />
    </>
  );
}
