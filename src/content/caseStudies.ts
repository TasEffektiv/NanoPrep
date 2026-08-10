import type { ArticleBlock } from "@/lib/types";

export interface CaseStudyMeta {
  industry: string;
  application: string;
  products: string;
  location: string;
  date: string;
}

export interface CaseStudy {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbLabel: string;
  industryKey: string;
  industryLabel: string;
  title: string;
  heroSub?: string;
  heroImage?: { src: string; alt: string };
  listImage: { src: string; alt: string };
  listSummary: string;
  meta: CaseStudyMeta;
  showContactPanel?: boolean;
  downloadHref?: string;
  downloadLabel?: string;
  blocks: ArticleBlock[];
}

const enquiryOptions = [
  "Mining",
  "Oil & Gas",
  "Marine",
  "Water & Wastewater",
  "Power Generation",
  "Pulp & Paper",
  "Manufacturing",
  "Other",
];

export { enquiryOptions };

export const caseStudies: CaseStudy[] = [
  {
    slug: "pipework-corrosion-protection-without-blasting",
    metaTitle: "Pipework Corrosion Protection Without Blasting — NanoPrep Case Study",
    metaDescription:
      "An offshore Oil & Gas facility used NanoPrep to remediate corroded pipework without abrasive blasting or operational shutdown.",
    breadcrumbLabel: "Pipework Corrosion Protection Without Blasting",
    industryKey: "oil-gas",
    industryLabel: "Oil & Gas",
    title: "Pipework Corrosion Protection Without Blasting",
    heroSub: "NanoPrep protects pipework without blasting",
    heroImage: {
      src: "/images/case-studies/pipework.webp",
      alt: "Corroded offshore pipework coated with NanoPrep",
    },
    listImage: {
      src: "/images/case-studies/pipework.webp",
      alt: "Pipework Corrosion Protection",
    },
    listSummary:
      "An offshore Oil & Gas facility required coating remedial work on pipework in areas where abrasive blasting was not possible. NanoPrep delivered a compliant solution without operational shutdown.",
    meta: {
      industry: "Oil & Gas",
      application: "Offshore Pipework Corrosion Protection",
      products: "NanoPrep, PPG PSX 700 Topcoat",
      location: "New Zealand",
      date: "Jan 2019",
    },
    showContactPanel: false,
    downloadHref: "https://rezitech.com.au/wp-content/uploads/2025/08/Case-Study-NanoPrep-Pipework-Corrosion-Protection.pdf",
    downloadLabel: "Download Case Study",
    blocks: [
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "An offshore Oil & Gas facility required coating remedial work carried out on pipework located in areas where it was not possible to perform surface preparation by abrasive blasting due to wet and icy surfaces, and the costs associated with shutting down operations." },
      {
        type: "imageGroup",
        variant: "plain",
        images: [
          {
            caption: "Condition of pipework before coating remedial work",
            src: "https://rezitech.com.au/wp-content/uploads/2025/06/Condition-of-pipework-before-coating-remedial-work.jpg",
            alt: "Condition of pipework before coating remedial work",
          },
          {
            caption: "Corroded pipework on offshore Oil and Gas facility",
            src: "https://rezitech.com.au/wp-content/uploads/2025/06/Corroded-pipework-on-offshore-Oil-and-Gas-facility.jpg",
            alt: "Corroded pipework on offshore Oil and Gas facility",
          },
          {
            caption: "Corroded pipes in offshore oil facility",
            src: "https://rezitech.com.au/wp-content/uploads/2025/06/Corroded-pipes-in-offshore-oil-facility.jpg",
            alt: "Corroded pipes in offshore oil facility",
          },
        ],
      },
      { type: "heading", text: "The Application" },
      { type: "paragraph", text: "NanoPrep was selected as the preferred surface preparation solution as it provided an effective, low cost alternative to abrasive blasting in the form of a simple low pressure power wash (3500 psi) combined with power tool cleaning. In addition, it is suitable for a variety of topcoats and can be applied to rusted, damp or dry surfaces. After application, a final layer of PPG PSX 700 was applied." },
      {
        type: "imageGroup",
        variant: "plain",
        heading: "Two coats of NanoPrep applied by brush at 75μm",
        images: [
          {
            caption: "Corroded pipe flange coated with NanoPrep",
            src: "https://rezitech.com.au/wp-content/uploads/2025/06/Corroded-pipe-flange-coated-with-NanoPrep.jpg",
            alt: "Corroded pipe flange coated with NanoPrep",
          },
          {
            caption: "Corroded pipes coated with NanoPrep",
            src: "https://rezitech.com.au/wp-content/uploads/2025/06/Corroded-pipes-coated-with-NanoPrep.jpg",
            alt: "Corroded pipes coated with NanoPrep",
          },
          {
            caption: "Corroded pipes in offshore oil facility coated with NanoPrep",
            src: "https://rezitech.com.au/wp-content/uploads/2025/06/Corroded-pipes-in-offshore-oil-facility-coated-with-NanoPrep-scaled.jpg",
            alt: "Corroded pipes in offshore oil facility coated with NanoPrep",
          },
        ],
      },
      {
        type: "imageGroup",
        variant: "plain",
        heading: "One coat of PPG PSX 700 Topcoat applied at 75μm",
        images: [
          {
            caption: "Corroded pipes coated with NanoPrep and PPG PSX 700",
            src: "https://rezitech.com.au/wp-content/uploads/2025/06/Corroded-pipes-coated-with-NanoPrep-and-PPG-PSX-700.jpg",
            alt: "Corroded pipes coated with NanoPrep and PPG PSX 700",
          },
          {
            caption: "Corroded pipework at offshore Oil and Gas facility coated with NanoPrep and PPG PSX 700",
            src: "https://rezitech.com.au/wp-content/uploads/2025/06/Corroded-pipework-at-offshore-Oil-and-Gas-facility-coated-with-Nanoprep-and-PPG-PSX-700.jpg",
            alt: "Corroded pipework at offshore Oil and Gas facility coated with NanoPrep and PPG PSX 700",
          },
          {
            caption: "Corroded pipework in offshore Oil and Gas facility coated with NanoPrep and PPG PSX 700",
            src: "https://rezitech.com.au/wp-content/uploads/2025/06/Corroded-pipework-in-offshore-Oil-and-Gas-facility-coated-with-Nanoprep-and-PPG-PSX-700.jpg",
            alt: "Corroded pipework in offshore Oil and Gas facility coated with NanoPrep and PPG PSX 700",
          },
        ],
      },
      { type: "heading", text: "The Outcome" },
      { type: "paragraph", text: "Using NanoPrep for surface preparation proved to be a highly effective solution, delivering a rapid turnaround by eliminating the need for abrasive blasting. This allowed the customer to ensure long-term protection of the pipework without operational shutdowns whilst saving time and money. Six years on, the coating remains in very good condition." },
      { type: "heading", text: "Project Specification" },
      {
        type: "specTable",
        rows: [
          { label: "Industry", value: "Oil & Gas — Offshore" },
          { label: "Application", value: "Offshore pipework — confined areas" },
          { label: "Surface condition", value: "Corroded carbon steel — wet and icy surfaces" },
          { label: "Surface preparation", value: "Low-pressure power wash (3500 psi) + power tool clean" },
          { label: "NanoPrep", value: "Two coats applied by brush at 75μm" },
          { label: "Topcoat", value: "PPG PSX 700 — one coat at 75μm" },
          { label: "Key requirement", value: "No blast cleaning, no operational shutdown" },
        ],
      },
    ],
  },
  {
    slug: "fuel-tank-corrosion-protection-without-blasting",
    metaTitle: "Fuel Tank Corrosion Protection Without Blasting — NanoPrep Case Study",
    metaDescription:
      "A 110,000-litre above-ground carbon-steel diesel tank in Queensland, required a high-performance anticorrosive coating system.",
    breadcrumbLabel: "Fuel Tank Corrosion Protection Without Blasting",
    industryKey: "oil-gas",
    industryLabel: "Oil & Gas",
    title: "Fuel Tank Corrosion Protection Without Blasting",
    heroSub: "NanoPrep protects fuel tanks without abrasive blasting",
    heroImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2025/10/Completed-application-of-NanoPrep-and-topcoat-on-fuel-tanks.jpg",
      alt: "Completed application of NanoPrep and topcoat on fuel tanks",
    },
    listImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2025/10/Fuel-tanks-coated-with-NanoPrep-rust-primer-and-top-coat.jpg",
      alt: "Fuel Tank Corrosion Protection",
    },
    listSummary:
      "A 110,000-litre above-ground carbon-steel diesel tank in Queensland required a high-performance anticorrosive coating system without abrasive blasting.",
    meta: {
      industry: "Oil & Gas",
      application: "Fuel Tank Corrosion Protection",
      products: "NanoPrep",
      location: "Qld, Australia",
      date: "Oct 2025",
    },
    showContactPanel: false,
    downloadHref: "https://rezitech.com.au/wp-content/uploads/2025/10/Case-Study-NanoPrep-Fuel-Tank-Corrosion-Protection.pdf",
    downloadLabel: "Download Case Study",
    blocks: [
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "A 110,000-litre above-ground carbon-steel diesel tank in Queensland, required a high-performance anticorrosive coating system. Year round rain and condensation creates a high risk of under-film and crevice corrosion, especially at saddle supports and tank-to-concrete interfaces. In addition, the coastal environment adds airborne chlorides which accelerates corrosion, while continuous sunlight and elevated surface temperatures demand a UV-stable, heat-tolerant topcoat to prevent premature coating degradation. Given the limited clearance beneath the tank and the presence of adjoining critical infrastructure, abrasive blasting for surface preparation was not feasible; therefore, an alternative method was required." },
      {
        type: "imageGroup",
        variant: "plain",
        images: [
          { caption: "Fuel tanks protected with NanoPrep", src: "https://rezitech.com.au/wp-content/uploads/2025/10/Fuel-tanks-protected-with-NanoPrep.jpg", alt: "Fuel tanks protected with NanoPrep" },
        ],
      },
      { type: "heading", text: "The Application" },
      { type: "paragraph", text: "NanoPrep was chosen as the preferred surface-preparation method since it offers an effective, long lasting, low-cost alternative to abrasive blasting using a simple low-pressure power wash (3,500 psi) combined with power-tool cleaning. NanoPrep’s unique technology allows it to penetrate deep into existing painted surfaces for high adhesion and acts as a tie coat for many compatible topcoats." },
      {
        type: "imageGroup",
        variant: "plain",
        images: [
          { caption: "Fuel tank being power washed in preparation of NanoPrep application", src: "https://rezitech.com.au/wp-content/uploads/2025/10/Fuel-tank-being-power-washed-in-preparation-of-NanoPrep-application.jpg", alt: "Fuel tank being power washed in preparation of NanoPrep application" },
          { caption: "Fuel tank being coated with NanoPrep by roller", src: "https://rezitech.com.au/wp-content/uploads/2025/10/Fuel-tank-being-coated-with-NanoPrep-by-roller.jpg", alt: "Fuel tank being coated with NanoPrep by roller" },
          { caption: "NanoPrep being applied under fuel tank", src: "https://rezitech.com.au/wp-content/uploads/2025/10/Nanoprep-being-applied-under-fuel-tank.jpg", alt: "NanoPrep being applied under fuel tank" },
        ],
      },
      { type: "paragraph", text: "NanoPrep eliminates the need for abrasive blasting, enabling surface preparation via a simple low-pressure wash. It applies easily by roller, brush, or airless spray and is well suited to tight or difficult-to-access areas." },
      {
        type: "imageGroup",
        variant: "plain",
        images: [
          { caption: "Mid application of NanoPrep to fuel tanks", src: "https://rezitech.com.au/wp-content/uploads/2025/10/Mid-application-of-NanoPrep-to-fuel-tanks.jpg", alt: "Mid application of NanoPrep to fuel tanks" },
          { caption: "First coat of NanoPrep being applied to fuel tank", src: "https://rezitech.com.au/wp-content/uploads/2025/10/First-coat-of-NanoPrep-being-applied-to-fuel-tank.jpg", alt: "First coat of NanoPrep being applied to fuel tank" },
          { caption: "Fuel tanks coated with NanoPrep Anticorrosive coating", src: "https://rezitech.com.au/wp-content/uploads/2025/10/Fuel-tanks-coated-with-NanoPrep-Anticorrosive-coating.jpg", alt: "Fuel tanks coated with NanoPrep Anticorrosive coating" },
        ],
      },
      { type: "paragraph", text: "Upon application of NanoPrep to the substrate, Nanofusion takes place enabling deep penetration into the rusted substrate to create a stable, high-bond strength base suitable for non-solvent or low-solvent top coats." },
      { type: "heading", text: "The Outcome" },
      { type: "paragraph", text: "NanoPrep enabled effective surface preparation using low-pressure washing and power-tool cleaning, avoiding the excessive cost and downtime of abrasive blasting." },
      { type: "paragraph", text: "The coating system delivered strong adhesion and robust corrosion resistance at saddle supports and tank-to-concrete interfaces, and a compatible UV-stable, heat-tolerant topcoat suited to Queensland conditions was successfully applied." },
      { type: "paragraph", text: "The outcome is extended service life, protected fuel quality, and simpler future maintenance." },
      {
        type: "imageGroup",
        variant: "plain",
        images: [
          { caption: "Fuel tanks coated with NanoPrep and top coat", src: "https://rezitech.com.au/wp-content/uploads/2025/10/Fuel-tanks-coated-with-NanoPrep-and-top-coat.jpg", alt: "Fuel tanks coated with NanoPrep and top coat" },
        ],
      },
      { type: "heading", text: "Project Specification" },
      {
        type: "specTable",
        rows: [
          { label: "Industry", value: "Oil & Gas" },
          { label: "Application", value: "Above-ground diesel storage tank — external" },
          { label: "Tank capacity", value: "110,000 litres" },
          { label: "Material", value: "Carbon steel" },
          { label: "Surface preparation", value: "Low-pressure power wash (3,500 psi) + power tool clean" },
          { label: "NanoPrep system", value: "NanoPrep rust primer + compatible topcoat" },
          { label: "Location", value: "Queensland, Australia" },
        ],
      },
    ],
  },
  {
    slug: "external-coating-of-ash-hopper",
    metaTitle: "External Coating of Ash Hopper — NanoPrep Case Study",
    metaDescription:
      "A coal-fired power station used NanoPrep to recoat an ash hopper's external casing without abrasive blasting during a shutdown window.",
    breadcrumbLabel: "External Coating of Ash Hopper",
    industryKey: "power",
    industryLabel: "Power",
    title: "External Coating of Ash Hopper",
    heroSub: "NanoPrep provides surface preparation without blasting",
    heroImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2025/01/NanoPrep-being-applied-to-ash-hopper.jpg",
      alt: "NanoPrep being applied to ash hopper",
    },
    listImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2025/01/Completed-application-of-top-coat-on-externals-of-ash-hopper.jpg",
      alt: "Ash Hopper Coating",
    },
    listSummary:
      "A power station experienced degrading coating on an ash hopper. NanoPrep provided a fast, safe and effective external coating solution without blasting.",
    meta: {
      industry: "Power",
      application: "External Coating on Ash Hopper",
      products: "NanoPrep, Jotun",
      location: "NSW, Australia",
      date: "Nov 2024",
    },
    showContactPanel: false,
    downloadHref: "https://rezitech.com.au/wp-content/uploads/2025/01/Case-Study-External-Coating-of-Ash-Hopper.pdf",
    downloadLabel: "Download Case Study",
    blocks: [
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "A coal-fired power station experienced an issue with the existing coating on an ash hopper degrading over years in service. This degradation had exposed the underlying steel, leading to accelerated external corrosion on the ash hopper’s casing." },
      { type: "paragraph", text: "To address this, the customer required a new external coating to protect the ash hopper from further corrosion. Abrasive blasting was not an option for surface preparation due to the close proximity of other workers and the customer requiring a fast turnaround in order to complete the work during a major shutdown period." },
      { type: "heading", text: "The Application" },
      { type: "paragraph", text: "NanoPrep was recommended as an alternative form of surface preparation since it did not require abrasive blasting or removal of the existing paint system that was still in good condition. The application was completed by the Rezitech Services onsite team." },
      {
        type: "inlineVideo",
        heading: "NanoPrep Application",
        label: "NanoPrep Application",
        caption: "NanoPrep Application — Rezitech Services",
        videoId: "KIufIJzbkhs",
      },
      {
        type: "imageGroup",
        variant: "plain",
        showCaptions: true,
        images: [
          { caption: "Ash hopper existing condition", src: "https://rezitech.com.au/wp-content/uploads/2025/01/Ash-hopper-existing-condition.jpg", alt: "Ash hopper existing condition" },
          { caption: "Pressure washing the ash hopper", src: "https://rezitech.com.au/wp-content/uploads/2025/01/Pressure-washing-the-ash-hopper.jpg", alt: "Pressure washing the ash hopper" },
          { caption: "Spraying NanoPrep", src: "https://rezitech.com.au/wp-content/uploads/2025/01/Spraying-NanoPrep-onto-ash-hopper.jpg", alt: "Spraying NanoPrep onto ash hopper" },
          { caption: "Two coats of NanoPrep applied", src: "https://rezitech.com.au/wp-content/uploads/2025/01/Two-coats-of-NanoPrep-applied-to-ash-hopper.jpg", alt: "Two coats of NanoPrep applied to ash hopper" },
          { caption: "Spraying of the top coat", src: "https://rezitech.com.au/wp-content/uploads/2025/01/Spraying-of-an-external-top-coat-on-ash-hopper.jpg", alt: "Spraying of an external top coat on ash hopper" },
          { caption: "Completed application – Externals of the ash hopper", src: "https://rezitech.com.au/wp-content/uploads/2025/01/Completed-application-of-top-coat-on-externals-of-ash-hopper.jpg", alt: "Completed application of top coat on externals of ash hopper" },
        ],
      },
      { type: "heading", text: "The Outcome" },
      { type: "paragraph", text: "The use of NanoPrep for surface preparation proved to be an excellent solution, enabling a quick turnaround by eliminating the need for abrasive blasting. NanoPrep not only saved a significant amount of time but also allowed the work to proceed safely alongside other workers working on the externals of the casing, which would have been impossible if abrasive blasting was used." },
      { type: "heading", text: "Project Specification" },
      { type: "specTable", rows: [ { label: "Industry", value: "Power Generation" }, { label: "Application", value: "External Coating on Ash Hopper" }, { label: "Surface condition", value: "Degraded coating, exposed corroded steel" }, { label: "Surface preparation", value: "Pressure wash — no blasting" }, { label: "Products", value: "NanoPrep, Jotun" }, { label: "Location", value: "NSW, Australia" }, { label: "Application date", value: "Nov 2024" }, { label: "Key requirement", value: "Fast turnaround during shutdown, no blasting near workers" } ] },
    ],
  },
  {
    slug: "water-tank-corrosion-protection",
    metaTitle: "Water Tank Corrosion Protection — NanoPrep Case Study",
    metaDescription:
      "A power plant’s domestic water tank required corrosion repairs and a protective coating without surface preparation by abrasive blasting.",
    breadcrumbLabel: "Water Tank Corrosion Protection",
    industryKey: "power",
    industryLabel: "Power",
    title: "Water Tank Corrosion Protection",
    heroSub: "External tank & steel support repair and coating with Belzona & NanoPrep",
    heroImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2026/05/Power-station-water-tank-corrosion-protection.jpg",
      alt: "Power station water tank corrosion protection",
    },
    listImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2026/05/Corroded-water-tank-roof-repaired-and-protected-with-NanoPrep.jpg",
      alt: "Water Tank Corrosion Protection",
    },
    listSummary:
      "A power plant’s domestic water tank exhibited severe external corrosion and required structural repairs and a long-term protective coating system without abrasive blasting.",
    meta: {
      industry: "Power",
      application: "Water Tank Corrosion Repair & Protection",
      products: "NanoPrep, R230 TopCoat, Belzona 1111",
      location: "NSW, Australia",
      date: "Dec 2025",
    },
    showContactPanel: false,
    downloadHref: "https://rezitech.com.au/wp-content/uploads/2026/05/Case-Study-Power-Station-Water-Tank-Corrosion-Protection.pdf",
    downloadLabel: "Download Case Study",
    blocks: [
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "A power plant’s domestic water tank exhibited severe external corrosion, requiring structural repairs and the application of a long-term protective coating system. Due to the tank’s continuous exposure to UV radiation, it also required a UV-stable, heat-tolerant topcoat capable of preventing premature coating degradation." },
      { type: "paragraph", text: "Abrasive blasting was not a viable surface preparation method due to the high costs associated with containment, encapsulation, and the removal of existing lead-based paint coatings." },
      { type: "heading", text: "The Application" },
      {
        type: "inlineVideo",
        heading: "Water Tank Corrosion Protection Without Blasting",
        label: "Water Tank Corrosion Protection Without Blasting",
        caption: "Water Tank Corrosion Protection Without Blasting — Rezitech Services",
        videoId: "z_5tWCCmnxw",
      },
      { type: "paragraph", text: "NanoPrep was selected as the preferred surface preparation method as it provided an effective and cost-efficient alternative to abrasive blasting. Surface preparation was completed using a combination of low-pressure power washing (3500 psi) and power tool cleaning, eliminating the need for costly containment and lead paint removal procedures." },
      { type: "paragraph", text: "Before coating work commenced, several structural repairs were required due to severe corrosion damage. The tank underside had extensive pitting, while some of the steel column supports had deteriorated to the point where sections of steel were completely missing." },
      { type: "paragraph", text: "Belzona 1111 (Super Metal) was used to repair the pitted areas on the tank underside, rebuild lost steel sections, and cold bond reinforcement plates onto the damaged steel supports, restoring structural integrity without the need for hot work." },
      { type: "paragraph", text: "Once the repairs had fully cured, the steel supports and surrounding areas were coated with two coats of NanoPrep, followed by two coats of R230 TopCoat." },
      { type: "paragraph", text: "The tank sides and roof were also protected using NanoPrep and R230 TopCoat. Again, surface preparation required only high-pressure water washing, eliminating the need for abrasive blasting. Brushes and rollers were used to stripe coat weld seams, edges, and difficult-to-access areas prior to spray application." },
      { type: "paragraph", text: "Two coats of NanoPrep and two coats of R230 TopCoat were then applied by airless spray, providing long-term corrosion and UV protection. Both products proved highly user-friendly due to their single-pack formulation, allowing for efficient and straightforward application." },
      {
        type: "imageGroup",
        variant: "plain",
        showCaptions: true,
        images: [
          { caption: "Water tank underside showing corrosion and pitting damage", src: "https://rezitech.com.au/wp-content/uploads/2026/05/Water-tank-underside-pitting-caused-by-corrosion.jpg", alt: "Water tank underside pitting caused by corrosion" },
          { caption: "Belzona 1111 was used to repair pitting and reinforce corroded areas", src: "https://rezitech.com.au/wp-content/uploads/2026/05/Water-tank-underside-pitting-restored-with-Belzona-1111.jpg", alt: "Water tank underside pitting restored with Belzona 1111" },
          { caption: "Belzona 1111 used to repair corroded steel supports", src: "https://rezitech.com.au/wp-content/uploads/2026/05/Repairing-corroded-steel-with-Belzona-1111.jpg", alt: "Repairing corroded steel with Belzona 1111" },
          { caption: "Rebuilding of metal loss on steel supports using Belzona 1111", src: "https://rezitech.com.au/wp-content/uploads/2026/05/Repairing-of-steel-support-with-Belzona-1111.jpg", alt: "Repairing of steel support with Belzona 1111" },
          { caption: "Reinforcement plates cold bonded onto the damaged steel supports with Belzona 1111", src: "https://rezitech.com.au/wp-content/uploads/2026/05/Reinforcement-plate-cold-bonded-onto-damaged-steel-support.jpg", alt: "Reinforcement plate cold bonded onto damaged steel support" },
          { caption: "Corroded tank underside and steel supports before repairs", src: "https://rezitech.com.au/wp-content/uploads/2026/05/Corroded-water-tanks-steel-supports-in-need-of-repair-and-coating.jpg", alt: "Corroded water tank steel supports in need of repair and coating" },
          { caption: "Tank underside and steel supports after application of NanoPrep", src: "https://rezitech.com.au/wp-content/uploads/2026/05/water-tank-steel-supports-and-underside-repaired-and-coated-for-corrosion-protection.jpg", alt: "Water tank steel supports and underside repaired and coated for corrosion protection" },
          { caption: "Tank underside and steel supports after application of R230 TopCoat", src: "https://rezitech.com.au/wp-content/uploads/2026/05/water-tank-steel-supports-and-underside-repaired-and-coated-with-R230-TopCoat.jpg", alt: "Water tank steel supports and underside repaired and coated with R230 TopCoat" },
          { caption: "NanoPrep applied by roller to stripe coat weld seams, edges, and difficult-to-access areas", src: "https://rezitech.com.au/wp-content/uploads/2026/05/NanoPrep-being-applied-by-roller.jpg", alt: "NanoPrep being applied by roller" },
          { caption: "NanoPrep applied by airless spray", src: "https://rezitech.com.au/wp-content/uploads/2026/05/NanoPrep-being-applied-by-airless-spray.jpg", alt: "NanoPrep being applied by airless spray" },
          { caption: "Tank roof before application of NanoPrep", src: "https://rezitech.com.au/wp-content/uploads/2026/05/Corroded-water-tank-roof-in-need-of-repair.jpg", alt: "Corroded water tank roof in need of repair" },
          { caption: "Tank roof after application of NanoPrep", src: "https://rezitech.com.au/wp-content/uploads/2026/05/Water-tank-roof-protected-from-corrosion-with-NanoPrep.jpg", alt: "Water tank roof protected from corrosion with NanoPrep" },
          { caption: "Tank roof following application of R230 TopCoat, providing a durable, long-term corrosion and UV protection solution", src: "https://rezitech.com.au/wp-content/uploads/2026/05/Water-tank-roof-protected-from-corrosion-and-UV-with-R230-TopCoat.jpg", alt: "Water tank roof protected from corrosion and UV with R230 TopCoat" },
          { caption: "Corroded tank underside and steel supports after application of NanoPrep and R230 TopCoat", src: "https://rezitech.com.au/wp-content/uploads/2026/05/Water-tank-steel-support-and-underside-coated-and-protected-with-NanoPrep.jpg", alt: "Water tank steel support and underside coated and protected with NanoPrep" },
          { caption: "Completed domestic water tank following application of the NanoPrep coating system and R230 TopCoat, providing a durable, long-term corrosion and UV protection solution", src: "https://rezitech.com.au/wp-content/uploads/2026/05/Corroded-water-tank-repaired-and-protected-with-NanoPrep.jpg", alt: "Corroded water tank repaired and protected with NanoPrep" },
        ],
      },
      { type: "heading", text: "The Outcome" },
      { type: "paragraph", text: "The project was successfully completed in just five days, with severely corroded areas repaired using Belzona and protected with NanoPrep and R230 TopCoat." },
      { type: "paragraph", text: "By eliminating the need for abrasive blasting, the project avoided the high costs and delays associated with containment and lead paint removal, while still delivering a durable, long-term corrosion and UV protection system for the tank and supporting steelwork." },
      { type: "heading", text: "Project Specification" },
      { type: "specTable", rows: [ { label: "Industry", value: "Power Generation" }, { label: "Application", value: "Water Tank Corrosion Repair & Protection" }, { label: "Products", value: "NanoPrep, R230 TopCoat, Belzona 1111" }, { label: "Location", value: "NSW, Australia" }, { label: "Application date", value: "Dec 2025" }, { label: "Duration", value: "5 days" }, { label: "Surface preparation", value: "Low-pressure power wash (3,500 psi) + power tool clean — no blasting" }, { label: "Key requirement", value: "No blasting, lead paint encapsulation avoided, UV-stable topcoat" } ] },
    ],
  },
  {
    slug: "eco-friendly-solution-for-pylon-corrosion-protection",
    metaTitle: "Eco-Friendly Solution for Pylon Corrosion Protection — NanoPrep Case Study",
    metaDescription:
      "NanoPrep provided an eco-friendly surface preparation solution for corroded pier pylons in a tidal marine environment without blasting.",
    breadcrumbLabel: "Eco-Friendly Solution for Pylon Corrosion Protection",
    industryKey: "marine",
    industryLabel: "Marine",
    title: "Eco-Friendly Solution for Pylon Corrosion Protection",
    heroImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2024/12/Pier-pylons-before-commencement-of-corrosion-protection-work.jpg",
      alt: "Pier pylons before commencement of corrosion protection work",
    },
    listImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2024/12/Pier-pylons-before-commencement-of-corrosion-protection-work.jpg",
      alt: "Pylon Corrosion Protection",
    },
    listSummary:
      "NanoPrep provided a unique eco-friendly surface preparation and corrosion protection solution for pylons in a sensitive tidal marine environment.",
    meta: {
      industry: "Marine",
      application: "Protective coating on corroded and submerged pier pylons",
      products: "NanoPrep, Belzona 5831, Wattyl DTM985",
      location: "Far North Queensland, Australia",
      date: "July 2023",
    },
    showContactPanel: false,
    downloadHref: "https://rezitech.com.au/wp-content/uploads/2024/12/Case-Study-Corroded-and-Submerged-Pier-Pylons-NanoPrep-Belzona.pdf",
    downloadLabel: "Download Case Study",
    blocks: [
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "A common challenge in addressing corrosion on pier pylons or any structure near water is that you are unable to perform abrasive blasting. Most protective coatings rely on this type of surface preparation to ensure long-term performance in these harsh environments. This is particularly difficult in the tidal zone where the pylons will be submerged in water within hours." },
      { type: "paragraph", text: "Until now, there have been no products on the market that provide a good long-term solution to this problem. Introducing NanoPrep!" },
      { type: "heading", text: "The Application" },
      { type: "paragraph", text: "NanoPrep provides the perfect eco-friendly surface preparation solution. The product converts rust into an iron phosphate layer that adheres very strongly to the substrate through nanotechnology. The product also has high tolerance to chlorides due to its acidic base which neutralises the chlorides. This provides a high-quality surface preparation for appropriate coatings to be used. As the tide goes down, the pylons are pressure washed to remove loose rust scale. One coat of NanoPrep is applied and left for two hours to dry. Belzona 5831 moisture tolerant epoxy is then applied, which can cure underwater as the tide rises. The next day, a gentle pressure wash to remove surface chlorides and then a thin coat of NanoPrep is applied and left for two hours. The final coat of Wattyl DTM985 is then applied for UV and immersion protection." },
      {
        type: "imageGroup",
        variant: "before",
        badgeLabel: "Before",
        heading: "Pier pylons before and during treatment",
        images: [
          { caption: "Original Pylon before surface preparation", src: "https://rezitech.com.au/wp-content/uploads/2024/12/Original-Pylon-before-surface-preparation.jpg", alt: "Original Pylon before surface preparation" },
          { caption: "NanoPrep Coating on pier pylon", src: "https://rezitech.com.au/wp-content/uploads/2024/12/NanoPrep-Coating-on-pier-pylon.jpg", alt: "NanoPrep Coating on pier pylon" },
          { caption: "Belzona 5831 applied to pier pylon", src: "https://rezitech.com.au/wp-content/uploads/2024/12/Belzona-5831-applied-to-pier-pylon.jpg", alt: "Belzona 5831 applied to pier pylon" },
        ],
      },
      {
        type: "imageGroup",
        variant: "after",
        badgeLabel: "After",
        heading: "Final pylon coating system",
        images: [
          { caption: "Pylon coated in Wattyl DTM985", src: "https://rezitech.com.au/wp-content/uploads/2024/12/Pylon-coted-in-Wattyl-DTM985.jpg", alt: "Pylon coated in Wattyl DTM985" },
          { caption: "Jetty piles protected with NanoPrep", src: "https://rezitech.com.au/wp-content/uploads/2025/10/Jetty-piles-protected-with-NanoPrep.jpg", alt: "Jetty piles protected with NanoPrep" },
          { caption: "Pier pylons before commencement of corrosion protection work", src: "https://rezitech.com.au/wp-content/uploads/2024/12/Pier-pylons-before-commencement-of-corrosion-protection-work.jpg", alt: "Pier pylons before commencement of corrosion protection work" },
        ],
      },
      { type: "heading", text: "The Outcome" },
      { type: "paragraph", text: "This application was completed 18 months ago and is still in perfect condition." },
      { type: "heading", text: "Project Specification" },
      { type: "specTable", rows: [ { label: "Industry", value: "Marine" }, { label: "Application", value: "Protective coating on corroded and submerged pier pylons" }, { label: "Environment", value: "Sensitive marine tidal zone" }, { label: "Surface condition", value: "Corroded steel in aggressive tidal environment" }, { label: "Surface preparation", value: "Pressure wash and hand tool clean — no blasting" }, { label: "NanoPrep system", value: "NanoPrep rust primer + Belzona 5831 + Wattyl DTM985" }, { label: "Key requirement", value: "Non-hazardous, environmentally safe application" } ] },
    ],
  },
  {
    slug: "overhead-crane-restoration",
    metaTitle: "Overhead Crane Restoration — NanoPrep Case Study",
    metaDescription:
      "A heavily corroded overhead crane in an active pulp and paper facility was restored using NanoPrep without abrasive blasting or shutdown.",
    breadcrumbLabel: "Overhead Crane Restoration",
    industryKey: "pulp-paper",
    industryLabel: "Pulp & Paper",
    title: "Overhead Crane Restoration",
    heroImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2024/12/Original-condition-of-crane-before-protective-coating.jpg",
      alt: "Original condition of crane before protective coating",
    },
    listImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2024/12/Original-condition-of-crane-before-protective-coating.jpg",
      alt: "Overhead Crane Restoration",
    },
    listSummary:
      "NanoPrep provided surface preparation and corrosion protection to a heavily corroded overhead crane in an active production environment without abrasive blasting.",
    meta: {
      industry: "Pulp & Paper",
      application: "Crane Restoration",
      products: "NanoPrep, Jotun XP Hardtop",
      location: "QLD, Australia",
      date: "Oct 2024",
    },
    showContactPanel: false,
    downloadHref: "https://rezitech.com.au/wp-content/uploads/2024/12/Case-Study-Overhead-Crane-Restoration-Using-NanoPrep.pdf",
    downloadLabel: "Download Case Study",
    blocks: [
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "Pulp and Paper facilities are renowned for their corrosive environments, which necessitate their steel structures, including this overhead crane, to be maintained and protected against these elements." },
      { type: "paragraph", text: "Due to the crane being 20 metres overhead and surrounded by critical equipment, abrasive blasting was not an option, so the client needed an alternative type of surface preparation for a protective coating to be applied." },
      { type: "heading", text: "The Application" },
      { type: "paragraph", text: "NanoPrep provided the perfect solution for this application. First, the crane was high pressure washed at 3,500 psi to remove loose rust, coating, and any contaminants from the surface. Thereafter, two coats of NanoPrep were applied by airless spray. Finally, two coats of Jotun XP Hardtop in safety yellow were applied to provide added long-term protection and an aesthetic finish. The job was completed during regular operating hours without causing disruptions or requiring production to be stopped." },
      {
        type: "imageGroup",
        variant: "before",
        badgeLabel: "Before",
        heading: "Original crane condition",
        images: [
          { caption: "Original condition of crane", src: "https://rezitech.com.au/wp-content/uploads/2024/12/Original-condition-of-crane-before-protective-coating.jpg", alt: "Original condition of crane before protective coating" },
          { caption: "NanoPrep applied to crane via airless spray gun after high pressure wash", src: "https://rezitech.com.au/wp-content/uploads/2024/12/NanoPrep-applied-to-crane-via-airless-spray-gun-after-high-pressure-wash.jpg", alt: "NanoPrep applied to crane via airless spray gun after high pressure wash" },
          { caption: "Protective coating being applied to overhead crane", src: "https://rezitech.com.au/wp-content/uploads/2024/12/Protective-coating-being-applied-to-overhead-crane.jpeg", alt: "Protective coating being applied to overhead crane" },
        ],
      },
      {
        type: "imageGroup",
        variant: "after",
        badgeLabel: "After",
        heading: "Completed crane restoration",
        images: [
          { caption: "Final result after two coats of Jotun XP Hardtop", src: "https://rezitech.com.au/wp-content/uploads/2024/12/Final-result-after-two-coats-of-Jotun-XP-Hardtop-applied-to-crane.jpg", alt: "Final result after two coats of Jotun XP Hardtop" },
          { caption: "Overhead crane protected from corrosion with NanoPrep", src: "https://rezitech.com.au/wp-content/uploads/2024/12/Overhead-crane-protected-from-corrosion-with-NanoPrep.jpg", alt: "Overhead crane protected from corrosion with NanoPrep" },
          { caption: "Application of NanoPrep via spray gun", src: "https://rezitech.com.au/wp-content/uploads/2024/12/Application-of-NanoPrep-via-spray-gun.jpg", alt: "Application of NanoPrep via spray gun" },
        ],
      },
      { type: "heading", text: "The Outcome" },
      { type: "paragraph", text: "Previously, during 2019, the client had the other crane’s walkways and motor pans coated in NanoPrep as a trial. Five years later, they are still in perfect condition and as a result the client decided to coat another crane that was showing signs of degradation. The client is very happy with the result and requested additional cranes and other equipment to be protected using NanoPrep." },
      { type: "heading", text: "Project Specification" },
      { type: "specTable", rows: [ { label: "Industry", value: "Pulp & Paper" }, { label: "Application", value: "Overhead crane structure" }, { label: "Environment", value: "Active production facility — overhead location" }, { label: "Surface condition", value: "Heavily corroded steel structure" }, { label: "Surface preparation", value: "High pressure wash (3,500 psi) — no blasting" }, { label: "NanoPrep system", value: "NanoPrep rust primer + industrial topcoat" }, { label: "Key requirement", value: "No blast contamination of active production" } ] },
    ],
  },
  {
    slug: "structural-steel-column",
    metaTitle: "Structural Steel Column Corrosion Protection — NanoPrep Case Study",
    metaDescription:
      "Surface preparation and coating of a structural steel column for long term protection against corrosion using NanoPrep.",
    breadcrumbLabel: "Structural Steel Column Corrosion Protection",
    industryKey: "sugar",
    industryLabel: "Sugar",
    title: "Structural Steel Column Corrosion Protection",
    heroSub: "7 Year NanoPrep Trial",
    heroImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2024/07/Structural-Steel-Column-NanoPrep-trial.jpg",
      alt: "Structural Steel Column NanoPrep trial",
    },
    listImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2024/11/NanoPrep-applied-by-brush-to-corroded-base-of-steel-column.jpg",
      alt: "Structural Steel Column",
    },
    listSummary:
      "NanoPrep provided surface preparation and coating for a structural steel column base at a sugar mill, delivering seven years of corrosion protection without blasting.",
    meta: {
      industry: "Sugar",
      application: "Surface preparation and coating",
      products: "NanoPrep",
      location: "Qld, Australia",
      date: "Sept 2017 – Jul 2024",
    },
    showContactPanel: false,
    downloadHref: "https://rezitech.com.au/wp-content/uploads/2024/07/Case-Study-Structural-Steel-Column-7-Year-NanoPrep-Trial.pdf",
    downloadLabel: "Download Case Study",
    blocks: [
      { type: "heading", text: "2017" },
      { type: "paragraph", text: "In September 2017 we applied two coats of NanoPrep to the base of a structural steel column at a sugar mill. The column forms part of the structure of a sugar conveyor located within 20 feet of a salt water river. The whole structure is suffering severe weathering and corrosion damage, and it has been deemed impractical to abrasive blast and coat the conveyor." },
      { type: "paragraph", text: "The client tested NanoPrep on a small, corroded steel area to see if it could provide a suitable surface for a protective top coat." },
      {
        type: "imageGroup",
        variant: "plain",
        showCaptions: true,
        images: [
          { caption: "Corroded base of substrate", src: "https://rezitech.com.au/wp-content/uploads/2024/07/Corroded-base-of-steel-column-substrate.jpg", alt: "Corroded base of steel column substrate" },
          { caption: "Base being prepared by hand tool", src: "https://rezitech.com.au/wp-content/uploads/2024/07/Base-of-structural-steel-column-prepared-by-hand-tool.jpg", alt: "Base of structural steel column prepared by hand tool" },
          { caption: "Completed Surface Preparation", src: "https://rezitech.com.au/wp-content/uploads/2024/07/Completed-surface-preparation-of-base-of-structural-steel-column.jpg", alt: "Completed surface preparation of base of structural steel column" },
          { caption: "NanoPrep applied by brush", src: "https://rezitech.com.au/wp-content/uploads/2024/07/NanoPrepapplied-by-brush-to-corroded-base-of-steel-column-substrate.jpg", alt: "NanoPrep applied by brush to corroded base of steel column substrate" },
          { caption: "Application of two coats of NanoPrep", src: "https://rezitech.com.au/wp-content/uploads/2024/07/Completed-application-of-two-coats-NanoPrep.jpg", alt: "Completed application of two coats NanoPrep" },
          { caption: "Top coat Applied (six weeks later)", src: "https://rezitech.com.au/wp-content/uploads/2024/07/Top-Coat-applied-six-weeks-later.jpg", alt: "Top Coat applied six weeks later" },
        ],
      },
      { type: "heading", text: "2018 to 2019" },
      { type: "paragraph", text: "An inspection was completed in May 2018. The application had seen no deterioration and system was in good condition." },
      { type: "paragraph", text: "An additional inspection was completed in August 2019 where there was clear evidence of rust on the coating, however this was from the salt water and rust dripping onto the base from above. Once cleaned the application was found to be completely intact and the adhesion of the NanoPrep was excellent." },
      { type: "paragraph", text: "The system was not drummy at all when tapped with a screw driver and the base remains completely protected." },
      {
        type: "imageGroup",
        variant: "plain",
        showCaptions: true,
        images: [
          { caption: "Base showing excellent adhesion of NanoPrep", src: "https://rezitech.com.au/wp-content/uploads/2024/07/Base-showing-excellent-adhesion-of-NanoPrep.jpg", alt: "Base showing excellent adhesion of NanoPrep" },
          { caption: "", src: "https://rezitech.com.au/wp-content/uploads/2024/07/Base-showing-adhesion-of-NanoPrep.jpg", alt: "Base showing adhesion of NanoPrep" },
        ],
      },
      { type: "heading", text: "2020 to 2021" },
      { type: "paragraph", text: "A third Inspection of the application was conducted in March 2020. Again, heavy rust had formed on the application from the structure above. ReziSafe’s Acidsafe 80 was used to clean the rust as best as possible (some rust could not be removed) which showed the application still in excellent condition. When tapped with a screw driver the coating was very solid and continues to protect against the harsh conditions." },
      { type: "paragraph", text: "A fourth inspection of the application was conducted in November 2021. Again, heavy rust had formed on the application from the structure above. ReziSafe’s Acidsafe 80 was used to clean the rust as best as possible and once removed showed the application still in excellent condition. The coating was still in very good condition and continues to protect against the harsh conditions." },
      { type: "paragraph", text: "Midway through 2024, 7 years on, the coating is still tightly bonded to the surface and protected against further corrosion, even in the harshest salt water environment." },
      { type: "heading", text: "2024" },
      { type: "paragraph", text: "Midway through 2024, 7 years on, the coating is still tightly bonded to the surface and protected against further corrosion, even in the harshest salt water environment." },
      {
        type: "imageGroup",
        variant: "plain",
        showCaptions: true,
        images: [
          { caption: "Base before and after cleaning of surface rust, showing application of NanoPrep in excellent condition", src: "https://rezitech.com.au/wp-content/uploads/2024/07/Base-before-cleaning-of-rust.jpg", alt: "Base before cleaning of rust" },
          { caption: "", src: "https://rezitech.com.au/wp-content/uploads/2024/07/Base-after-cleaning-of-surface-rust-showing-application-of-NanoPrep-in-excellent-condition.jpg", alt: "Base after cleaning of surface rust showing application of NanoPrep in excellent condition" },
          { caption: "", src: "https://rezitech.com.au/wp-content/uploads/2024/07/Base-after-cleaning-of-surface-rust-showing-application-of-NanoPrep.jpg", alt: "Base after cleaning of surface rust showing application of NanoPrep" },
        ],
      },
      { type: "heading", text: "Project Specification" },
      { type: "specTable", rows: [ { label: "Industry", value: "Sugar" }, { label: "Application", value: "Structural steel column — base corrosion" }, { label: "Surface condition", value: "Significant corrosion at column base" }, { label: "Surface preparation", value: "Hand tool clean — no blasting" }, { label: "Application method", value: "Brush application" }, { label: "NanoPrep system", value: "NanoPrep rust primer + compatible topcoat" }, { label: "Key requirement", value: "In-situ treatment without production disruption" } ] },
    ],
  },
  {
    slug: "water-tank",
    metaTitle: "Water Tank Corrosion Protection — NanoPrep Case Study",
    metaDescription:
      "Surface preparation and coating for long term protection of a water tank against corrosion using NanoPrep.",
    breadcrumbLabel: "Water Tank Corrosion Protection",
    industryKey: "water",
    industryLabel: "Water",
    title: "Water Tank Corrosion Protection",
    heroSub: "Surface preparation and coating for long term protection against corrosion using NanoPrep",
    heroImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2024/06/Water-tank-surface-preparation-using-pressure-wash.jpg",
      alt: "Water tank surface preparation using pressure wash",
    },
    listImage: {
      src: "https://rezitech.com.au/wp-content/uploads/2024/06/Tank-after-the-application-of-ReziSafe-R230-top-coat-1.jpg",
      alt: "Water Tank Corrosion Protection",
    },
    listSummary:
      "A black steel water tank on a food production farm was showing surface rust and needed long-term corrosion protection without the environmental risk or cost of grit blasting.",
    meta: {
      industry: "Water & Wastewater",
      application: "Surface preparation and coating",
      products: "NanoPrep, ReziSafe R230 TopCoat (White)",
      location: "SA, Australia",
      date: "September 2021",
    },
    showContactPanel: false,
    downloadHref: "https://rezitech.com.au/wp-content/uploads/2024/06/NanoPrep-Water-Tank-Corrosion-Protection-092021.pdf",
    downloadLabel: "Download Case Study",
    blocks: [
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "Our client had a black steel water tank that had not previously been coated and was starting to rust. As a result, they required the rust on the surface to be removed or chemically transformed. In addition to the surface preparation, a coating was required for long term protection against corrosion and underfilm corrosion. Due to being on a food production farm, they were concerned about the environmental impacts of grit blasting near crops and water, and wanted to avoid the substantial cost of scaffolding and encapsulation." },
      {
        type: "imageGroup",
        variant: "plain",
        showCaptions: true,
        images: [
          { caption: "Original Condition of the Black Steel Water Tank", src: "https://rezitech.com.au/wp-content/uploads/2024/06/Original-Condition-of-the-Black-Steel-Water-Tank.jpg", alt: "Original Condition of the Black Steel Water Tank" },
          { caption: "Tank After the Application of ReziSafe R230 Top Coat", src: "https://rezitech.com.au/wp-content/uploads/2024/06/Tank-After-the-Application-of-ReziSafe-R230-Top-Coat.jpg", alt: "Tank After the Application of ReziSafe R230 Top Coat" },
        ],
      },
      { type: "heading", text: "The Application" },
      { type: "paragraph", text: "NanoPrep was the preferred product for surface preparation to protect from underfilm corrosion and ReziSafe R230 Waterbased Top Coat (white) was applied as the final layer." },
      { type: "paragraph", text: "First, a high pressure wash at 3,500psi was performed to remove any loose rust and chloride from the surface. Then, two coats of NanoPrep was applied via airless spray to provide long-term protection. In order to provide UV protection, ReziSafe’s R230 water-based TopCoat was applied by airless spray as the final layer." },
      {
        type: "imageGroup",
        variant: "plain",
        showCaptions: true,
        images: [
          { caption: "Surface Prepared by High Pressure Wash", src: "https://rezitech.com.au/wp-content/uploads/2024/06/Surface-Prepared-by-High-Pressure-Wash.jpg", alt: "Surface Prepared by High Pressure Wash" },
          { caption: "Application of NanoPrep Coating", src: "https://rezitech.com.au/wp-content/uploads/2024/06/Application-of-NanoPrep-Coating.jpg", alt: "Application of NanoPrep Coating" },
          { caption: "Tank After the Application of NanoPrep", src: "https://rezitech.com.au/wp-content/uploads/2024/06/Tank-After-the-Application-of-NanoPrep.jpg", alt: "Tank After the Application of NanoPrep" },
        ],
      },
      { type: "heading", text: "The Outcome" },
      { type: "paragraph", text: "NanoPrep provided an easy to use, cost effective and environmentally friendly solution ensuring long term protection against corrosion and underfilm corrosion. Large cost savings were achieved due to the removal of scaffolding requirements (cherry picker used) and no requirement for abrasive blasting, just a high pressure water wash." },
      { type: "heading", text: "Applicator Testimonial" },
      {
        type: "testimonial",
        quote: "You have a really good product which minimises cost and helps environmentally from two pack and solvent paints used in painting of metals. Normally a job this size and being 10mm black steel would require sand blasting – we followed your specifications and used our 13.5 Honda Pressure Washer and it prepared perfect surfaces for your paint to be applied. Your water based NRX NanoPrep product exceeding my expectations and was very easy to use with a change of a heavier filter and a 19 tip we were able to apply the three coats of undercoat, two top coats with our 20 year old Wagner spraying equipment to achieve a brilliant finish. I will always be happy to use your product and recommend to others.",
        attribution: "Bay Painting Services South Australia",
      },
      { type: "heading", text: "Project Specification" },
      { type: "specTable", rows: [ { label: "Industry", value: "Water & Wastewater" }, { label: "Application", value: "Surface preparation and coating" }, { label: "Products", value: "NanoPrep, ReziSafe R230 TopCoat (White)" }, { label: "Location", value: "SA, Australia" }, { label: "Application date", value: "September 2021" }, { label: "Surface preparation", value: "High-pressure water wash (3,500 psi) — no blasting" } ] },
    ],
  },
  {
    slug: "deprecated-ash-hopper",
    metaTitle: "External Coating of Ash Hopper — NanoPrep Case Study",
    metaDescription:
      "A coal-fired power station used NanoPrep to recoat an ash hopper's degraded external casing without abrasive blasting, during a shutdown window.",
    breadcrumbLabel: "External Coating of Ash Hopper",
    industryKey: "power",
    industryLabel: "Power",
    title: "External Coating of Ash Hopper",
    heroImage: {
      src: "/images/case-studies/ash-hopper.webp",
      alt: "Ash hopper external casing coated with NanoPrep",
    },
    listImage: {
      src: "/images/case-studies/ash-hopper.webp",
      alt: "Ash Hopper Coating",
    },
    listSummary:
      "A power station experienced degrading coating on an ash hopper. A new corrosion protection system was required — NanoPrep provided the solution without blasting.",
    meta: {
      industry: "Power",
      application: "External Coating on Ash Hopper",
      products: "NanoPrep, Jotun",
      location: "NSW, Australia",
      date: "Nov 2024",
    },
    blocks: [
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "A coal-fired power station experienced an issue with the existing coating on an ash hopper degrading over years in service. This degradation had exposed the underlying steel, leading to accelerated external corrosion on the ash hopper's casing." },
      { type: "paragraph", text: "To address this, the customer required a new external coating to protect the ash hopper from further corrosion. Abrasive blasting was not an option for surface preparation due to the close proximity of other workers and the customer requiring a fast turnaround in order to complete the work during a major shutdown period." },
      { type: "heading", text: "The Application" },
      { type: "paragraph", text: "NanoPrep was recommended as an alternative form of surface preparation since it did not require abrasive blasting or removal of the existing paint system that was still in good condition. The application was completed by the Rezitech Services onsite team." },
      {
        type: "inlineVideo",
        heading: "NanoPrep Application — Rezitech Services",
        label: "YouTube Video Placeholder",
        caption: "NanoPrep Application — Rezitech Services",
      },
      {
        type: "imageGroup",
        variant: "before",
        badgeLabel: "Before",
        heading: "Ash hopper existing condition & surface preparation",
        images: [
          { caption: "Ash hopper existing condition" },
          { caption: "Pressure washing the ash hopper" },
          { caption: "Spraying NanoPrep" },
        ],
      },
      {
        type: "imageGroup",
        variant: "after",
        badgeLabel: "After",
        heading: "NanoPrep and topcoat application",
        images: [
          { caption: "Two coats of NanoPrep applied" },
          { caption: "Spraying of the top coat" },
          { caption: "Completed application — Externals of the ash hopper" },
        ],
      },
      { type: "heading", text: "Key Outcomes" },
      {
        type: "list",
        items: [
          "Ash hopper externals fully coated without abrasive blasting",
          "No blast media containment or disposal required in the operational plant environment",
          "Fast turnaround achieved within the shutdown period",
          "No disruption to nearby workers",
          "Corrosion protection restored and asset life extended",
        ],
      },
      { type: "heading", text: "Project Specification" },
      {
        type: "specTable",
        rows: [
          { label: "Industry", value: "Power Generation" },
          { label: "Application", value: "External Coating on Ash Hopper" },
          { label: "Surface condition", value: "Degraded coating, exposed corroded steel" },
          { label: "Surface preparation", value: "Pressure wash — no blasting" },
          { label: "Products", value: "NanoPrep, Jotun" },
          { label: "Location", value: "NSW, Australia" },
          { label: "Application date", value: "Nov 2024" },
          { label: "Key requirement", value: "Fast turnaround during shutdown, no blasting near workers" },
        ],
      },
    ],
  },
  {
    slug: "deprecated-water-tank-power",
    metaTitle: "Water Tank Corrosion Protection — Power Plant — NanoPrep Case Study",
    metaDescription:
      "A power plant's domestic water tank was structurally repaired with Belzona 1111 and protected with NanoPrep and R230 TopCoat, without abrasive blasting.",
    breadcrumbLabel: "Water Tank Corrosion Protection — Power Plant",
    industryKey: "power",
    industryLabel: "Power",
    title: "Water Tank Corrosion Protection — Power Plant",
    heroImage: {
      src: "/images/case-studies/water-tank-power.webp",
      alt: "Power plant water tank coated with NanoPrep and R230 TopCoat",
    },
    listImage: {
      src: "/images/case-studies/water-tank-power.webp",
      alt: "Water Tank Corrosion Protection",
    },
    listSummary:
      "A power plant's domestic water tank required corrosion repairs and a protective coating without surface preparation by abrasive blasting.",
    meta: {
      industry: "Power Generation",
      application: "Water Tank Corrosion Repair & Protection",
      products: "NanoPrep, R230 TopCoat, Belzona 1111",
      location: "NSW, Australia",
      date: "Dec 2025",
    },
    blocks: [
      {
        type: "featuredVideo",
        label: "Water Tank Corrosion Protection Without Blasting",
        caption: "Water Tank Corrosion Protection Without Blasting — Rezitech Services",
      },
      { type: "heading", text: "The Problem" },
      { type: "paragraph", text: "A power plant's domestic water tank exhibited severe external corrosion, requiring structural repairs and the application of a long-term protective coating system. Due to the tank's continuous exposure to UV radiation, it also required a UV-stable, heat-tolerant topcoat capable of preventing premature coating degradation." },
      { type: "paragraph", text: "Abrasive blasting was not a viable surface preparation method due to the high costs associated with containment, encapsulation, and the removal of existing lead-based paint coatings." },
      { type: "heading", text: "The Application" },
      { type: "paragraph", text: "NanoPrep was selected as the preferred surface preparation method as it provided an effective and cost-efficient alternative to abrasive blasting. Surface preparation was completed using a combination of low-pressure power washing (3500 psi) and power tool cleaning, eliminating the need for costly containment and lead paint removal procedures." },
      { type: "paragraph", text: "Before coating work commenced, several structural repairs were required due to severe corrosion damage. The tank underside had extensive pitting, while some of the steel column supports had deteriorated to the point where sections of steel were completely missing. Belzona 1111 (Super Metal) was used to repair the pitted areas on the tank underside, rebuild lost steel sections, and cold bond reinforcement plates onto the damaged steel supports, restoring structural integrity without the need for hot work." },
      { type: "paragraph", text: "Once the repairs had fully cured, the steel supports and surrounding areas were coated with two coats of NanoPrep, followed by two coats of R230 TopCoat." },
      {
        type: "imageGroup",
        variant: "before",
        badgeLabel: "Before — Structural Repairs",
        heading: "Tank underside corrosion and structural repair",
        images: [
          { caption: "Water tank underside showing corrosion and pitting damage" },
          { caption: "Belzona 1111 was used to repair pitting and reinforce corroded areas" },
          { caption: "Belzona 1111 used to repair corroded steel supports" },
          { caption: "Rebuilding of metal loss on steel supports using Belzona 1111" },
          { caption: "Reinforcement plates cold bonded onto the damaged steel supports with Belzona 1111" },
          { caption: "Corroded tank underside and steel supports before repairs" },
        ],
      },
      {
        type: "imageGroup",
        variant: "during",
        badgeLabel: "Application",
        heading: "NanoPrep and R230 TopCoat application — underside and supports",
        images: [
          { caption: "Tank underside and steel supports after application of NanoPrep" },
          { caption: "Tank underside and steel supports after application of R230 TopCoat" },
        ],
      },
      { type: "paragraph", text: "The tank sides and roof were also protected using NanoPrep and R230 TopCoat. Again, surface preparation required only high-pressure water washing, eliminating the need for abrasive blasting. Brushes and rollers were used to stripe coat weld seams, edges, and difficult-to-access areas prior to spray application. Two coats of NanoPrep and two coats of R230 TopCoat were then applied by airless spray, providing long-term corrosion and UV protection." },
      {
        type: "imageGroup",
        variant: "during",
        badgeLabel: "Application",
        heading: "Tank sides and roof — NanoPrep and R230 TopCoat",
        images: [
          { caption: "NanoPrep applied by roller to stripe coat weld seams, edges, and difficult-to-access areas" },
          { caption: "NanoPrep applied by airless spray" },
          { caption: "Tank roof before application of NanoPrep" },
          { caption: "Tank roof after application of NanoPrep" },
          { caption: "Tank roof following application of R230 TopCoat" },
        ],
      },
      { type: "heading", text: "The Outcome" },
      { type: "paragraph", text: "The project was successfully completed in just five days, with severely corroded areas repaired using Belzona and protected with NanoPrep and R230 TopCoat. By eliminating the need for abrasive blasting, the project avoided the high costs and delays associated with containment and lead paint removal, while still delivering a durable, long-term corrosion and UV protection system for the tank." },
      {
        type: "imageGroup",
        variant: "after",
        badgeLabel: "After",
        heading: "Completed tank — corrosion protection restored",
        images: [
          { caption: "Corroded tank underside and steel supports after application" },
          { caption: "Completed water tank — long-term corrosion and UV protection" },
        ],
      },
      { type: "heading", text: "Project Specification" },
      {
        type: "specTable",
        rows: [
          { label: "Industry", value: "Power Generation" },
          { label: "Application", value: "Water Tank Corrosion Repair & Protection" },
          { label: "Products", value: "NanoPrep, R230 TopCoat, Belzona 1111" },
          { label: "Location", value: "NSW, Australia" },
          { label: "Application date", value: "Dec 2025" },
          { label: "Duration", value: "5 days" },
          { label: "Surface preparation", value: "Low-pressure power wash (3500 psi) + power tool clean — no blasting" },
          { label: "Key requirement", value: "No blasting, lead paint encapsulation avoided, UV-stable topcoat" },
        ],
      },
    ],
  },
  {
    slug: "deprecated-pylon",
    metaTitle: "Eco-Friendly Solution for Pylon Corrosion Protection — NanoPrep Case Study",
    metaDescription:
      "NanoPrep's waterborne, non-hazardous formulation protected jetty pylons from corrosion in a sensitive tidal marine zone without blasting.",
    breadcrumbLabel: "Eco-Friendly Solution for Pylon Corrosion Protection",
    industryKey: "marine",
    industryLabel: "Marine",
    title: "Eco-Friendly Solution for Pylon Corrosion Protection",
    heroImage: {
      src: "/images/case-studies/pylon.webp",
      alt: "Jetty pylons in a tidal marine zone treated with NanoPrep",
    },
    listImage: {
      src: "/images/case-studies/pylon.webp",
      alt: "Pylon Corrosion Protection",
    },
    listSummary:
      "NanoPrep provided a unique eco-friendly surface preparation and corrosion protection solution for pylons in a sensitive tidal marine environment.",
    meta: {
      industry: "Marine",
      application: "Protective coating on corroded and submerged pier pylons",
      products: "NanoPrep, Belzona 5831, Wattyl DTM985",
      location: "Far North Queensland, Australia",
      date: "July 2023",
    },
    blocks: [
      { type: "heading", text: "The Challenge" },
      { type: "paragraph", text: "Jetty pylons located in a tidal marine zone required corrosion protection treatment. The pylons were exposed to aggressive corrosive conditions in the tidal splash zone, and significant corrosion had developed on the steel surfaces." },
      { type: "paragraph", text: "Abrasive blasting was not an option in this environment — the tidal location, proximity to the waterway, and the environmental sensitivity of the marine area made conventional surface preparation methods unacceptable. A non-hazardous, environmentally safe solution was required." },
      { type: "highlight", text: "NanoPrep's non-hazardous, waterborne formulation made it the ideal choice — delivering effective corrosion protection in a sensitive marine environment without blasting or hazardous waste." },
      { type: "heading", text: "The Solution" },
      { type: "paragraph", text: "Rezitech's team assessed the pylon condition and developed a treatment plan using NanoPrep. The corroded steel surfaces were prepared by hand tool cleaning within the tidal zone constraints before NanoPrep was applied directly to the corroded pylon surfaces at low tide." },
      { type: "paragraph", text: "NanoPrep's waterborne, non-hazardous formulation was critical in this application — it generates no blast media waste, contains no VOCs, and is safe to use in the marine environment. A compatible topcoat was applied over the NanoPrep primer to complete the corrosion protection system." },
      {
        type: "articleImage",
        src: "/images/case-studies/pylon.webp",
        alt: "Pier pylons in tidal zone treated with NanoPrep",
      },
      { type: "heading", text: "Key Outcomes" },
      {
        type: "list",
        items: [
          "Pylon corrosion protection achieved in a sensitive tidal marine environment",
          "No hazardous materials used — no environmental risk to the waterway",
          "No blast media generated or disposed of",
          "NanoPrep's waterborne formulation fully compliant with marine environmental requirements",
          "Effective corrosion protection system applied in a challenging tidal zone environment",
        ],
      },
      { type: "heading", text: "Project Specification" },
      {
        type: "specTable",
        rows: [
          { label: "Industry", value: "Marine" },
          { label: "Application", value: "Jetty pylons — tidal zone" },
          { label: "Environment", value: "Sensitive marine tidal zone" },
          { label: "Surface condition", value: "Corroded steel in aggressive tidal environment" },
          { label: "Surface preparation", value: "Hand tool clean — no blasting" },
          { label: "NanoPrep system", value: "NanoPrep rust primer (waterborne) + compatible topcoat" },
          { label: "Key requirement", value: "Non-hazardous, environmentally safe application" },
        ],
      },
    ],
  },
  {
    slug: "deprecated-crane",
    metaTitle: "Overhead Crane Restoration — NanoPrep Case Study",
    metaDescription:
      "A heavily corroded overhead crane in an active pulp and paper facility was restored using NanoPrep, applied without abrasive blasting or shutdown.",
    breadcrumbLabel: "Overhead Crane Restoration",
    industryKey: "pulp-paper",
    industryLabel: "Pulp & Paper",
    title: "Overhead Crane Restoration",
    heroImage: {
      src: "/images/case-studies/crane.webp",
      alt: "Heavily corroded overhead crane restored with NanoPrep",
    },
    listImage: {
      src: "/images/case-studies/crane.webp",
      alt: "Overhead Crane Restoration",
    },
    listSummary:
      "NanoPrep provided surface preparation and corrosion protection to a heavily corroded overhead crane in an active production environment — without abrasive blasting.",
    meta: {
      industry: "Pulp & Paper",
      application: "Crane Restoration",
      products: "NanoPrep, Jotun XP Hardtop",
      location: "QLD, Australia",
      date: "Oct 2024",
    },
    blocks: [
      { type: "heading", text: "The Challenge" },
      { type: "paragraph", text: "A heavily corroded overhead crane in an active pulp and paper production facility required surface preparation and corrosion protection. The crane structure had experienced significant corrosion over its service life and required restoration to extend its operational lifespan." },
      { type: "paragraph", text: "Abrasive blasting within the active production environment was not feasible — the facility was in continuous operation and blast containment in the overhead location was impractical and posed unacceptable contamination risks to the production process." },
      { type: "highlight", text: "NanoPrep provided the solution — surface preparation and corrosion protection applied in-situ on the overhead crane without abrasive blasting, in an active production environment." },
      { type: "heading", text: "The Solution" },
      { type: "paragraph", text: "Rezitech's team assessed the crane structure and developed a treatment specification using NanoPrep. The crane surfaces were prepared by hand tool cleaning to remove loose scale and contamination before NanoPrep was applied to the corroded steel surfaces of the overhead crane structure." },
      { type: "paragraph", text: "Working at height in the overhead environment, Rezitech applied NanoPrep by brush and roller to all affected surfaces. The NanoPrep chemical reaction stabilised the corrosion and provided a firm base for the topcoat system. A compatible industrial topcoat was then applied to complete the restoration." },
      {
        type: "articleImage",
        src: "/images/case-studies/crane.webp",
        alt: "Overhead crane restored with NanoPrep",
      },
      { type: "heading", text: "Key Outcomes" },
      {
        type: "list",
        items: [
          "Overhead crane restored to service with long-term corrosion protection",
          "No abrasive blasting — no contamination risk to active production process",
          "Application completed at height without disruption to facility operations",
          "No hazardous blast waste generated",
          "Asset life significantly extended through corrosion treatment and protective coating",
        ],
      },
      { type: "heading", text: "Project Specification" },
      {
        type: "specTable",
        rows: [
          { label: "Industry", value: "Pulp & Paper" },
          { label: "Application", value: "Overhead crane structure" },
          { label: "Environment", value: "Active production facility — overhead location" },
          { label: "Surface condition", value: "Heavily corroded steel structure" },
          { label: "Surface preparation", value: "Hand tool clean — no blasting" },
          { label: "NanoPrep system", value: "NanoPrep rust primer (brush/roller) + industrial topcoat" },
          { label: "Key requirement", value: "No blast contamination of active production" },
        ],
      },
    ],
  },
  {
    slug: "deprecated-steel-column",
    metaTitle: "Structural Steel Column Corrosion Protection — NanoPrep Case Study",
    metaDescription:
      "A corroded structural steel column base at an active manufacturing facility was treated in-situ with NanoPrep, without blasting or shutdown.",
    breadcrumbLabel: "Structural Steel Column Corrosion Protection",
    industryKey: "sugar",
    industryLabel: "Sugar",
    title: "Structural Steel Column Corrosion Protection",
    heroImage: {
      src: "/images/case-studies/steel-column.webp",
      alt: "Corroded structural steel column base treated with NanoPrep",
    },
    listImage: {
      src: "/images/case-studies/steel-column.webp",
      alt: "Structural Steel Column",
    },
    listSummary:
      "Surface preparation and coating of a structural steel column using NanoPrep — providing long-term protection against corrosion without blasting.",
    meta: {
      industry: "Sugar",
      application: "Surface preparation and coating",
      products: "NanoPrep",
      location: "Qld, Australia",
      date: "Sept 2017 – Jul 2024",
    },
    blocks: [
      { type: "heading", text: "The Challenge" },
      { type: "paragraph", text: "A structural steel column at a manufacturing facility had developed significant corrosion at its base — a common occurrence where steel columns are exposed to moisture and contamination at ground level. The corrosion had progressed to a point where remediation was required to maintain the structural integrity and appearance of the column." },
      { type: "paragraph", text: "The column's location within the active facility made abrasive blasting impractical. Blast containment, dust generation, and the risk of blast media contaminating the production environment made conventional surface preparation methods unsuitable." },
      { type: "highlight", text: "NanoPrep allowed the corroded column base to be treated in-situ — without blasting, without shutdown, and without contamination risk to the surrounding facility." },
      { type: "heading", text: "The Solution" },
      { type: "paragraph", text: "Rezitech's team assessed the steel column and developed a treatment plan using NanoPrep. The corroded areas were prepared by hand tool cleaning before NanoPrep was applied by brush directly to the corroded base of the column. NanoPrep's chemical reaction with the iron oxides in the rust layer converted and stabilised the corrosion, providing a firm adhesive base for the topcoat." },
      { type: "paragraph", text: "A compatible protective topcoat was applied over the NanoPrep-treated surfaces, restoring the column's appearance and providing long-term corrosion protection." },
      {
        type: "articleImage",
        src: "/images/case-studies/steel-column.webp",
        alt: "NanoPrep applied by brush to corroded steel column base",
      },
      { type: "heading", text: "Key Outcomes" },
      {
        type: "list",
        items: [
          "Structural steel column corrosion treated and protected in-situ",
          "No abrasive blasting — no contamination risk to the production environment",
          "Treatment completed without operational shutdown",
          "No blast media waste generated or disposed of",
          "Long-term corrosion protection restored on structural steel",
        ],
      },
      { type: "heading", text: "Project Specification" },
      {
        type: "specTable",
        rows: [
          { label: "Industry", value: "Manufacturing" },
          { label: "Application", value: "Structural steel column — base corrosion" },
          { label: "Surface condition", value: "Significant corrosion at column base" },
          { label: "Surface preparation", value: "Hand tool clean — no blasting" },
          { label: "Application method", value: "Brush application" },
          { label: "NanoPrep system", value: "NanoPrep rust primer + compatible topcoat" },
          { label: "Key requirement", value: "In-situ treatment without production disruption" },
        ],
      },
    ],
  },
  {
    slug: "water-tank",
    metaTitle: "Water Tank Corrosion Protection — NanoPrep Case Study",
    metaDescription:
      "A water storage tank was recoated with NanoPrep and R230 TopCoat, avoiding blast-media contamination risk to the water supply.",
    breadcrumbLabel: "Water Tank Corrosion Protection",
    industryKey: "water",
    industryLabel: "Water",
    title: "Water Tank Corrosion Protection",
    heroImage: {
      src: "/images/case-studies/water-tank.webp",
      alt: "Water storage tank coated with NanoPrep and R230 TopCoat",
    },
    listImage: {
      src: "/images/case-studies/water-tank.webp",
      alt: "Water Tank Corrosion Protection",
    },
    listSummary:
      "Surface preparation and protective coating of a water storage tank using NanoPrep — long-term corrosion protection without the need for abrasive blasting.",
    meta: {
      industry: "Water & Wastewater",
      application: "Surface preparation and coating",
      products: "NanoPrep, ReziSafe R230 TopCoat (White)",
      location: "SA, Australia",
      date: "September 2021",
    },
    blocks: [
      { type: "heading", text: "The Challenge" },
      { type: "paragraph", text: "A water storage tank required surface preparation and coating for long-term protection against corrosion. The tank had experienced corrosion on internal and external surfaces and required a compliant coating system to restore protection and extend the asset's service life." },
      { type: "paragraph", text: "Conventional abrasive blasting was assessed as impractical for this application. The location of the tank, combined with the requirement to maintain water supply continuity and avoid blast waste contamination of the water system, made blasting unsuitable." },
      { type: "highlight", text: "NanoPrep's waterborne, non-hazardous formulation made it an ideal choice — providing effective corrosion treatment and a compliant primer system for the water storage tank without blasting." },
      { type: "heading", text: "The Solution" },
      { type: "paragraph", text: "Rezitech's team assessed the tank condition and developed a treatment specification using NanoPrep. The corroded surfaces were prepared by hand tool cleaning before NanoPrep was applied to the affected areas. NanoPrep chemically reacted with the corrosion layer, stabilising the rust and providing a firm, adherent surface for topcoat application." },
      { type: "paragraph", text: "A compatible protective topcoat was applied over the NanoPrep-treated surfaces, restoring the tank's protective coating system and providing long-term corrosion protection for continued water storage service." },
      {
        type: "articleImage",
        src: "/images/case-studies/water-tank.webp",
        alt: "Water storage tank after NanoPrep and topcoat application",
      },
      { type: "heading", text: "Key Outcomes" },
      {
        type: "list",
        items: [
          "Water tank corrosion protection restored without abrasive blasting",
          "No blast media contamination risk to the water storage system",
          "NanoPrep's waterborne formulation safe for use in water-related applications",
          "Tank returned to service with long-term protective coating",
          "No hazardous waste generated — no disposal requirements",
        ],
      },
      { type: "heading", text: "Project Specification" },
      {
        type: "specTable",
        rows: [
          { label: "Industry", value: "Water & Wastewater" },
          { label: "Application", value: "Water storage tank" },
          { label: "Surface condition", value: "Corroded internal and external surfaces" },
          { label: "Surface preparation", value: "Hand tool clean — no blasting" },
          { label: "NanoPrep system", value: "NanoPrep rust primer + compatible protective topcoat" },
          { label: "Key requirement", value: "Non-hazardous, no blast media contamination" },
        ],
      },
    ],
  },
];

