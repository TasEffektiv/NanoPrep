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
    slug: "pipework",
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
      "An offshore Oil & Gas facility required coating remediation on pipework in areas where abrasive blasting was not possible. NanoPrep delivered a compliant solution without operational shutdown.",
    meta: {
      industry: "Oil & Gas",
      application: "Offshore Pipework Corrosion Protection",
      products: "NanoPrep, PPG PSX 700 Topcoat",
      location: "New Zealand",
      date: "Jan 2019",
    },
    blocks: [
      { type: "heading", text: "The Challenge" },
      { type: "paragraph", text: "An offshore Oil & Gas facility required coating remedial work on pipework located in areas where it was not possible to perform surface preparation by abrasive blasting — due to wet and icy surfaces, and the costs associated with shutting down operations." },
      { type: "paragraph", text: "The facility required a compliant anticorrosive coating system that could be applied to corroded steel surfaces without blast cleaning and without operational shutdown." },
      { type: "highlight", text: "NanoPrep was selected as the preferred surface preparation solution — providing an effective, low-cost alternative to abrasive blasting in the form of a simple low-pressure power wash (3500 psi) combined with power tool cleaning." },
      {
        type: "imageGroup",
        variant: "before",
        badgeLabel: "Before",
        heading: "Condition of pipework before coating remedial work",
        images: [
          { caption: "Condition of pipework before coating remedial work" },
          { caption: "Condition of pipework before coating remedial work" },
          { caption: "Condition of pipework before coating remedial work" },
        ],
      },
      { type: "heading", text: "The Application" },
      { type: "paragraph", text: "NanoPrep is suitable for a variety of topcoats and can be applied to rusted, damp or dry surfaces. Two coats of NanoPrep were applied by brush at 75μm. After application, a final layer of PPG PSX 700 was applied at 75μm." },
      {
        type: "imageGroup",
        variant: "during",
        badgeLabel: "Application",
        heading: "Two coats of NanoPrep applied by brush at 75μm",
        images: [
          { caption: "Two coats of NanoPrep applied by brush at 75μm" },
          { caption: "Two coats of NanoPrep applied by brush at 75μm" },
          { caption: "Two coats of NanoPrep applied by brush at 75μm" },
        ],
      },
      {
        type: "imageGroup",
        variant: "after",
        badgeLabel: "After",
        heading: "One coat of PPG PSX 700 Topcoat applied at 75μm",
        images: [
          { caption: "One coat of PPG PSX 700 Topcoat applied at 75μm" },
          { caption: "One coat of PPG PSX 700 Topcoat applied at 75μm" },
          { caption: "One coat of PPG PSX 700 Topcoat applied at 75μm" },
        ],
      },
      { type: "heading", text: "Key Outcomes" },
      {
        type: "list",
        items: [
          "Corrosion protection achieved without abrasive blasting in a confined offshore environment",
          "No hazardous blast media generated — no waste disposal required",
          "Application completed without operational shutdown",
          "Full compliance with environmental and HSE requirements on the offshore platform",
          "Durable anticorrosive system suitable for the offshore marine environment",
        ],
      },
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
    slug: "fuel-tank",
    metaTitle: "Fuel Tank Corrosion Protection Without Blasting — NanoPrep Case Study",
    metaDescription:
      "A 110,000-litre diesel storage tank in Queensland was protected with NanoPrep, avoiding a cost-prohibitive grit-blasting programme.",
    breadcrumbLabel: "Fuel Tank Corrosion Protection Without Blasting",
    industryKey: "oil-gas",
    industryLabel: "Oil & Gas",
    title: "Fuel Tank Corrosion Protection Without Blasting",
    heroImage: {
      src: "/images/case-studies/fuel-tank.webp",
      alt: "Fuel tank corrosion protection with NanoPrep",
    },
    listImage: {
      src: "/images/case-studies/fuel-tank.webp",
      alt: "Fuel Tank Corrosion Protection",
    },
    listSummary:
      "A 110,000-litre above-ground carbon-steel diesel tank in Queensland required a high-performance anticorrosive coating system — applied without grit blasting.",
    meta: {
      industry: "Oil & Gas",
      application: "Fuel Tank Corrosion Protection",
      products: "NanoPrep",
      location: "Qld, Australia",
      date: "Oct 2025",
    },
    blocks: [
      { type: "heading", text: "The Challenge" },
      { type: "paragraph", text: "A 110,000-litre above-ground carbon-steel diesel storage tank in Queensland required a high-performance anticorrosive coating system. The tank had experienced significant corrosion on the external surfaces and required remediation to prevent further degradation." },
      { type: "paragraph", text: "Grit blasting the tank to the required surface preparation standard was assessed as cost-prohibitive and operationally impractical — the location of the tank and the logistics of blast containment made conventional surface preparation methods difficult to justify." },
      { type: "highlight", text: "NanoPrep provided a cost-effective alternative — delivering a high-performance anticorrosive primer system without the need for abrasive blasting." },
      { type: "heading", text: "The Solution" },
      { type: "paragraph", text: "Rezitech's team prepared the tank surfaces by hand tool cleaning to remove loose scale and contamination before applying NanoPrep directly to the corroded carbon steel surfaces. NanoPrep reacted chemically with the rust layer, converting the corrosion into a stable, adherent base for the topcoat system." },
      { type: "paragraph", text: "A high-performance compatible topcoat was applied over the NanoPrep-treated surfaces, providing long-term protection against further corrosion and environmental exposure." },
      {
        type: "articleImage",
        src: "/images/case-studies/fuel-tank.webp",
        alt: "Fuel tank coated with NanoPrep",
      },
      { type: "heading", text: "Key Outcomes" },
      {
        type: "list",
        items: [
          "110,000-litre diesel storage tank protected without grit blasting",
          "Significant reduction in project cost compared to blast-and-coat approach",
          "No blast containment required — reduced project complexity",
          "No hazardous waste stream generated",
          "High-performance anticorrosive system applied and ready for long-term service",
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
          { label: "Surface preparation", value: "Hand tool clean — no blasting" },
          { label: "NanoPrep system", value: "NanoPrep rust primer + compatible topcoat" },
          { label: "Location", value: "Queensland, Australia" },
        ],
      },
    ],
  },
  {
    slug: "ash-hopper",
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
    slug: "water-tank-power",
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
    slug: "pylon",
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
    slug: "crane",
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
    slug: "steel-column",
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

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((cs) => cs.slug === slug);
}

/**
 * The source site hardcoded the same 3 "related" cards (Pylon, Crane, Fuel
 * Tank) on every single case-study page — even the fuel-tank page listed
 * itself as "related". Fixed here to genuinely exclude the current page,
 * preferring a stable curated order. See CHANGELOG.md.
 */
const relatedOrder = ["pylon", "crane", "fuel-tank", "ash-hopper", "pipework", "steel-column", "water-tank", "water-tank-power"];

export function getRelatedCaseStudies(currentSlug: string, count = 3): CaseStudy[] {
  return relatedOrder
    .filter((slug) => slug !== currentSlug)
    .slice(0, count)
    .map((slug) => getCaseStudy(slug))
    .filter((cs): cs is CaseStudy => Boolean(cs));
}
