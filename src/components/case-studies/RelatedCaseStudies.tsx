import { getRelatedCaseStudies } from "@/content/caseStudies";
import CaseStudyCard from "./CaseStudyCard";
import styles from "./RelatedCaseStudies.module.css";

export default function RelatedCaseStudies({ currentSlug }: { currentSlug: string }) {
  const related = getRelatedCaseStudies(currentSlug);

  return (
    <section className={styles.related}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>More Case Studies</div>
        <h2>Related applications</h2>
        <div className={styles.grid}>
          {related.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} compact />
          ))}
        </div>
      </div>
    </section>
  );
}
