import Image from "next/image";
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
  variant: "before" | "during" | "after" | "plain";
  badgeLabel?: string;
  heading?: string;
  images: GalleryImage[];
}) {
  return (
    <div className={`${styles.group} ${variantClass[variant as keyof typeof variantClass] ?? ""}`}>
      {(badgeLabel || heading) && (
        <div className={styles.header}>
          {badgeLabel && (
            <span className={`${styles.badge} ${badgeClass[variant as keyof typeof badgeClass] ?? ""}`}>
              {badgeLabel}
            </span>
          )}
          {heading && <h3>{heading}</h3>}
        </div>
      )}
      <div className={styles.gallery}>
        {images.map((image, index) => (
          <div key={`${image.caption}-${index}`} className={styles.item}>
            {image.src ? (
              <div className={styles.imageWrap}>
                <Image
                  src={image.src}
                  alt={image.alt ?? image.caption}
                  fill
                  sizes="(min-width: 700px) 33vw, 100vw"
                  className={styles.image}
                />
              </div>
            ) : (
              <div className={styles.placeholder}>
                <span>Image Placeholder</span>
              </div>
            )}
            <div className={styles.caption}>{image.caption}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
