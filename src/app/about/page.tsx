import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import { siteConfig } from "@/content/site";
import { buildMetadata } from "@/lib/metadata";
import styles from "./about.module.css";

export const metadata = buildMetadata({
  title: "About NanoPrep & Rezitech",
  description:
    "NanoPrep is manufactured and distributed by Rezitech, an Australian-owned company with more than 50 years of experience in industrial maintenance and protective coatings.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="About"
        highlight="NanoPrep"
        sub="NanoPrep is manufactured and distributed by Rezitech, an Australian-owned company with more than 50 years of experience in industrial maintenance and protective coatings."
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About NanoPrep" }]}
        image={{ src: "/images/about/About us banner.png", alt: "About us banner" }}
        style={{ minHeight: 300, height: 300 }}
      />

      <section className={styles.section}>
        <div className={styles.inner}>
          <div className={styles.heritagePanel}>
            <h2>NanoPrep — born from real-world experience</h2>
            <p>
              NanoPrep was developed specifically for environments where traditional surface preparation — grit
              blasting, sandblasting, or chemical stripping — is impractical, hazardous, or simply not possible. It
              reacts chemically with rusted, painted and bare steel to form a stable, bonded anticorrosive layer,
              with no need to blast to bare metal and no hazardous waste stream.
            </p>
            <p>
              NanoPrep is backed by Rezitech&apos;s decades of hands-on experience in industrial maintenance,
              corrosion protection, and Belzona repair systems — giving NanoPrep customers the confidence of a
              product developed and supported by a team that genuinely understands the conditions assets face in the
              field.
            </p>
          </div>

          <div className={styles.introRow}>
            <div className={styles.intro}>
              <p>
                With more than five decades&apos; experience, Rezitech Services Pty Ltd has built a strong reputation
                as a leader in industrial maintenance solutions and corrosion protection technology. Recognised as
                one of Australia&apos;s most versatile engineering companies, Rezitech takes pride in its
                long-standing commitment to quality and service.
              </p>
              <p>
                Rezitech is a <strong>100% Australian privately owned company</strong>, founded in 1968. NanoPrep was
                developed by Rezitech as a direct response to a problem the team saw repeatedly on site — corrosion
                protection projects being delayed, scoped back, or abandoned altogether because abrasive blasting
                wasn&apos;t possible or affordable. NanoPrep is the result of that experience: a proven, field-tested
                alternative built specifically for the conditions Rezitech&apos;s clients work in every day.
              </p>
              <p>
                Rezitech has proudly served as a <strong>Belzona distributor for over 50 years</strong>, delivering
                trusted products and services that repair and protect critical assets. Solutions are applied across a
                wide range of industries, including building and infrastructure, marine, mining, oil and gas,
                petrochemical, power generation, pulp and paper, steel, sugar, and water and wastewater — the same
                industries NanoPrep is built for.
              </p>
              <p>
                Operating fully equipped workshops in Hallam, Victoria, and Townsville, North Queensland, Rezitech
                services clients nationwide and extends its reach across New Zealand and Papua New Guinea — meaning
                NanoPrep application and support is never far away, wherever the job is.
              </p>
            </div>
            <div className={styles.introMedia}>
              <Image
                src="/images/about/NanoPrep.jpg"
                alt="NanoPrep applied by spray to the roof of a large steel storage tank"
                width={1063}
                height={1121}
              />
              <div className={styles.introBadge}>
                <Image
                  src="/images/about/Authorised Distributor Belzona.png"
                  alt="Belzona — Repair, Protect, Improve — Authorised Distributor"
                  width={1897}
                  height={1010}
                />
              </div>
            </div>
          </div>

          <div className={styles.statsStrip}>
            <div className={styles.stat}>
              <div className={styles.statNum}>1968</div>
              <div className={styles.statLabel}>Founded — Over 5 Decades of Experience</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>100%</div>
              <div className={styles.statLabel}>Australian Owned &amp; Operated</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNum}>2</div>
              <div className={styles.statLabel}>Workshops — Hallam VIC &amp; Townsville QLD</div>
            </div>
          </div>

          <div className={styles.closingPanel}>
            <Image src={siteConfig.logo} alt={siteConfig.name} width={160} height={76} />
            <h3>Leaders in Industrial Maintenance Solutions and Corrosion Protection Technology.</h3>
            <Link href="/contact" className={styles.closingCta}>
              Request a Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
