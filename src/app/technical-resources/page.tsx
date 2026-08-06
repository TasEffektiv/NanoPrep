import PageHeader from "@/components/ui/PageHeader";
import ResourceGroupCard from "@/components/resources/ResourceGroupCard";
import PromoBanner from "@/components/ui/PromoBanner";
import { resourceGroups } from "@/content/technicalResources";
import { buildMetadata } from "@/lib/metadata";
import styles from "./technical-resources.module.css";

export const metadata = buildMetadata({
  title: "Technical Resources",
  description:
    "Technical data sheets, safety data sheets, application notes and instructions for use for NanoPrep and R230 TopCoat.",
  path: "/technical-resources",
});

export default function TechnicalResourcesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Documentation & Downloads"
        title="Technical"
        highlight="Resources"
        sub="Technical data sheets, safety data sheets, application notes and instructions for use — everything you need to specify and apply the NanoPrep system."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Technical Resources" }]}
      />

      <div className={styles.section}>
        <div className={styles.inner}>
          {resourceGroups.map((group) => (
            <ResourceGroupCard key={group.slug} group={group} />
          ))}

          <PromoBanner
            tag="Step-by-Step Guidance"
            heading="See how the NanoPrep system is applied"
            text="Our How To page walks through the full process on site — from surface preparation through to the final topcoat."
            href="/how-to"
            label="Visit the How To Page"
          />
        </div>
      </div>
    </>
  );
}
