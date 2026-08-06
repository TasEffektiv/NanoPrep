export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[];
}

export interface NavDropdown {
  label: string;
  href: string;
  dropdownLabel: string;
  items: NavLink[];
}

/**
 * The source site shipped two incompatible header variants: the "product"
 * family (about.html, products.html, product-*.html) showed a Products
 * dropdown with no Services link, while the "case study" family
 * (nanoprep-case-studies.html, case-study-*.html) showed a dead "Services"
 * link (services.html was never provided) with no Products dropdown.
 * index.html had a third variant with dead "#services" and "News" (#) links.
 *
 * There was never any Services content anywhere in the source site, so that
 * dead link has been dropped here rather than preserved as a link to
 * nothing. News later gained real content (see content/news.ts) and a
 * working `/news` route, so unlike Services it now has a live nav entry.
 * Both dropdowns (Products + Case Studies) are combined into one canonical
 * header used across every route. See DESIGN.md.
 */
export const productsDropdown: NavDropdown = {
  label: "Products",
  href: "/products",
  dropdownLabel: "NanoPrep Products",
  items: [
    { label: "NanoPrep — Rust Primer & Anticorrosive Coating", href: "/products/nanoprep" },
    { label: "NanoPrep — R230 TopCoat", href: "/products/r230-topcoat" },
  ],
};

export const caseStudiesDropdown: NavDropdown = {
  label: "Case Studies",
  href: "/case-studies",
  dropdownLabel: "All Case Studies",
  items: [
    { label: "Pipework Corrosion Protection", href: "/case-studies/pipework" },
    { label: "Fuel Tank Corrosion Protection", href: "/case-studies/fuel-tank" },
    { label: "External Coating of Ash Hopper", href: "/case-studies/ash-hopper" },
    { label: "Water Tank — Power Plant", href: "/case-studies/water-tank-power" },
    { label: "Eco-Friendly Pylon Protection", href: "/case-studies/pylon" },
    { label: "Overhead Crane Restoration", href: "/case-studies/crane" },
    { label: "Structural Steel Column", href: "/case-studies/steel-column" },
    { label: "Water Tank Corrosion Protection", href: "/case-studies/water-tank" },
  ],
};

export const primaryNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About NanoPrep", href: "/about" },
];

export const technicalResourcesDropdown: NavDropdown = {
  label: "Technical Resources",
  href: "/technical-resources",
  dropdownLabel: "Documentation & Guides",
  items: [
    {
      label: "How To",
      href: "/how-to",
      children: [{ label: "How to Apply NanoPrep", href: "/how-to/apply-nanoprep" }],
    },
  ],
};

export const newsNavLink: NavLink = { label: "News", href: "/news" };

export const contactCta: NavLink = { label: "Contact Us", href: "/contact" };

export const footerNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About NanoPrep", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "News", href: "/news" },
  { label: "Technical Resources", href: "/technical-resources" },
  { label: "How To Resources", href: "/how-to" },
  { label: "Contact Us", href: "/contact" },
];

export const footerProductLinks: NavLink[] = [
  { label: "Rust Primer & Anticorrosive Coating", href: "/products/nanoprep" },
  { label: "R230 TopCoat", href: "/products/r230-topcoat" },
];

/**
 * No dedicated Privacy Policy / Terms page exists yet (the source site's
 * equivalent links were also `href="#"` placeholders in its footer bottom
 * bar) — kept as placeholder anchors here, grouped under a "Legal" column
 * instead of sitting loose in the copyright bar.
 */
export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms and Conditions", href: "#" },
];
