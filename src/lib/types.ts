/** Shared "rich content" block model used by product and case-study detail pages. */

export interface BenefitItem {
  title: string;
  text: string;
  fullWidth?: boolean;
}

export interface StepItem {
  title: string;
  text: string;
}

export interface DocLinkItem {
  label: string;
  sub: string;
  href: string;
}

export interface VideoItem {
  label: string;
}

export type ContentBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt: string; width: number; height: number }
  | { type: "highlight"; lead?: string; text: string }
  | { type: "benefitGrid"; items: BenefitItem[] }
  | { type: "steps"; items: StepItem[] }
  | { type: "docLinks"; items: DocLinkItem[] }
  | { type: "videoGroup"; heading: string; videos: VideoItem[] };

export interface GalleryImage {
  caption: string;
  src?: string;
  alt?: string;
}

export type ArticleBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "highlight"; text: string }
  | { type: "articleImage"; src: string; alt: string; caption?: string }
  | {
      type: "imageGroup";
      variant: "before" | "during" | "after" | "plain";
      badgeLabel?: string;
      heading?: string;
      images: GalleryImage[];
      showCaptions?: boolean;
      imageAspectRatio?: string;
    }
  | { type: "photoGallery"; images: { src: string; alt: string }[]; caption: string }
  | { type: "inlineVideo"; heading: string; label: string; caption: string; videoId?: string }
  | {
      type: "textVideoSplit";
      content: Array<{ type: "heading"; text: string } | { type: "paragraph"; text: string }>;
      video: { heading: string; label: string; caption: string; videoId?: string };
    }
  | { type: "featuredVideo"; label: string; caption: string; videoId?: string }
  | { type: "testimonial"; quote: string; attribution: string }
  | { type: "specTable"; rows: { label: string; value: string }[] };