/**
 * Superseded draft entries (slug prefixed "deprecated-") are kept in
 * `caseStudies` so their pages still build and old links don't 404, but they
 * must never appear in the public /case-studies listing — that would surface
 * a duplicate card pointing at a "deprecated-…" URL for a case study that
 * already has a proper published entry.
 */
export const publishedCaseStudies = caseStudies.filter((cs) => !cs.slug.startsWith("deprecated-"));

export function getCaseStudy(slug: string): CaseStudy | undefined {
  const canonicalSlug = slugAliases[slug] ?? slug;
  return caseStudies.find((cs) => cs.slug === canonicalSlug);
}

/**
 * The source site hardcoded the same 3 "related" cards (Pylon, Crane, Fuel
 * Tank) on every single case-study page — even the fuel-tank page listed
 * itself as "related". Fixed here to genuinely exclude the current page,
 * preferring a stable curated order. See CHANGELOG.md.
 */
const relatedOrder = ["eco-friendly-solution-for-pylon-corrosion-protection", "overhead-crane-restoration", "fuel-tank-corrosion-protection-without-blasting", "external-coating-of-ash-hopper", "pipework-corrosion-protection-without-blasting", "structural-steel-column", "water-tank", "water-tank-corrosion-protection"];

const slugAliases: Record<string, string> = {
  pipework: "pipework-corrosion-protection-without-blasting",
  "fuel-tank": "fuel-tank-corrosion-protection-without-blasting",
  "ash-hopper": "external-coating-of-ash-hopper",
  "water-tank-power": "water-tank-corrosion-protection",
  pylon: "eco-friendly-solution-for-pylon-corrosion-protection",
  crane: "overhead-crane-restoration",
  "steel-column": "structural-steel-column",
};

export function getRelatedCaseStudies(currentSlug: string, count = 3): CaseStudy[] {
  return relatedOrder
    .filter((slug) => slug !== currentSlug)
    .slice(0, count)
    .map((slug) => getCaseStudy(slug))
    .filter((cs): cs is CaseStudy => Boolean(cs));
}
