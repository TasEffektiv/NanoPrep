import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

/**
 * No page in the source site ever specified an Open Graph image, and no
 * per-page photography exists to use as one — so the brand logo is reused
 * as a safe, honest fallback rather than fabricating a hero image.
 */
export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      images: [{ url: siteConfig.logo }],
    },
  };
}
