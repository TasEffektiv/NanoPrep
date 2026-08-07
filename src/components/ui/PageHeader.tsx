import Image from "next/image";
import HeroBreadcrumbs from "@/components/layout/HeroBreadcrumbs";
import type { Crumb } from "@/components/layout/Breadcrumbs";
import styles from "./PageHeader.module.css";

export default function PageHeader({
  eyebrow,
  title,
  highlight,
  sub,
  breadcrumbs,
  image,
}: {
  eyebrow: string;
  title: string;
  highlight: string;
  sub: string;
  breadcrumbs?: Crumb[];
  image?: { src: string; alt: string };
}) {
  return (
    <div className={`${styles.header} ${image ? styles.headerPhoto : ""}`}>
      {image && <Image src={image.src} alt={image.alt} fill priority sizes="100vw" className={styles.bgImage} />}
      <div className={styles.overlay} />
      <div className={styles.inner}>
        {breadcrumbs && <HeroBreadcrumbs items={breadcrumbs} />}
        <div className={styles.eyebrow}>{eyebrow}</div>
        <h1>
          {title} <span>{highlight}</span>
        </h1>
        <p className={styles.sub}>{sub}</p>
      </div>
    </div>
  );
}
