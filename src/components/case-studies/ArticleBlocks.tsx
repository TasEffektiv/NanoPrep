import Image from "next/image";
import type { ArticleBlock } from "@/lib/types";
import styles from "./ArticleBlocks.module.css";
import ImageGallery from "./ImageGallery";
import { InlineVideo, FeaturedVideo } from "./VideoPlaceholder";

export default function ArticleBlocks({ blocks }: { blocks: ArticleBlock[] }) {
  return (
    <article className={styles.article}>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "heading":
            return <h2 key={key}>{block.text}</h2>;

          case "paragraph":
            return <p key={key}>{block.text}</p>;

          case "list":
            return (
              <ul key={key}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );

          case "highlight":
            return (
              <div key={key} className={styles.highlight}>
                {block.text}
              </div>
            );

          case "articleImage":
            return (
              <figure key={key} className={styles.articleFigure}>
                <div className={styles.articleImg}>
                  <Image src={block.src} alt={block.alt} fill sizes="(min-width: 1000px) 1000px, 100vw" />
                </div>
                {block.caption && <figcaption className={styles.articleCaption}>{block.caption}</figcaption>}
              </figure>
            );

          case "photoGallery":
            return (
              <figure key={key} className={styles.photoGalleryFigure}>
                <div className={styles.photoGallery}>
                  {block.images.map((image) => (
                    <div key={image.src} className={styles.photoGalleryItem}>
                      <Image src={image.src} alt={image.alt} fill sizes="(min-width: 700px) 33vw, 100vw" />
                    </div>
                  ))}
                </div>
                <figcaption className={styles.articleCaption}>{block.caption}</figcaption>
              </figure>
            );

          case "imageGroup":
            return (
              <ImageGallery
                key={key}
                variant={block.variant}
                badgeLabel={block.badgeLabel}
                heading={block.heading}
                images={block.images}
                showCaptions={block.showCaptions}
              />
            );

          case "inlineVideo":
            return (
              <InlineVideo
                key={key}
                heading={block.heading}
                label={block.label}
                caption={block.caption}
                videoId={block.videoId}
              />
            );

          case "featuredVideo":
            return <FeaturedVideo key={key} label={block.label} caption={block.caption} videoId={block.videoId} />;

          case "testimonial":
            return (
              <blockquote key={key} className={styles.testimonial}>
                <span className={styles.testimonialQuoteMark} aria-hidden="true">
                  “
                </span>
                <p className={styles.testimonialQuote}>{block.quote}</p>
                <cite className={styles.testimonialAttribution}>{block.attribution}</cite>
              </blockquote>
            );

          case "specTable":
            return (
              <table key={key} className={styles.specTable}>
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Detail</th>
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.label}>
                      <td>{row.label}</td>
                      <td>{row.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );

          default:
            return null;
        }
      })}
    </article>
  );
}
