import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";
import { footerNavLinks, footerProductLinks, footerLegalLinks } from "@/content/navigation";
import { siteConfig, contactInfo } from "@/content/site";

const socialLinks = [
  { name: "Facebook", href: siteConfig.social.facebook, icon: "/images/social-media/facebook.png" },
  { name: "Instagram", href: siteConfig.social.instagram, icon: "/images/social-media/instagram.png" },
  { name: "LinkedIn", href: siteConfig.social.linkedin, icon: "/images/social-media/linkedin.png" },
  { name: "YouTube", href: siteConfig.social.youtube, icon: "/images/social-media/youtube.png" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image src={siteConfig.logoWhite} alt={siteConfig.name} width={480} height={477} />
          <p>
            An Australian-developed corrosion protection technology from {siteConfig.legalName}. Field-proven across
            mining, oil &amp; gas, marine, water and manufacturing sectors.
          </p>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.contactLabel}>Email</span>
              <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
            </li>
            <li>
              <span className={styles.contactLabel}>Phone</span>
              <a href={contactInfo.phoneHref}>{contactInfo.phone}</a>
            </li>
            <li>
              <span className={styles.contactLabel}>Office</span>
              <span>{contactInfo.office}</span>
            </li>
          </ul>
          <div className={styles.social}>
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <Image src={link.icon} alt="" width={22} height={22} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <div className={styles.col}>
          <h2>Navigation</h2>
          <ul>
            {footerNavLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h2>Products</h2>
          <ul>
            {footerProductLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h2>Legal</h2>
          <ul>
            {footerLegalLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {year} {siteConfig.legalName}. All rights reserved. NanoPrep is an Australian-developed product.
        </p>
        <div className={styles.bottomLinks}>
          <a href={siteConfig.builtBy.url} target="_blank" rel="noopener noreferrer">
            Built by {siteConfig.builtBy.name}
          </a>
        </div>
      </div>
    </footer>
  );
}
