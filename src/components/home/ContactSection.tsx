import Link from "next/link";
import styles from "./ContactSection.module.css";

export default function ContactSection() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        <div className={styles.intro}>
          <div className={styles.sectionTag}>Get In Touch</div>
          <h2>Any Questions?</h2>
          <p>
            Our team can help with product questions, site assessments or a free product trial — get in touch and
            we&apos;ll get back to you as soon as possible.
          </p>
          <Link href="/contact" className={styles.cta}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
