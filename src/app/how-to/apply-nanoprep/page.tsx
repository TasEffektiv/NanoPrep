import PageHeader from "@/components/ui/PageHeader";
import CtaPanel from "@/components/ui/CtaPanel";
import { buildMetadata } from "@/lib/metadata";
import styles from "./apply-nanoprep.module.css";

export const metadata = buildMetadata({
  title: "How To Apply NanoPrep — Step-by-Step Guide",
  description:
    "A complete, step-by-step guide to applying NanoPrep rust primer and anticorrosive coating over tight rust — surface preparation, mixing, coat application, cure times and compatible topcoats.",
  path: "/how-to/apply-nanoprep",
});

const steps = [
  {
    id: "step-1",
    title: "Clean the substrate",
    text: "Wash the surface thoroughly to remove oils, salts, dirt and other contaminants. In heavily contaminated areas, a hot detergent wash may be required.",
  },
  {
    id: "step-2",
    title: "Prepare the surface",
    text: "Remove loose rust, scale and poorly bonded coatings. NanoPrep performs best when applied over firmly adhered or “tight” rust. Prepare the surface using water blasting at approximately 3500 psi or mechanical wire brushing.",
  },
  {
    id: "step-3",
    title: "Check the surface condition",
    text: "NanoPrep may be applied to a damp substrate, but the surface must not be visibly wet. Excess water can dilute the product and reduce its effectiveness.",
  },
  {
    id: "step-4",
    title: "Mix the NanoPrep",
    text: "Thoroughly mix the product using a high-torque drill at low speed. Avoid high-speed mixing, as this may introduce air bubbles. If bubbles are present, pass the product through a fine paint filter before application.",
  },
  {
    id: "step-5",
    title: "Apply the first coat",
    text: "Apply the first coat directly to the prepared substrate using a brush, roller or suitable spray equipment. The product will penetrate the tight rust and react with the iron oxide to form a stabilised iron phosphate layer. The first coat may appear mottled or uneven in colour.",
  },
  {
    id: "step-6",
    title: "Allow the first coat to cure",
    text: "Leave the first coat to cure for approximately 2–3 hours at an ambient temperature of 20°C. Cure times may vary depending on temperature, humidity and site conditions.",
  },
  {
    id: "step-7",
    title: "Apply the second coat",
    text: "Apply the second coat directly over the stabilised first coat. Ensure complete coverage and aim for a consistent, uniform finish.",
  },
  {
    id: "step-8",
    title: "Assess whether a third coat is required",
    text: "Inspect the surface after the second coat. Apply a third coat only where heavy rust was originally present or where a uniform finish has not been achieved.",
  },
  {
    id: "step-9",
    title: "Allow the final coat to cure",
    text: "Allow the final NanoPrep coat to cure for approximately 2–3 hours at 20°C before applying the selected compatible topcoat.",
  },
  {
    id: "step-10",
    title: "Apply the finishing coating",
    text: "Apply the approved water-based or low-solvent steel protection coating in accordance with the coating manufacturer’s application instructions. NanoPrep is compatible with many acrylic coatings, water-based steel protection paints, two-pack epoxies, polyurea coatings and coatings containing no more than 16% solvent. Do not use solvent-based or silicone-based paints.",
  },
];

const tocLabels: Record<string, string> = {
  "step-6": "Cure the first coat",
  "step-8": "Assess a third coat",
  "step-9": "Cure the final coat",
  "step-10": "Apply the topcoat",
};

const quickFacts = [
  { label: "Product", value: "NanoPrep rust primer & anticorrosive coating" },
  { label: "Surface prep", value: "Water blast ~3500 psi or wire brush over tight rust" },
  { label: "Coats", value: "2 coats standard; 3rd where heavy rust remains" },
  { label: "Cure per coat", value: "~2–3 hrs at 20°C" },
  { label: "Application", value: "Brush, roller or spray" },
];

export default function ApplyNanoPrepPage() {
  return (
    <>
      <PageHeader
        eyebrow="Step-by-step application procedure"
        title="How To Apply"
        highlight="NanoPrep"
        sub="A complete field guide to applying the NanoPrep system over tight rust — from surface preparation through mixing, coat build-up and cure times, to the compatible finishing topcoat."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "How To Resources", href: "/how-to" },
          { label: "How to Apply NanoPrep" },
        ]}
      />

      <div className={styles.wrap}>
        <div className={styles.main}>
          <p className={styles.intro}>
            NanoPrep is a surface-tolerant rust primer and anticorrosive coating that penetrates firmly adhered rust
            and reacts with the iron oxide to form a stabilised iron phosphate layer — no abrasive blasting to bright
            metal required.
          </p>
          <p className={styles.introSub}>
            Follow the steps below in order. Cure times assume an ambient temperature of 20°C and will vary with
            temperature, humidity and site conditions.
          </p>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <div key={step.id} id={step.id} className={styles.step}>
                <div className={styles.stepNum}>{index + 1}</div>
                <div className={styles.stepBody}>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>

          <CtaPanel
            heading="Talk to us about your project"
            text="For site-specific advice on surface preparation, coat build and topcoat selection, our team can help you specify the right NanoPrep system."
            href="/contact"
            label="Contact Us"
          />
        </div>

        <aside className={styles.sidebar}>
          <div className={styles.facts}>
            <h2>At a glance</h2>
            <dl className={styles.factsList}>
              {quickFacts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
            <div className={styles.toc}>
              <h3>The 10 steps</h3>
              <ol>
                {steps.map((step, index) => (
                  <li key={step.id}>
                    <a href={`#${step.id}`}>
                      <span className={styles.tocNum}>{index + 1}</span>
                      {tocLabels[step.id] ?? step.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
