"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./Slideshow.module.css";

export interface SlideImage {
  src: string;
  alt: string;
}

const DEFAULT_INTERVAL_MS = 7000;

export default function Slideshow({
  images,
  intervalMs = DEFAULT_INTERVAL_MS,
  compact = false,
}: {
  images: SlideImage[];
  intervalMs?: number;
  compact?: boolean;
}) {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function startTimer() {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, intervalMs);
  }

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images, intervalMs]);

  function goTo(next: number) {
    setIndex((next + images.length) % images.length);
    startTimer();
  }

  return (
    <>
      <div className={styles.slides} aria-hidden="true">
        {images.map((slide, i) => (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className={`${styles.slide} ${i === index ? styles.active : ""}`}
          />
        ))}
      </div>

      <div className={styles.overlay} aria-hidden="true" />

      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowPrev} ${compact ? styles.arrowCompact : ""}`}
        onClick={() => goTo(index - 1)}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        type="button"
        className={`${styles.arrow} ${styles.arrowNext} ${compact ? styles.arrowCompact : ""}`}
        onClick={() => goTo(index + 1)}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className={`${styles.dots} ${compact ? styles.dotsCompact : ""}`} role="tablist" aria-label="Image slides">
        {images.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Show slide ${i + 1} of ${images.length}`}
            className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </>
  );
}
