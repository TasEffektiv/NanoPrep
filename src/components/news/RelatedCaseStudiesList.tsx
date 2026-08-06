import { getCaseStudy } from "@/content/caseStudies";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import styles from "./RelatedCaseStudiesList.module.css";

export default function RelatedCaseStudiesList({
  slugs,
  eyebrow,
  heading,
}: {
  slugs: string[];
  eyebrow: string;
  heading: string;
}) {
  const items = slugs.map((slug) => getCaseStudy(slug)).filter((cs): cs is NonNullable<typeof cs> => Boolean(cs));

  if (items.length === 0) return null;

  return (
    <section className={styles.related}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h2>{heading}</h2>
        <div className={styles.grid}>
          {items.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
