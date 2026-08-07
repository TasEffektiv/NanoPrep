export const siteConfig = {
  name: "NanoPrep",
  legalName: "Rezitech Services Pty Ltd",
  url: "https://www.nanoprep.com.au",
  description:
    "NanoPrep is an environmentally friendly rust primer and anticorrosive industrial coating that reacts with rusted, painted and exposed steel. No grit blasting required!",
  logo: "/images/logo.webp",
  logoWhite: "/images/nanoprep-logo-white.webp",
  social: {
    facebook: "https://www.facebook.com/rezitechservices",
    instagram: "https://www.instagram.com/rezitechservices/",
    linkedin: "https://au.linkedin.com/company/rezitech-services-pty-ltd",
    youtube: "https://www.youtube.com/@rezitechservices1219",
  },
  builtBy: {
    name: "EffektivWeb",
    url: "https://www.effektivweb.com.au/",
  },
} as const;

/**
 * Decoded from the Cloudflare email-obfuscation markup in the original
 * index.html (`data-cfemail="acc5c2..."`). Cloudflare's decode script is not
 * available on Netlify, so the address is restored here as a plain mailto link.
 */
export const contactInfo = {
  email: "info@rezitech.com.au",
  phone: "03 8720 8600",
  phoneHref: "tel:+61387208600",
  office: "Rezitech Services Pty Ltd, Australia",
} as const;

export const offices = [
  {
    name: "Head Office & Hallam Workshop",
    addressLines: ["109-111 Wedgewood Road", "Hallam", "VIC", "3803"],
    phone: "+61 3 8720 8600",
    phoneHref: "tel:+61387208600",
    email: contactInfo.email,
    mapQuery: "109-111 Wedgewood Road, Hallam VIC 3803, Australia",
    mapLink: "https://maps.app.goo.gl/AdZ7KzS7VzFiguha6",
  },
  {
    name: "Townsville Office & Workshop",
    addressLines: ["35 Innovation Ave", "Bohle", "QLD", "4818"],
    phone: "+61 7 4774 6077",
    phoneHref: "tel:+61747746077",
    email: contactInfo.email,
    mapQuery: "35 Innovation Ave, Bohle QLD 4818, Australia",
    mapLink: "https://maps.app.goo.gl/2vfKt8NUKdY95Hcy6",
  },
] as const;
