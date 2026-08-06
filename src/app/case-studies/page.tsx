import PageHeader from "@/components/ui/PageHeader";
import IndustryFilter from "@/components/case-studies/IndustryFilter";
import { caseStudies } from "@/content/caseStudies";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "Case Studies — NanoPrep",
  description:
    "Real-world applications of NanoPrep across industry — corrosion protection without blasting, in the environments where it matters most.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="NanoPrep in the Field"
        title="Case"
        highlight="Studies"
        sub="Real-world applications of NanoPrep across industry — corrosion protection without blasting, in the environments where it matters most."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Case Studies" }]}
        image={{ src: "/images/case-studies/Case studies.jpg", alt: "Corroded structural steel beams coated red" }}
      />
      <IndustryFilter caseStudies={caseStudies} />
    </>
  );
}
