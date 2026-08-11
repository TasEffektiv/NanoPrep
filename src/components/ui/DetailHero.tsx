import Image from "next/image";
import HeroBreadcrumbs from "@/components/layout/HeroBreadcrumbs";
import type { Crumb } from "@/components/layout/Breadcrumbs";
import styles from "./DetailHero.module.css";

export default function DetailHero({
  tag,
  title,
  sub,
  image,
  tagImage,
  breadcrumbs,
  compact,
  downloadHref,
  downloadLabel,
}: {
  tag: string;
  title: string;
  sub?: string;
  image?: { src: string; alt: string };
  tagImage?: { src: string; alt: string; width: number; height: number };
  breadcrumbs?: Crumb[];
  compact?: boolean;
  downloadHref?: string;
  downloadLabel?: string;
}) {
  return (
    <div
      className={`${styles.hero} ${image ? styles.heroPhoto : ""} ${compact ? styles.compact : ""}`}
    >
      {image ? (
        <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className={styles.bgImage} />
      ) : (
        <div className={styles.placeholder}>
          <span>[ Background Image Placeholder — Full Width Hero Image ]</span>
        </div>
      )}

      {tagImage && (
        <div className={styles.tagImage}>
          <Image src={tagImage.src} alt={tagImage.alt} width={tagImage.width} height={tagImage.height} />
        </div>
      )}

      <div className={`${styles.overlay} ${image ? styles.overlayPhoto : ""}`}>
        <div className={styles.content}>
          {breadcrumbs && <HeroBreadcrumbs items={breadcrumbs} />}
          <span className={styles.tag}>{tag}</span>
          <h1>{title}</h1>
          {sub && <p className={styles.sub}>{sub}</p>}
          {downloadHref && (
            <a
              className={styles.downloadLink}
              href={downloadHref}
              target="_blank"
              rel="noopener noreferrer"
              download="Case-Study-NanoPrep-Pipework-Corrosion-Protection.pdf"
            >
              {downloadLabel ?? "Download Case Study"}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
