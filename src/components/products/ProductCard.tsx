import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/content/products";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <div className={styles.image}>
        {product.cardImage ? (
          <Image
            src={product.cardImage.src}
            alt={product.cardImage.alt}
            fill
            sizes="(min-width: 800px) 380px, 100vw"
            className={styles.cardImage}
          />
        ) : (
          <div className={styles.imagePlaceholder}>
            <span>Image Placeholder</span>
          </div>
        )}
        <span className={styles.tag}>{product.cardTag}</span>
      </div>
      <div className={styles.body}>
        <h2>{product.cardName}</h2>
        <div className={styles.subtitle}>{product.cardSubtitle}</div>
        <p>{product.cardSummary}</p>
        <ul className={styles.featureList}>
          {product.cardFeatures.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        {product.cardHref ? (
          <a href={product.cardHref} target="_blank" rel="noopener noreferrer" className={styles.cta}>
            Read More
          </a>
        ) : (
          <Link href={`/products/${product.slug}`} className={styles.cta}>
            Read More
          </Link>
        )}
      </div>
    </div>
  );
}
