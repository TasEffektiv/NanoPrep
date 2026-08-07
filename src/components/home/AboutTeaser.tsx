import Image from "next/image";
import Link from "next/link";
import Slideshow from "@/components/ui/Slideshow";
import { aboutSlides } from "@/content/aboutSlides";
import styles from "./AboutTeaser.module.css";

export default function AboutTeaser() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <div className={styles.sectionTag}>About NanoPrep</div>
            <h2 className={styles.heading}>Rust Primer & Anticorrosive Industrial Coating</h2>
            <p>
              <strong>NanoPrep's</strong> surface preparation technology allows industrial coating application in areas where it is difficult, cost prohibitive or impossible to perform surface preparation by abrasive grit blasting.

              
            </p>
            <p>
              NanoPrep is a one component, waterborne, acrylic co-polymer composition that reacts and cross-links with rusted steel surfaces, clean steel, painted steel, aluminium, and/or galvanised steel surfaces creating superior anticorrosive properties.
            </p>
            <p>
              Upon application of the product to the substrate, “Nanofusion” takes place enabling deep penetration into the rusted substrate creating a stable, high bond strength base to which non solvent based or low solvent content top coats can be applied.
            </p>
            <Link href="/about" className={styles.link}>
              Read the full story
            </Link>
          </div>
          <div className={styles.visual}>
            <div className={styles.imageBlock}>
              <Slideshow images={aboutSlides} compact />
            </div>
            <div className={styles.badge}>
              <span>Aus</span>
              <span>Made</span>
            </div>
          </div>
        </div>

        <div className={styles.processPhoto}>
          <Image
            src="/images/NanoPrep Just Pressure Wash and Coat 2.png"
            alt="NanoPrep surface preparation — pressure washing rusted steel, then spray-coating with NanoPrep"
            width={1024}
            height={205}
          />
        </div>
      </div>
    </section>
  );
}
