import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/content/caseStudies";
import styles from "./CaseStudyCard.module.css";

export default function CaseStudyCard({ caseStudy, compact = false }: { caseStudy: CaseStudy; compact?: boolean }) {
  return (
    <Link href={`/case-studies/${caseStudy.slug}`} className={styles.card}>
      <div className={`${styles.imageWrap} ${compact ? styles.imageCompact : styles.image}`}>
        <Image
          src={caseStudy.listImage.src}
          alt={caseStudy.listImage.alt}
          fill
          sizes="(min-width: 900px) 25vw, 100vw"
        />
        {!compact && <span className={styles.tag}>{caseStudy.industryLabel}</span>}
      </div>
      <div className={`${styles.body} ${compact ? styles.bodyCompact : ""}`}>
        {compact && <div className={`${styles.tag} ${styles.tagCompact}`}>{caseStudy.industryLabel}</div>}
        <h3>{caseStudy.title}</h3>
        {!compact && <p>{caseStudy.listSummary}</p>}
        <span className={styles.link}>Read case study</span>
      </div>
    </Link>
  );
}
