import styles from "./VideoPlaceholder.module.css";

export function InlineVideo({ heading, label, caption }: { heading: string; label: string; caption: string }) {
  return (
    <div className={styles.inlineGroup}>
      <div className={styles.inlineHeader}>
        <span className={styles.inlineBadge}>Video</span>
        <h3>{heading}</h3>
      </div>
      <div className={styles.inlineBody}>
        <div className={styles.playIcon} aria-hidden="true">
          ▶
        </div>
        <span>{label}</span>
        <p>{caption}</p>
      </div>
    </div>
  );
}

export function FeaturedVideo({ label, caption }: { label: string; caption: string }) {
  return (
    <div className={styles.featuredPanel}>
      <div className={styles.featuredLabel}>
        <span className={styles.featuredBadge}>▶ Watch</span>
        <span>{label}</span>
      </div>
      <div className={styles.featuredBody}>
        <div className={styles.featuredPlayIcon} aria-hidden="true">
          ▶
        </div>
        <span>YouTube Video Placeholder</span>
        <p>{caption}</p>
      </div>
    </div>
  );
}
