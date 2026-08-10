import type { CaseStudyMeta } from "@/content/caseStudies";
import styles from "./MetaStrip.module.css";

export default function MetaStrip({ meta }: { meta: CaseStudyMeta }) {
  return (
    <div className={styles.strip}>
      <div className={styles.inner}>
        <div className={styles.fields}>
          <div className={styles.field}>
            <strong>Industry:</strong> <span>{meta.industry}</span>
          </div>
          <div className={styles.field}>
            <strong>Application:</strong> <span>{meta.application}</span>
          </div>
          <div className={styles.field}>
            <strong>Products:</strong> <span>{meta.products}</span>
          </div>
          <div className={styles.field}>
            <strong>Customer Location:</strong> <span>{meta.location}</span>
          </div>
          <div className={styles.field}>
            <strong>Application Date:</strong> <span>{meta.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
