import type { ArticleBlock } from "@/lib/types";

export interface NewsItem {
  slug: string;
  tag: string;
  tagVariant: "media" | "category";
  date: string;
  dateShort: string;
  title: string;
  excerpt: string;
  href: string;
  image?: { src: string; alt: string };
  metaTitle?: string;
  metaDescription?: string;
  blocks?: ArticleBlock[];
  byline?: { publication: string; edition: string };
  metaFields?: { label: string; value: string }[];
  relatedCaseStudies?: string[];
}

export const newsItems: NewsItem[] = [
  {
    slug: "nanoprep-fuel-tank-journal-feature",
    tag: "Media Feature",
    tagVariant: "media",
    date: "June 2026",
    dateShort: "JUN 2026",
    title: "NanoPrep Fuel Tank Project Featured in the Journal of Surface Coatings Australia",
    excerpt:
      "Rezitech’s NanoPrep fuel tank corrosion protection project has been featured in the June 2026 edition of the Journal of Surface Coatings Australia. The article outlines how NanoPrep was used to prepare and protect a 110,000-litre above-ground diesel tank without abrasive blasting, helping reduce surface preparation time, minimise disruption and deliver durable corrosion and UV protection in a demanding coastal environment.",
    href: "/news/nanoprep-fuel-tank-journal-feature",
    image: {
      src: "/images/news/nanoprep-fuel-tank-journal-feature.webp",
      alt: "NanoPrep fuel tank corrosion protection case study, as featured in the Journal of Surface Coatings Australia",
    },
    metaTitle: "NanoPrep Fuel Tank Project Featured in the Journal of Surface Coatings Australia",
    metaDescription:
      "Rezitech’s NanoPrep fuel tank corrosion protection project has been featured in the June 2026 edition of the Journal of Surface Coatings Australia.",
    byline: { publication: "Journal of Surface Coatings Australia", edition: "June 2026 edition" },
    metaFields: [
      { label: "Publication", value: "Journal of Surface Coatings Australia" },
      { label: "Edition", value: "June 2026" },
      { label: "Industry", value: "Oil & Gas" },
      { label: "Product", value: "NanoPrep" },
      { label: "Location", value: "Qld, Australia" },
      { label: "Applied", value: "Oct 2025" },
    ],
    relatedCaseStudies: ["fuel-tank-corrosion-protection-without-blasting", "water-tank-corrosion-protection", "pipework-corrosion-protection-without-blasting"],
    blocks: [
      {
        type: "articleImage",
        src: "/images/news/nanoprep-fuel-tank-journal-feature.webp",
        alt: "The NanoPrep fuel tank case study as printed across a two-page spread in the Journal of Surface Coatings Australia",
        caption:
          "The NanoPrep fuel tank case study as it appears across a two-page spread in the June 2026 Journal of Surface Coatings Australia.",
      },
      { type: "heading", text: "The problem" },
      {
        type: "paragraph",
        text: "A 110,000-litre above-ground carbon-steel diesel tank in Queensland required a high-performance anticorrosive coating system. Year-round rain and condensation create a high risk of under-film and crevice corrosion, especially at saddle supports and tank-to-concrete interfaces.",
      },
      {
        type: "paragraph",
        text: "The coastal environment adds airborne chlorides which accelerate corrosion, while continuous sunlight and elevated surface temperatures demand a UV-stable, heat-tolerant topcoat to prevent premature coating degradation. Given the limited clearance beneath the tank and the presence of adjoining critical infrastructure, abrasive blasting for surface preparation was not feasible — an alternative method was required.",
      },
      {
        type: "articleImage",
        src: "/images/news/fuel-tank-coastal-setting.webp",
        alt: "The above-ground diesel storage tanks in their coastal Queensland setting",
        caption: "The above-ground diesel storage tanks in their coastal Queensland setting.",
      },
      { type: "heading", text: "The application" },
      {
        type: "paragraph",
        text: "NanoPrep was chosen as the preferred surface-preparation method since it offers an effective, long-lasting, low-cost alternative to abrasive blasting — using a simple low-pressure power wash (3,500 psi) combined with power-tool cleaning. NanoPrep's unique technology allows it to penetrate deep into existing painted surfaces for high adhesion, and it acts as a tie coat for many compatible topcoats.",
      },
      {
        type: "photoGallery",
        images: [
          { src: "/images/news/fuel-tank-pressure-wash.webp", alt: "Low-pressure washing the diesel tank before coating" },
          { src: "/images/news/fuel-tank-roller-application.webp", alt: "NanoPrep applied by roller to the tank surface" },
          { src: "/images/news/fuel-tank-underside-application.webp", alt: "NanoPrep applied to the tight, difficult-to-access area beneath the tank" },
        ],
        caption:
          "Low-pressure washing and application of NanoPrep by roller, including tight, difficult-to-access areas beneath the tank.",
      },
      {
        type: "paragraph",
        text: "NanoPrep eliminates the need for abrasive blasting, enabling surface preparation via a simple low-pressure wash. It applies easily by roller, brush or airless spray and is well suited to tight or difficult-to-access areas.",
      },
      {
        type: "photoGallery",
        images: [
          { src: "/images/news/fuel-tank-primer-ends.webp", alt: "NanoPrep applied to the tank ends" },
          { src: "/images/news/fuel-tank-primer-angle.webp", alt: "NanoPrep applied across the tank surfaces" },
          { src: "/images/news/fuel-tank-aerial-catwalk.webp", alt: "Aerial view of NanoPrep applied across both tanks" },
        ],
        caption: "Progressive application of the NanoPrep anticorrosive coating across the tank surfaces.",
      },
      {
        type: "highlight",
        text: "Upon application of NanoPrep to the substrate, Nanofusion takes place — enabling deep penetration into the rusted substrate to create a stable, high-bond-strength base suitable for non-solvent or low-solvent topcoats.",
      },
      { type: "heading", text: "The outcome" },
      {
        type: "paragraph",
        text: "NanoPrep enabled effective surface preparation using low-pressure washing and power-tool cleaning, avoiding the excessive cost and downtime of abrasive blasting.",
      },
      {
        type: "paragraph",
        text: "The coating system delivered strong adhesion and robust corrosion resistance at saddle supports and tank-to-concrete interfaces, and a compatible UV-stable, heat-tolerant topcoat suited to Queensland conditions was successfully applied. The outcome is extended service life, protected fuel quality, and simpler future maintenance.",
      },
      {
        type: "articleImage",
        src: "/images/news/fuel-tank-completed.webp",
        alt: "The completed tanks, protected with NanoPrep and a compatible UV-stable topcoat",
        caption: "The completed tanks, protected with NanoPrep and a compatible UV-stable topcoat.",
      },
    ],
  },
  {
    slug: "fuel-tank-corrosion-protection",
    tag: "Oil & Gas",
    tagVariant: "category",
    date: "October 2025",
    dateShort: "OCT 2025",
    title: "Fuel Tank Corrosion Protection Without Blasting",
    excerpt:
      "A 110,000-litre above-ground carbon-steel diesel tank in Queensland received a high-performance anticorrosive system — prepared and protected without grit blasting.",
    href: "/case-studies/fuel-tank-corrosion-protection-without-blasting",
    image: { src: "/images/case-studies/fuel-tank.webp", alt: "Fuel Tank Corrosion Protection" },
  },
  {
    slug: "water-tank-power-plant",
    tag: "Power",
    tagVariant: "category",
    date: "May 2026",
    dateShort: "MAY 2026",
    title: "Water Tank Corrosion Protection — Power Plant",
    excerpt:
      "A power plant's water tank required corrosion repair and a durable protective coating, delivered without surface preparation by abrasive blasting.",
    href: "/case-studies/water-tank-corrosion-protection",
    image: { src: "/images/case-studies/water-tank-power.webp", alt: "Water Tank Corrosion Protection" },
  },
  {
    slug: "pipework-corrosion-protection",
    tag: "Oil & Gas",
    tagVariant: "category",
    date: "June 2025",
    dateShort: "JUN 2025",
    title: "Pipework Corrosion Protection Without Blasting",
    excerpt:
      "An offshore facility needed pipework remediation where blasting wasn't possible. NanoPrep delivered a compliant solution without operational shutdown.",
    href: "/case-studies/pipework-corrosion-protection-without-blasting",
    image: { src: "/images/case-studies/pipework.webp", alt: "Pipework Corrosion Protection" },
  },
  {
    slug: "ash-hopper-coating",
    tag: "Power",
    tagVariant: "category",
    date: "January 2025",
    dateShort: "JAN 2025",
    title: "External Coating of Ash Hopper",
    excerpt:
      "A power station's ash hopper had degrading coating and required a new corrosion protection system — applied by NanoPrep without abrasive blasting.",
    href: "/case-studies/external-coating-of-ash-hopper",
    image: { src: "/images/case-studies/ash-hopper.webp", alt: "Ash Hopper Coating" },
  },
  {
    slug: "pylon-corrosion-protection",
    tag: "Marine",
    tagVariant: "category",
    date: "December 2024",
    dateShort: "DEC 2024",
    title: "Eco-Friendly Pylon Corrosion Protection",
    excerpt:
      "NanoPrep provided an eco-friendly surface preparation and corrosion protection solution for pylons in a sensitive tidal marine environment.",
    href: "/case-studies/eco-friendly-solution-for-pylon-corrosion-protection",
    image: { src: "/images/case-studies/pylon.webp", alt: "Pylon Corrosion Protection" },
  },
  {
    slug: "overhead-crane-restoration",
    tag: "Pulp & Paper",
    tagVariant: "category",
    date: "December 2024",
    dateShort: "DEC 2024",
    title: "Overhead Crane Restoration",
    excerpt:
      "A heavily corroded overhead crane in an active production plant was prepared and protected with NanoPrep — no abrasive blasting required.",
    href: "/case-studies/overhead-crane-restoration",
    image: { src: "/images/case-studies/crane.webp", alt: "Overhead Crane Restoration" },
  },
];

export function getNewsItem(slug: string) {
  return newsItems.find((item) => item.slug === slug);
}
