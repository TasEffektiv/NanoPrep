import Link from "next/link";
import styles from "./CompatPanel.module.css";

export default function CompatPanel() {
  return (
    <div className={styles.panel}>
      <div className={styles.text}>
        <h3>Complete Asset Repair and Protection</h3>
        <p>
          For this section change the main text to:
          Complete Asset Repair and Protection
          Restore damaged surfaces, simplify preparation and protect assets against corrosion and weathering. NanoPrep, R230 TopCoat and Belzona 1111 work together to provide a complete system, from structural repair and surface preparation through to a durable, UV-resistant finish.
        </p>
      </div>
      <Link href="/case-studies" className={styles.link}>
        View Case Studies
      </Link>
    </div>
  );
}
