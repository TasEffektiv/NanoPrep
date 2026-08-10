"use client";

import { useEffect, useState } from "react";
import styles from "./VideoPlaceholder.module.css";

function VideoModal({ videoId, title, onClose }: { videoId: string; title: string; onClose: () => void }) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button type="button" className={styles.modalClose} onClick={onClose} aria-label="Close video">
          ✕
        </button>
        <div className={styles.modalPlayer}>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

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
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.inlineGroup}>
      <div className={styles.inlineHeader}>
        <span className={styles.inlineBadge}>Video</span>
        <h3>{heading}</h3>
      </div>
      {videoId ? (
        <>
          <button
            type="button"
            className={styles.inlineThumb}
            onClick={() => setOpen(true)}
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
          {open && <VideoModal videoId={videoId} title={label} onClose={() => setOpen(false)} />}
        </>
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
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.featuredPanel}>
      <div className={styles.featuredLabel}>
        <span className={styles.featuredBadge}>▶ Watch</span>
        <span>{label}</span>
      </div>
      {videoId ? (
        <>
          <button
            type="button"
            className={styles.featuredThumb}
            onClick={() => setOpen(true)}
            aria-label={`Play video: ${label}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" />
            <div className={styles.inlineThumbOverlay} />
            <span className={styles.featuredPlayIcon} aria-hidden="true">
              ▶
            </span>
          </button>
          {open && <VideoModal videoId={videoId} title={label} onClose={() => setOpen(false)} />}
        </>
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
