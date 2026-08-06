"use client";

import { useMemo, useState } from "react";
import type { CaseStudy } from "@/content/caseStudies";
import CaseStudyCard from "./CaseStudyCard";
import styles from "./IndustryFilter.module.css";

const filters = [
  { key: "all", label: "All" },
  { key: "oil-gas", label: "Oil & Gas" },
  { key: "power", label: "Power" },
  { key: "marine", label: "Marine" },
  { key: "pulp-paper", label: "Pulp & Paper" },
  { key: "water", label: "Water" },
  { key: "manufacturing", label: "Manufacturing" },
  { key: "sugar", label: "Sugar" },
];

export default function IndustryFilter({ caseStudies }: { caseStudies: CaseStudy[] }) {
  const [active, setActive] = useState("all");

  const visible = useMemo(
    () => (active === "all" ? caseStudies : caseStudies.filter((cs) => cs.industryKey === active)),
    [active, caseStudies],
  );

  return (
    <>
      <div className={styles.filterBar}>
        <div className={styles.filterBarInner}>
          <span className={styles.filterLabel}>Filter by industry:</span>
          {filters.map((filter) => (
            <button
              key={filter.key}
              type="button"
              className={`${styles.filterBtn} ${active === filter.key ? styles.filterBtnActive : ""}`}
              aria-pressed={active === filter.key}
              onClick={() => setActive(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.inner}>
          {/* Visually hidden — the page's own h1 already says "Case Studies";
              this just keeps heading levels from skipping straight from h1
              to each card's h3. */}
          <h2 className="visually-hidden">All case studies</h2>
          {visible.length === 0 ? (
            <p className={styles.empty}>No case studies found for this industry yet.</p>
          ) : (
            <div className={styles.grid}>
              {visible.map((caseStudy) => (
                <CaseStudyCard key={caseStudy.slug} caseStudy={caseStudy} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
