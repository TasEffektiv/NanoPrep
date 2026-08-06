"use client";

import { useState } from "react";
import styles from "./Testimonials.module.css";

/**
 * Only one testimonial had real content in the source (the markup showed
 * 3 dots but a single hardcoded quote, so 2 of the 3 slides were dead —
 * clicking the arrows toggled a dot with no slide behind it). Modelled as
 * a data array so the currently-real quote works correctly, and clicking
 * through will "just work" once more testimonials are added here.
 */
const testimonials = [
  {
    initials: "BPS",
    quote:"You have a really good product which minimises cost and helps environmentally from two pack and solvent paints used in painting of metals. Normally a job this size and being 10mm black steel would require sand blasting – we followed your specifications and used our 13.5 Honda Pressure Washer and it prepared perfect surfaces for your paint to be applied. Your water based NanoPrep product exceeded my expectations and was very easy to use with a change of a heavier filter and a 19 tip we were able to apply the three coats of undercoat, two top coats with our 20 year old Wagner spraying equipment to achieve a brilliant finish.",
    quote2:"I will always be happy to use your product and recommend to others.",
    name: "Bay Painting Services South Australia",
    role: "",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const testimonial = testimonials[current];

  function move(direction: number) {
    setCurrent((prev) => (prev + direction + testimonials.length) % testimonials.length);
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTag}>What our clients say</div>
        <h2 className={styles.heading}>Applicator Testimonial</h2>

        <div className={styles.wrap}>
          {testimonials.length > 1 && (
            <button type="button" className={styles.arrow} onClick={() => move(-1)} aria-label="Previous testimonial">
              ←
            </button>
          )}

          <div className={styles.track}>
            <div className={styles.card}>
              <div className={styles.quoteMark} aria-hidden="true">
                &ldquo;
              </div>
              <p className={styles.text}>{testimonial.quote}</p>
              <p className={styles.text}>{testimonial.quote2}</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{testimonial.initials}</div>
                <div>
                  <div className={styles.authorName}>{testimonial.name}</div>
                  <div className={styles.authorRole}>{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>

          {testimonials.length > 1 && (
            <button type="button" className={styles.arrow} onClick={() => move(1)} aria-label="Next testimonial">
              →
            </button>
          )}
        </div>

        {testimonials.length > 1 && (
          <div className={styles.dots}>
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                className={`${styles.dot} ${index === current ? styles.dotActive : ""}`}
                aria-label={`Show testimonial ${index + 1}`}
                aria-current={index === current}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
