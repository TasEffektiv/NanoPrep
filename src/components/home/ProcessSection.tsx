import Image from "next/image";
import styles from "./ProcessSection.module.css";

const steps = [
  {
    title: "Step 1 — Surface Preparation",
    text: "NanoPrep can be applied to tightly rusted, damp surfaces following a simple low-pressure wash, eliminating the need for abrasive blasting in many applications.",
    icon: "/images/icons/water-blaster.svg",
  },
  {
    title: "Step 2 — NanoPrep Application",
    text: "NanoPrep is easily applied by spray, brush or roller, providing flexible, efficient coverage across a wide range of surfaces.",
    icon: "/images/icons/spray-gun.svg",
  },
  {
    title: "Step 3 — Topcoat Application",
    text: "NanoPrep delivers outstanding adhesion with leading low- and non-solvent topcoats, achieving up to 70–80% of grit-blasted adhesion performance at a fraction of the surface preparation cost.",
    icon: "/images/icons/paint-roller.svg",
  },
];

const specs = [
  { label: "Surface and surface condition", value: "Reacts and cross-links with rusted steel surfaces, clean steel, painted steel, aluminium, and/ or galvanised steel surfaces." },
  { label: "Application", value: "Mix NanoPrep thoroughly at low speed, then apply two to three coats by spray, brush or roller to a clean, tightly rusted surface that is damp but not wet." },
  { label: "Environmentally Friendly", value: "NanoPrep is non-hazardous, environmentally friendly and non-flammable, while eliminating the need for grit blasting and its associated environmental risks." },
  { label: "Faster Turnaround", value: "NanoPrep eliminates the need for abrasive blasting, scaffolding and encapsulation, significantly reducing preparation time and costs. Its fast-drying formulation supports quicker project turnaround and, in many applications, allows work to proceed safely alongside other activities without requiring a shutdown." },
];

export default function ProcessSection() {
  return (
    <section className={styles.section} id="product">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <div className={styles.sectionTag}>How It Works</div>
            <h2 className={styles.heading}>The NanoPrep system</h2>
          </div>
          <p className={styles.intro}>
            NanoPrep chemically reacts with iron and rust to form an iron phosphate layer while creating a strong nano bond with other metal and painted surfaces for excellent adhesion and flexibility.
          </p>
        </div>

        <div className={styles.cards}>
          {steps.map((step) => (
            <div key={step.title} className={styles.card}>
              <div className={styles.cardIcon}>
                <Image src={step.icon} alt="" width={28} height={28} aria-hidden="true" />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.specs}>
          {specs.map((spec) => (
            <div key={spec.label} className={styles.spec}>
              <div className={styles.specLabel}>{spec.label}</div>
              <div className={styles.specValue}>{spec.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
