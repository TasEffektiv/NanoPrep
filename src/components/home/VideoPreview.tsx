import styles from "./VideoPreview.module.css";

/**
 * These 3 videos have embedding disabled by the channel owner (YouTube
 * error 153 in an <iframe> player), confirmed by testing an embed — so
 * cards link out to youtube.com instead of embedding a player that would
 * show that error to every visitor. Thumbnails are pulled from YouTube's
 * own img CDN, which works regardless of the embedding restriction.
 */
const videos = [
  { id: "KIufIJzbkhs", title: "NanoPrep Application" },
  { id: "z_5tWCCmnxw", title: "Water Tank Corrosion Protection Without Blasting" },
  { id: "GfrV2POQJa4", title: "NanoPrep Rust Primer & Anticorrosive Industrial Coating" },
];

export default function VideoPreview() {
  return (
    <section className={styles.section} id="video">
      <div className={styles.container}>
        <div className={styles.sectionTag}>Video</div>
        <h2 className={styles.heading}>NanoPrep in action</h2>
        <p className={styles.sub}>
          Real applications on real assets — NanoPrep protecting corroded steel on-site, without abrasive blasting.
        </p>
        <div className={styles.grid}>
          {videos.map((video) => (
            <a
              key={video.id}
              href={`https://www.youtube.com/watch?v=${video.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.thumb}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
                <div className={styles.overlay} />
                <span className={styles.watchLabel}>
                  <span className={styles.playIcon} aria-hidden="true">
                    ▶
                  </span>
                  Watch on YouTube
                </span>
                <span className={styles.playBadge} aria-hidden="true">
                  ▶
                </span>
              </div>
              <div className={styles.titleBar}>{video.title}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
