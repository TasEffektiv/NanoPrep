"use client";

import { useEffect, useState } from "react";
import styles from "./VideoPreview.module.css";

const videos = [
  { id: "KIufIJzbkhs", title: "NanoPrep Application" },
  { id: "z_5tWCCmnxw", title: "Water Tank Corrosion Protection Without Blasting" },
  { id: "GfrV2POQJa4", title: "NanoPrep Rust Primer & Anticorrosive Industrial Coating" },
];

export default function VideoPreview() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[number] | null>(null);

  useEffect(() => {
    if (!activeVideo) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

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
            <button
              key={video.id}
              type="button"
              className={styles.card}
              onClick={() => setActiveVideo(video)}
              aria-label={`Play video: ${video.title}`}
            >
              <div className={styles.thumb}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} alt="" loading="lazy" />
                <div className={styles.overlay} />
                <span className={styles.playBadge} aria-hidden="true">
                  ▶
                </span>
              </div>
              <div className={styles.titleBar}>{video.title}</div>
            </button>
          ))}
        </div>
      </div>

      {activeVideo && (
        <div className={styles.modalBackdrop} onClick={() => setActiveVideo(null)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setActiveVideo(null)}
              aria-label="Close video"
            >
              ✕
            </button>
            <div className={styles.modalPlayer}>
              <iframe
                src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                title={activeVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
