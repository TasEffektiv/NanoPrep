export interface HowToGuide {
  slug: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  href: string;
}

export interface HowToCategory {
  name: string;
  guides: HowToGuide[];
}

export const howToCategories: HowToCategory[] = [
  {
    name: "NanoPrep Application",
    guides: [
      {
        slug: "apply-nanoprep",
        title: "How to Apply NanoPrep",
        description:
          "A complete step-by-step guide to preparing tight rust, mixing NanoPrep and building up coats — from surface preparation through to the compatible finishing topcoat.",
        image: {
          src: "/images/about/NanoPrep.jpg",
          alt: "Technician applying NanoPrep by spray to the roof of a large steel storage tank",
        },
        href: "/how-to/apply-nanoprep",
      },
    ],
  },
];
