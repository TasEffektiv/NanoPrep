import styles from "./WhySection.module.css";

const points = [
  {
    title: "No Abrasive Blasting Required",
    text: "Prepare rusted steel using a simple 3,500 psi pressure wash or power-tool cleaning, avoiding costly and time-consuming abrasive blasting.",
  },
  {
    title: "Reduced Protective Equipment Requirements",
    text: "The water-based, non-hazardous formulation allows for safer application without the heavy protective equipment associated with abrasive blasting.",
  },
  {
    title: "Chemically Bonds for Strong Adhesion",
    text: "NanoPrep reacts with iron and rust to form a stable iron phosphate layer, creating a high-strength base for compatible coatings.",
  },
  {
    title: "Fast Drying Saves Time",
    text: "With approximately two to three hours between coats at 20°C, NanoPrep helps accelerate coating work and reduce turnaround times.",
  },
  {
    title: "VOC-Free Formulation",
    text: "NanoPrep contains no volatile organic compounds, providing a more environmentally responsible surface-preparation solution.",
  },
  {
    title: "Safe and Simple to Apply",
    text: "This single-component, water-based product can be applied by brush, roller or spray to properly prepared damp or dry surfaces.",
  },
  {
    title: "Non-Flammable",
    text: "Its non-flammable formulation supports safer handling and application in industrial environments.",
  },
  {
    title: "Long Shelf Life",
    text: "The single-component formulation offers convenient storage without the mixing and limited working life associated with multi-part products.",
  },
  {
    title: "Compatible with Many Topcoats",
    text: "NanoPrep provides an effective primer for acrylics, water-based protective coatings, two-part epoxies, polyurea and other approved low-solvent coatings.",
  },
  {
    title: "Cost-Effective Surface Preparation",
    text: "NanoPrep eliminates the need for abrasive grit blasting, helping avoid the substantial costs of blasting equipment, scaffolding, encapsulation, protective gear and site clean-up.",
  },
];

export default function WhySection() {
  const leftPoints = points.slice(0, 5);
  const rightPoints = points.slice(5);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionTag}>Why NanoPrep</div>
        <h2 className={styles.heading}>The case for a different approach</h2>
        <div className={styles.grid}>
          <div className={styles.points}>
            <div className={styles.column}>
              {leftPoints.map((point, index) => (
                <div key={point.title} className={styles.point}>
                  <div className={styles.pointNum} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className={styles.pointContent}>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.column}>
              {rightPoints.map((point, index) => (
                <div key={point.title} className={styles.point}>
                  <div className={styles.pointNum} aria-hidden="true">
                    {String(index + 6).padStart(2, "0")}
                  </div>
                  <div className={styles.pointContent}>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.visual}>
            <div className={styles.quote}>
              <div className={styles.quoteMark} aria-hidden="true">
                &quot;
              </div>
              <p>
                We can treat corroded steel in areas where grit blasting would never have been an option — safely,
                quickly, and without a waste disposal problem.
              </p>
              <div className={styles.quoteSource}>
                Rezitech field application — Oil &amp; Gas sector, Pipework Corrosion Protection
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
