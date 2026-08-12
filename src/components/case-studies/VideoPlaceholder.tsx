"use client";

import { useState } from "react";
import styles from "./VideoPlaceholder.module.css";

export function InlineVideo({
  heading,
  label,
  caption,
  videoId,
}: {
  heading: string;
  label: string;
  caption: string;
  videoId?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.inlineGroup}>
      <div className={styles.inlineHeader}>
        <span className={styles.inlineBadge}>Video</span>
        <h3>{heading}</h3>
      </div>
      {videoId ? (
        playing ? (
          <div className={styles.inlinePlayer}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            type="button"
            className={styles.inlineThumb}
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${label}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" />
            <div className={styles.inlineThumbOverlay} />
            <span className={styles.playIcon} aria-hidden="true">
              ▶
            </span>
            <span className={styles.inlineThumbCaption}>{caption}</span>
          </button>
        )
      ) : (
        <div className={styles.inlineBody}>
          <div className={styles.playIcon} aria-hidden="true">
            ▶
          </div>
          <span>{label}</span>
          <p>{caption}</p>
        </div>
      )}
    </div>
  );
}

export function FeaturedVideo({ label, caption, videoId }: { label: string; caption: string; videoId?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={styles.featuredPanel}>
      <div className={styles.featuredLabel}>
        <span className={styles.featuredBadge}>▶ Watch</span>
        <span>{label}</span>
      </div>
      {videoId ? (
        playing ? (
          <div className={styles.featuredPlayer}>
            <iframe
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
              title={label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <button
            type="button"
            className={styles.featuredThumb}
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${label}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" />
            <div className={styles.inlineThumbOverlay} />
            <span className={styles.featuredPlayIcon} aria-hidden="true">
              ▶
            </span>
          </button>
        )
      ) : (
        <div className={styles.featuredBody}>
          <div className={styles.featuredPlayIcon} aria-hidden="true">
            ▶
          </div>
          <span>YouTube Video Placeholder</span>
          <p>{caption}</p>
        </div>
      )}
    </div>
  );
}
