import type { GalleryImage } from "@/lib/types";
import styles from "./ImageGallery.module.css";

const variantClass = {
  before: styles.before,
  during: styles.during,
  after: styles.after,
} as const;

const badgeClass = {
  before: styles.badgeBefore,
  during: styles.badgeDuring,
  after: styles.badgeAfter,
} as const;

export default function ImageGallery({
  variant,
  badgeLabel,
  heading,
  images,
}: {
  variant: "before" | "during" | "after";
  badgeLabel: string;
  heading: string;
  images: GalleryImage[];
}) {
  return (
    <div className={`${styles.group} ${variantClass[variant]}`}>
      <div className={styles.header}>
        <span className={`${styles.badge} ${badgeClass[variant]}`}>{badgeLabel}</span>
        <h3>{heading}</h3>
      </div>
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={`${image.caption}-${index}`} className={styles.item}>
            <div className={styles.placeholder}>
              <span>Image Placeholder</span>
            </div>
            <div className={styles.caption}>{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
