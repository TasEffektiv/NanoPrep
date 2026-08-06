import PageHeader from "@/components/ui/PageHeader";
import HowToLibrary from "@/components/how-to/HowToLibrary";
import { howToCategories } from "@/content/howToGuides";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
  title: "How To Resources",
  description: "Step-by-step guides for applying NanoPrep and compatible systems in the field.",
  path: "/how-to",
});

export default function HowToResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Guides & Applications"
        title="How To"
        highlight="Resources"
        sub="Step-by-step guides for applying NanoPrep and compatible systems in the field."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "How To Resources" }]}
      />
      <HowToLibrary categories={howToCategories} />
    </>
  );
}
