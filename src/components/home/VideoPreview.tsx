"use client";

import { useState } from "react";
import styles from "./VideoPreview.module.css";

const videos = [
  { id: "KIufIJzbkhs", title: "NanoPrep Application" },
  { id: "z_5tWCCmnxw", title: "Water Tank Corrosion Protection Without Blasting" },
  { id: "GfrV2POQJa4", title: "NanoPrep Rust Primer & Anticorrosive Industrial Coating" },
];

export default function VideoPreview() {
  const [playingId, setPlayingId] = useState<string | null>(null);

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
            <div key={video.id} className={styles.card}>
              <div className={styles.thumb}>
                {playingId === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <button
                    type="button"
                    className={styles.playButton}
                    onClick={() => setPlayingId(video.id)}
                    aria-label={`Play video: ${video.title}`}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
                    <div className={styles.overlay} />
                    <span className={styles.playBadge} aria-hidden="true">
                      ▶
                    </span>
                  </button>
                )}
              </div>
              <div className={styles.titleBar}>{video.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
