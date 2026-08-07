import Button from "@/components/ui/Button";
import styles from "./HomeHero.module.css";

export default function HomeHero() {
  return (
    <section className={styles.hero}>
      <video
        className={styles.bgVideo}
        src="/videos/herovideo.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      <div className={styles.overlay} />
      <div className={styles.inner}>
        <div className={styles.tag}>Corrosion Protection Technology</div>
        <h1>
          Corrosion Protection Without
          <br />
          the <em>Blasting.</em>
        </h1>
        <p className={styles.sub}>
          NanoPrep is an environmentally friendly rust primer and anticorrosive industrial coating that reacts with rusted, painted and exposed steel. No grit blasting required!
        </p>
        <div className={styles.buttons}>
          <Button href="/contact" variant="primary">
            Request a Free Trial ↗
          </Button>
          <Button href="/#product" variant="secondary">
            Learn How It Works
          </Button>
        </div>
      </div>
    </section>
  );
}
