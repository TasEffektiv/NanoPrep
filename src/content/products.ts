import type { ContentBlock } from "@/lib/types";

export interface Product {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  breadcrumbLabel: string;
  cardTag: string;
  cardName: string;
  cardSubtitle: string;
  cardSummary: string;
  cardFeatures: string[];
  cardHref?: string;
  cardImage?: { src: string; alt: string };
  heroImage?: { src: string; alt: string };
  heroTagImage?: { src: string; alt: string; width: number; height: number };
  heroTitle: string;
  heroSub: string;
  featurePills: string[];
  blocks: ContentBlock[];
  cta: { heading: string; text: string; href: string; label: string };
}

export const products: Product[] = [
  {
    slug: "nanoprep",
    metaTitle: "NanoPrep — Rust Primer & Anticorrosive Coating",
    metaDescription:
      "NanoPrep is a waterborne primer that chemically reacts with rusted, painted and bare steel — eliminating the need for abrasive blasting.",
    breadcrumbLabel: "NanoPrep Rust Primer & Anticorrosive Coating",
    cardTag: "ANTICORROSIVE COATING",
    cardName: "NanoPrep",
    cardSubtitle: "Rust Primer & Anticorrosive Coating",
    cardSummary:
      "NanoPrep is a single-component, waterborne acrylic copolymer that reacts and cross-links with rusted steel, clean steel, painted surfaces, aluminium and galvanised steel to deliver superior corrosion protection.",
    cardFeatures: ["No Blasting", "No VOCs", "Non-Flammable", "Eco-Friendly"],
    cardImage: { src: "/images/Products/NanoPrep.jpg", alt: "NanoPrep applied to a primed structural steel beam" },
    heroImage: { src: "/images/Products/nanoprepbanner.jpg", alt: "NanoPrep applied to the roof of a large storage tank" },
    heroTagImage: { src: "/images/Products/nanoprep-logo-tag.png", alt: "NanoPrep", width: 360, height: 196 },
    heroTitle: "NanoPrep — Rust Primer & Anticorrosive Coating",
    heroSub:
      "The proven alternative to grit blasting. A waterborne primer that chemically reacts with rusted steel for perfect adhesion.",
    featurePills: ["No VOCs", "Non-Flammable", "Eco-Friendly", "No Blasting Required", "Quick Drying"],
    blocks: [
      { type: "heading", text: "A new class of coating" },
      {
        type: "paragraph",
        text: "NanoPrep is a one-component, waterborne, acrylic co-polymer rust primer and anticorrosive coating that is changing the industrial coatings industry. It chemically reacts and cross-links with rusted steel, clean steel, painted steel, aluminium, and galvanised steel surfaces — creating superior anticorrosive properties without the need for abrasive blasting.",
      },
      {
        type: "paragraph",
        text: "NanoPrep's surface preparation technology allows industrial coating application in areas where it is difficult, cost prohibitive, or impossible to perform surface preparation by abrasive grit blasting.",
      },
      {
        type: "highlight",
        lead: "How it works:",
        text: 'Upon application, "Nanofusion" takes place — the product\'s nano-sized particles (less than one micron) penetrate deep into the rusted substrate, converting iron oxide to iron phosphate and creating a stable, high bond strength base for your selected topcoat.',
      },
      { type: "heading", text: "Key benefits" },
      {
        type: "benefitGrid",
        items: [
          { title: "Just Pressure Wash", text: "No blasting required — surface preparation is achieved with a simple 3500psi pressure wash." },
          { title: "No Heavy Protective Gear", text: "A simpler, safer application process compared to abrasive blasting methods." },
          { title: "Outstanding Adhesion", text: "Chemically reacts for perfect adhesion and top performance with a wide range of topcoats." },
          { title: "Quick Drying", text: "Saves time on site with fast cure times between coats." },
          { title: "No VOCs", text: "Safe and simple to use with no volatile organic compounds." },
          { title: "Non-Flammable", text: "A safer product for use on active industrial sites." },
          { title: "Long Shelf Life", text: "Extended storage life for project flexibility." },
          { title: "Primer for Many Topcoats", text: "Compatible with a wide range of non-solvent and low-solvent based topcoats." },
        ],
      },
      { type: "heading", text: "Performance you can rely on" },
      {
        type: "paragraph",
        text: "There is no doubt that the best form of surface preparation is abrasive grit blasting, which is usually required if a coating manufacturer's minimum adhesion values are to be achieved. However, NanoPrep will typically achieve 70 to 80% of the coating manufacturers' stated adhesion values — for a fraction of the cost of conventional surface preparation techniques.",
      },
      { type: "paragraph", text: "The adhesion of topcoats such as International, Jotun, and PPG to NanoPrep is outstanding." },
      { type: "heading", text: "How NanoPrep is applied" },
      { type: "paragraph", text: "Either two or three coats of NanoPrep are required before applying your selected topcoat." },
      {
        type: "steps",
        items: [
          { title: "Preparation", text: 'The substrate should be washed to remove residual oils, salts and contamination. Surface preparation by water blasting at 3500psi or mechanical preparation by wire brush is appropriate. NanoPrep works best when applied to "tight rust" and can be applied to a damp (but not wet) substrate.' },
          { title: "First Coat", text: 'Applied directly onto the substrate, penetrating into "tight rust" and converting the iron oxide to iron phosphate. The initial coat may appear somewhat "motley" and inconsistent in colour.' },
          { title: "Second Coat", text: "Applied after approximately 2–3 hours (at 20°C), directly over the stabilised first coat. This coat should comprehensively cover the first and achieve a uniform, consistent finish." },
          { title: "Third Coat (if required)", text: "Only required when heavy rust is present in the initial, untreated substrate, to achieve a high quality uniform surface finish." },
          { title: "Topcoat", text: "NanoPrep is left to cure for two to three hours at 20°C before applying your selected non-solvent based steel protection coating." },
        ],
      },
      {
        type: "highlight",
        text: "A vast number of topcoats can be applied over NanoPrep — including acrylic, water-based steel protection paints, two-pack epoxies, polyuria coatings, and coatings containing no more than 16% solvent. NanoPrep is not suitable for use with solvent-based or silicon-based paints.",
      },
      { type: "heading", text: "Technical documentation" },
      { type: "paragraph", text: "Detailed specifications, application guides, and safety information are available below." },
      {
        type: "docLinks",
        items: [
          { label: "Technical Data Sheet (TDS)", sub: "Download PDF", href: "https://rezitech.com.au/wp-content/uploads/2025/10/NanoPrep-TDS-2025.pdf" },
          { label: "Safety Data Sheet (SDS)", sub: "Download PDF", href: "https://rezitech.com.au/wp-content/uploads/2025/09/NanoPrep-SDS-2023.pdf" },
          { label: "Instructions for Use (IFU)", sub: "Download PDF", href: "https://rezitech.com.au/wp-content/uploads/2025/10/NanoPrep-Instructions-For-Use-2025.pdf" },
          { label: "Application Notes", sub: "Download PDF", href: "https://rezitech.com.au/wp-content/uploads/2025/09/NanoPrep-Application-Notes-2025.pdf" },
          { label: "Product Brochure", sub: "Download PDF", href: "https://rezitech.com.au/wp-content/uploads/2025/10/Rezitech-NanoPrep-Brochure.pdf" },
        ],
      },
    ],
    cta: {
      heading: "Want to see NanoPrep in action?",
      text: "Request a free trial and let our team show you how NanoPrep can protect your assets without the cost and disruption of abrasive blasting.",
      href: "/contact",
      label: "Request a Free Trial",
    },
  },
  {
    slug: "r230-topcoat",
    metaTitle: "NanoPrep — R230 TopCoat",
    metaDescription:
      "ReziSafe R230 TopCoat is the approved mid-gloss, waterbased finishing system for NanoPrep, providing long-term UV and corrosion protection.",
    breadcrumbLabel: "NanoPrep R230 TopCoat",
    cardTag: "TOPCOAT",
    cardName: "R230 TopCoat",
    cardSubtitle: "Mid Gloss Waterbased Industrial Topcoat",
    cardSummary:
      "The approved topcoat for NanoPrep, R230 TopCoat is a single-pack, self-cross-linking water-based industrial coating that provides excellent surface and UV protection with a durable mid-gloss finish.",
    cardFeatures: ["UV Resistant", "Single Pack", "Durable Finish", "Waterbased"],
    cardImage: { src: "/images/Products/R230.jpg", alt: "R230 TopCoat applied to structural steel beams" },
    heroImage: { src: "/images/Products/r230prod.jpg", alt: "R230 TopCoat applied to the roof of a large storage tank" },
    heroTagImage: {
      src: "/images/Products/rezitech-r230-topcoat.png",
      alt: "R230 TopCoat — Mid Gloss Waterbased Industrial Topcoat, Approved Topcoat for NanoPrep",
      width: 1533,
      height: 548,
    },
    heroTitle: "NanoPrep — R230 TopCoat",
    heroSub:
      "Mid-gloss waterbased industrial topcoat — the approved finishing system for NanoPrep, providing long-term UV and corrosion protection.",
    featurePills: ["UV Stable", "Waterbased", "Single Pack", "Mid Gloss", "Approved Topcoat for NanoPrep"],
    blocks: [
      {
        type: "image",
        src: "/images/Products/rezitech-r230-topcoat.png",
        alt: "R230 TopCoat logo",
        width: 252,
        height: 90,
      },
      { type: "heading", text: "A waterbased topcoat, purpose-built for NanoPrep" },
      {
        type: "paragraph",
        text: "ReziSafe R230 TopCoat is a mid-gloss, single-pack, self cross-linking industrial waterbased topcoat that offers excellent surface protection. It has been developed as an ideal topcoat for NanoPrep, capable of successfully priming damp rusty surfaces, galvanised steel, aluminium, or stainless steel with minimum surface preparation.",
      },
      {
        type: "paragraph",
        text: "R230 provides strong UV protection, making it suitable for protecting coated assets against external weathering and environmental elements over the long term.",
      },
      {
        type: "highlight",
        lead: "Approved Topcoat for NanoPrep:",
        text: "R230 is specifically formulated to perform as the finishing layer over NanoPrep — combining easy application with long-term UV-stable, corrosion-resistant performance.",
      },
      { type: "heading", text: "Key benefits" },
      {
        type: "benefitGrid",
        items: [
          { title: "UV Protection", text: "Provides strong resistance to UV degradation, protecting coated assets exposed to external weathering." },
          { title: "Mid Gloss Finish", text: "A clean, professional mid-gloss finish suitable for a wide range of industrial applications." },
          { title: "Single Pack Formula", text: "Self cross-linking — no complex mixing ratios, simple and straightforward to use on site." },
          { title: "Minimal Surface Prep", text: "Can be applied over damp, rusty, galvanised, aluminium, or stainless steel surfaces." },
        ],
      },
      { type: "heading", text: "Surface preparation" },
      {
        type: "paragraph",
        text: "Metals, bare rusty steel, galvanised steel, aluminium and stainless steel should be prepared and coated with NanoPrep as per its specification (refer to TDS and application sheets). For prepainted surfaces, simply remove any grease, oil, dust or dirt before application.",
      },
      { type: "heading", text: "Application" },
      {
        type: "paragraph",
        text: "Thoroughly stir paint and contents before and during use with a wide flat stirrer. Avoid application or drying in excessive hot conditions or temperatures below 10°C. For best results, always apply two coats.",
      },
      {
        type: "steps",
        items: [
          { title: "Brushing / Rolling", text: "For small areas, use R230 as is. For larger areas, thin with water by approximately 10–15% (100–150mL per litre)." },
          { title: "Spray — Conventional or Airless", text: "Thin with water by approximately 10–15% (100–150mL per litre). With smaller tip guns, further thinning could be required." },
          { title: "Protection", text: "Use effective ground or drop sheets to protect the surrounding area from overspray or spillage." },
        ],
      },
      { type: "heading", text: "Drying, coverage & clean up" },
      {
        type: "benefitGrid",
        items: [
          { title: "Drying Times", text: "Under normal conditions: touch dry in 30 minutes; recoat after 2 hours." },
          { title: "Coverage", text: "8–12 square metres per litre, depending on porosity and roughness of the surface. Allow extra when spraying, as certain structures and shapes can cause significant loss due to overspray." },
          { title: "Clean Up", text: "Wash with cool water and clean all application equipment and utensils immediately after use. R230 is a tough, resistant coating once dry and will be difficult to remove if left to cure on equipment.", fullWidth: true },
        ],
      },
      { type: "heading", text: "Technical documentation" },
      { type: "paragraph", text: "Detailed specifications, application guides, and safety information are available below." },
      {
        type: "docLinks",
        items: [
          { label: "Safety Data Sheet (SDS)", sub: "Download PDF", href: "https://rezitech.com.au/wp-content/uploads/2023/12/Rezisafe-R230-Topcoat-SDS.pdf" },
          { label: "Preparation & Application Guide", sub: "Download PDF", href: "https://rezitech.com.au/wp-content/uploads/2023/12/ReziSafe-R230-Top-Coat.pdf" },
          { label: "Product Brochure", sub: "Download PDF", href: "https://rezitech.com.au/wp-content/uploads/2025/10/Rezitech-NanoPrep-Brochure.pdf" },
        ],
      },
    ],
    cta: {
      heading: "Pairing R230 with NanoPrep",
      text: "See how NanoPrep and R230 TopCoat work together to deliver long-term corrosion and UV protection — without abrasive blasting.",
      href: "/products/nanoprep",
      label: "View NanoPrep Rust Primer",
    },
  },
  {
    slug: "belzona-1111",
    metaTitle: "Belzona 1111 (Super Metal) — Metal Repair Composite",
    metaDescription:
      "Belzona 1111 (Super Metal) is a two-part repair composite for metal repair and resurfacing, based on a solvent-free epoxy resin reinforced with silicon steel alloy.",
    breadcrumbLabel: "Belzona 1111 (Super Metal)",
    cardTag: "Metal Repair",
    cardName: "Belzona",
    cardSubtitle: "Composite Metal Repair and Rebuilding Solutions",
    cardSummary:
      "Belzona metal repair composites restore worn, corroded and damaged assets without welding or other hot work. Applied and cured in situ, they rebuild lost metal, restore original profiles and provide durable resistance to corrosion, erosion, impact and chemical attack.",
    cardFeatures: ["No Hot Work", "In-Situ Repair", "Machinable Finish", "Long-Term Protection"],
    cardHref: "https://rezitech.com.au/products/belzona-protective-coatings/",
    cardImage: { src: "/images/Products/Belzona.jpg", alt: "Belzona 1111 being applied to repair corroded structural steel" },
    heroImage: { src: "/images/Products/Belzona.jpg", alt: "Belzona 1111 being applied to repair corroded structural steel" },
    heroTitle: "Belzona 1111 (Super Metal)",
    heroSub:
      "A 2-part repair composite for metal repair and resurfacing, based on solvent-free epoxy resin reinforced with silicon steel alloy.",
    featurePills: ["Solvent-Free", "No Hot Work", "Fully Machinable", "Cures at Room Temperature", "Excellent Corrosion Resistance"],
    blocks: [
      { type: "heading", text: "A multi-purpose metal repair composite" },
      {
        type: "paragraph",
        text: "Belzona 1111 (Super Metal) is a two-part repair composite for metal repair and resurfacing, based on a solvent-free epoxy resin reinforced with silicon steel alloy. This repair material will not corrode and resists a wide range of chemicals. It is easy to mix and apply without the need for specialist tools, and can be machined using conventional tools.",
      },
      {
        type: "highlight",
        lead: "No hot work required:",
        text: "Belzona 1111 is applied and cured at room temperature, eliminating the safety and operational risks associated with welding or other hot work repair methods.",
      },
      {
        type: "videoGroup",
        heading: "Video — Intro to Belzona 1111",
        videos: [{ label: "Intro to Belzona 1111" }, { label: "How to Mix Belzona 1111 by Volume" }],
      },
      {
        type: "videoGroup",
        heading: "Video — How-To Repair Guides",
        videos: [
          { label: "How to Repair a Cracked Engine Block" },
          { label: "How to Repair a Drive Shaft" },
          { label: "How to Rebuild and Enhance a Pump" },
        ],
      },
      { type: "heading", text: "Key benefits" },
      {
        type: "benefitGrid",
        items: [
          { title: "Multi-Purpose & Durable", text: "A durable repair composite suited to a wide range of metal repair applications." },
          { title: "Fully Machinable", text: "Can be machined using conventional tools once cured." },
          { title: "No Hot Work Involved", text: "Applies and cures at room temperature — no welding or hot work required." },
          { title: "Excellent Adhesion", text: "Bonds strongly to stainless steel, carbon steel, aluminium, brass and copper." },
          { title: "Simple Mixing Ratio", text: "Straightforward to mix and apply without specialist tools." },
          { title: "Adheres to Many Materials", text: "Also bonds to many other natural and synthetic materials including glass and wood." },
          { title: "Reduced Health & Safety Risk", text: "Solvent-free formulation reduces health and safety risks on site." },
          { title: "Outstanding Corrosion Resistance", text: "Resists a wide range of chemicals and provides long-term corrosion protection." },
          { title: "No Shrinkage, Expansion or Distortion", text: "Maintains dimensional stability through the curing process." },
          { title: "Excellent Chemical Resistance", text: "Resists a wide range of chemicals for use in demanding industrial environments." },
          { title: "Excellent Electrical Insulation Characteristics", text: "Suitable for applications where electrical insulation properties are required.", fullWidth: true },
        ],
      },
      { type: "heading", text: "Applications for Belzona 1111 (Super Metal) include" },
      {
        type: "list",
        items: [
          "Repair of cracks and holes on engine and pump casings, pipes, tanks and other equipment",
          "Resurfacing of pitted metal surfaces",
          "Repair of damaged shafts and hydraulic rams",
          "In-situ flange repair",
          "High strength structural adhesive for metal bonding",
          "Creation of irregular load bearing shims and reforming of bearing housings",
        ],
      },
      { type: "heading", text: "Potable water certifications" },
      { type: "paragraph", text: "Belzona 1111 meets the following potable water standards:" },
      {
        type: "list",
        items: ["Meets requirements of AS/NZS 4020", "Certified to NSF/ANSI 61", "WRAS Approved Material"],
      },
      { type: "heading", text: "Technical documentation" },
      { type: "paragraph", text: "Full technical specifications, application data and safety information for Belzona 1111 are available directly from Belzona." },
      {
        type: "docLinks",
        items: [{ label: "Product Documentation", sub: "View on Belzona.com", href: "https://www.belzona.com/en/products/1000/1111.aspx" }],
      },
    ],
    cta: {
      heading: "Need a metal repair solution?",
      text: "Speak to a Rezitech specialist about Belzona 1111 for your repair, resurfacing or maintenance application.",
      href: "/contact",
      label: "Enquire Now",
    },
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}
