import Image from "next/image";
import Link from "next/link";
import type { HowToGuide } from "@/content/howToGuides";
import styles from "./HowToGuideCard.module.css";

export default function HowToGuideCard({ guide }: { guide: HowToGuide }) {
  return (
    <Link href={guide.href} className={styles.card}>
      <div className={styles.image}>
        <Image src={guide.image.src} alt={guide.image.alt} fill sizes="(min-width: 900px) 25vw, 100vw" />
        <span className={styles.tag}>Step-by-Step Guide</span>
      </div>
      <div className={styles.content}>
        <h3>{guide.title}</h3>
        <p>{guide.description}</p>
        <span className={styles.link}>View Guide</span>
      </div>
    </Link>
  );
}
