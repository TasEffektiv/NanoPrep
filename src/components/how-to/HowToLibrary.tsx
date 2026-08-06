"use client";

import { useMemo, useState } from "react";
import type { HowToCategory } from "@/content/howToGuides";
import HowToGuideCard from "./HowToGuideCard";
import styles from "./HowToLibrary.module.css";

export default function HowToLibrary({ categories }: { categories: HowToCategory[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return categories;

    return categories
      .map((category) => ({
        ...category,
        guides: category.guides.filter(
          (guide) => guide.title.toLowerCase().includes(q) || guide.description.toLowerCase().includes(q),
        ),
      }))
      .filter((category) => category.guides.length > 0);
  }, [categories, query]);

  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <h2>Applications</h2>
        <div className={styles.search}>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search…"
            aria-label="Search how-to guides"
          />
          <span className={styles.searchIcon} aria-hidden="true">
            <svg viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="7" />
              <path d="M21 21l-4.3-4.3" />
            </svg>
          </span>
        </div>
      </div>

      {filtered.length === 0 ? (
        <p className={styles.empty}>No guides match “{query}”.</p>
      ) : (
        filtered.map((category) => (
          <div key={category.name} className={styles.category}>
            <h3>{category.name}</h3>
            <div className={styles.grid}>
              {category.guides.map((guide) => (
                <HowToGuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
        ))
      )}
    </div>
  );
}
