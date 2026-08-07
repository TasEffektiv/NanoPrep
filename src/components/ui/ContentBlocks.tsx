import type { ContentBlock } from "@/lib/types";
import Image from "next/image";
import styles from "./ContentBlocks.module.css";
import CtaPanel from "./CtaPanel";

function renderHighlight(text: string, lead?: string) {
  return (
    <div className={styles.highlightBox}>
      {lead && <strong>{lead} </strong>}
      {text}
    </div>
  );
}

export default function ContentBlocks({
  blocks,
  cta,
}: {
  blocks: ContentBlock[];
  cta?: { heading: string; text: string; href: string; label: string };
}) {
  return (
    <div className={styles.content}>
      {blocks.map((block, index) => {
        const key = `${block.type}-${index}`;

        switch (block.type) {
          case "heading":
            return (
              <div
                key={key}
                className={
                  block.text === "A new class of coating"
                    ? `${styles.headingBlock} ${styles.headingBlockRight}`
                    : styles.headingBlock
                }
              >
                {block.text === "A new class of coating" && (
                  <div className={styles.headingLogo}>
                    <Image
                      src="/images/Products/nanoprep-logo-tag.png"
                      alt="NanoPrep logo"
                      width={120}
                      height={65}
                    />
                  </div>
                )}
                <h2>{block.text}</h2>
              </div>
            );

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
            return <div key={key}>{renderHighlight(block.text, block.lead)}</div>;

          case "benefitGrid":
            return (
              <div key={key} className={styles.benefitGrid}>
                {block.items.map((item) => (
                  <div key={item.title} className={`${styles.benefitCard} ${item.fullWidth ? styles.fullWidth : ""}`}>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                ))}
              </div>
            );

          case "steps":
            return (
              <div key={key} className={styles.steps}>
                {block.items.map((item, stepIndex) => (
                  <div key={item.title} className={styles.step}>
                    <div className={styles.stepNum}>{stepIndex + 1}</div>
                    <div className={styles.stepBody}>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            );

          case "docLinks":
            return (
              <div key={key} className={styles.docLinks}>
                {block.items.map((item) => (
                  <a key={item.href} href={item.href} target="_blank" rel="noopener noreferrer" className={styles.docLink}>
                    <div className={styles.docLinkIcon} aria-hidden="true">
                      📄
                    </div>
                    <div className={styles.docLinkText}>
                      <strong>{item.label}</strong>
                      {item.sub}
                    </div>
                  </a>
                ))}
              </div>
            );

          case "videoGroup":
            return (
              <div key={key} className={styles.videoGroup}>
                <div className={styles.videoGroupHeader}>
                  <h3>{block.heading}</h3>
                </div>
                <div
                  className={styles.videoGrid}
                  style={{ gridTemplateColumns: `repeat(${block.videos.length}, 1fr)` }}
                >
                  {block.videos.map((video) => (
                    <div key={video.label} className={styles.videoTile}>
                      <div className={styles.videoPlayIcon} aria-hidden="true">
                        ▶
                      </div>
                      <span className={styles.videoLabel}>Video Placeholder</span>
                      <p>{video.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            );

          default:
            return null;
        }
      })}
      {cta && <CtaPanel heading={cta.heading} text={cta.text} href={cta.href} label={cta.label} />}
    </div>
  );
}
