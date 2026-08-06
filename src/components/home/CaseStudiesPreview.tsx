import Link from "next/link";
import { getCaseStudy } from "@/content/caseStudies";
import styles from "./CaseStudiesPreview.module.css";

/**
 * The homepage preview used its own, shorter blurb for each case study —
 * distinct from the summary shown on the /case-studies index card for the
 * same slug. Both pieces of original copy are preserved verbatim rather
 * than collapsed into one shared string.
 */
const preview = [
  {
    slug: "pylon",
    summary:
      "NanoPrep applied to jetty pylons in a sensitive marine environment — corrosion protection without blasting or hazardous waste in a tidal zone.",
  },
  {
    slug: "fuel-tank",
    summary:
      "Large fuel storage tanks treated with NanoPrep where grit blasting was cost prohibitive and operationally impractical — delivered at a fraction of conventional cost.",
  },
  {
    slug: "pipework",
    summary:
      "Corroded pipework treated in-situ using NanoPrep — no isolation, no blast equipment, no waste disposal. Application completed during normal operations.",
  },
  {
    slug: "crane",
    summary:
      "Heavily corroded overhead crane restored using NanoPrep and a compatible topcoat system — applied without shutdown, in an active production environment.",
  },
];

export default function CaseStudiesPreview() {
  const items = preview.map(({ slug, summary }) => {
    const caseStudy = getCaseStudy(slug);
    return caseStudy ? { caseStudy, summary } : null;
  });

  return (
    <section className={styles.section} id="case-studies">
      <div className={styles.container}>
        <div className={styles.sectionTag}>Case Studies</div>
        <div className={styles.header}>
          <h2 className={styles.heading}>NanoPrep in the field</h2>
          <Link href="/case-studies" className={styles.viewAll}>
            View all case studies
          </Link>
        </div>
        <div className={styles.grid}>
          {items.map((item) => {
            if (!item) return null;
            const { caseStudy, summary } = item;
            return (
              <div key={caseStudy.slug} className={styles.card}>
                <div className={styles.image}>
                  <span className={styles.placeholderText}>Image Placeholder</span>
                  <span className={styles.tag}>{caseStudy.industryLabel}</span>
                </div>
                <div className={styles.content}>
                  <h3>{caseStudy.title}</h3>
                  <p>{summary}</p>
                  <Link href={`/case-studies/${caseStudy.slug}`} className={styles.link}>
                    Read case study
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
