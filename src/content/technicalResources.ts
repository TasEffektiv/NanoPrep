export type ResourceIcon = "document" | "list" | "shield" | "book";

export interface ResourceItem {
  label: string;
  sub: string;
  icon: ResourceIcon;
  href: string;
}

export interface ResourceGroup {
  slug: string;
  name: string;
  tag: string;
  description: string;
  items: ResourceItem[];
}

export const resourceGroups: ResourceGroup[] = [
  {
    slug: "nanoprep",
    name: "NanoPrep",
    tag: "Primer",
    description: "Rust primer & anticorrosive coating — application guidance, specifications and safety information.",
    items: [
      {
        label: "Application Tech Notes",
        sub: "PDF Document",
        icon: "document",
        href: "https://rezitech.com.au/wp-content/uploads/2025/09/NanoPrep-Application-Notes-2025.pdf",
      },
      {
        label: "Instructions for Use",
        sub: "PDF Document",
        icon: "list",
        href: "https://rezitech.com.au/wp-content/uploads/2025/10/NanoPrep-Instructions-For-Use-2025.pdf",
      },
      {
        label: "Technical Data Sheet (TDS)",
        sub: "PDF Document",
        icon: "document",
        href: "https://rezitech.com.au/wp-content/uploads/2025/10/NanoPrep-TDS-2025.pdf",
      },
      {
        label: "Safety Data Sheet (SDS)",
        sub: "PDF Document",
        icon: "shield",
        href: "https://rezitech.com.au/wp-content/uploads/2025/09/NanoPrep-SDS-2023.pdf",
      },
      {
        label: "The NanoPrep Solution to Under-Film Corrosion",
        sub: "Technical Article · PDF",
        icon: "book",
        href: "https://rezitech.com.au/wp-content/uploads/2023/12/NanoPrep-the-solution-to-under-film-corrosion.pdf",
      },
    ],
  },
  {
    slug: "r230-topcoat",
    name: "R230 TopCoat",
    tag: "Topcoat",
    description: "Mid-gloss waterbased industrial topcoat — the approved finishing system for NanoPrep.",
    items: [
      {
        label: "Safety Data Sheet (SDS)",
        sub: "PDF Document",
        icon: "shield",
        href: "https://rezitech.com.au/wp-content/uploads/2023/12/Rezisafe-R230-Topcoat-SDS.pdf",
      },
    ],
  },
];
