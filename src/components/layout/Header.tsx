import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";
import MobileMenu from "./MobileMenu";
import ScrollProgress from "./ScrollProgress";
import DropdownNavItems from "./DropdownNavItems";
import {
  primaryNav,
  productsDropdown,
  caseStudiesDropdown,
  technicalResourcesDropdown,
  newsNavLink,
  contactCta,
} from "@/content/navigation";
import { siteConfig } from "@/content/site";

export default function Header() {
  return (
    <nav className={styles.nav} aria-label="Primary">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label={`${siteConfig.name} home`} prefetch={false}>
          <Image src={siteConfig.logo} alt={siteConfig.name} width={191} height={90} priority />
        </Link>

        <ul className={styles.links}>
          {primaryNav.map((link) => (
            <li key={link.href}>
              <Link href={link.href} prefetch={false}>
                {link.label}
              </Link>
            </li>
          ))}

          <DropdownNavItems dropdowns={[productsDropdown, caseStudiesDropdown]} />

          <li>
            <Link href={newsNavLink.href} prefetch={false}>
              {newsNavLink.label}
            </Link>
          </li>

          <DropdownNavItems dropdowns={[technicalResourcesDropdown]} />

          <li>
            <Link href={contactCta.href} className={styles.cta} prefetch={false}>
              {contactCta.label}
            </Link>
          </li>
        </ul>

        <MobileMenu
          primaryNav={primaryNav}
          productsDropdown={productsDropdown}
          caseStudiesDropdown={caseStudiesDropdown}
          technicalResourcesDropdown={technicalResourcesDropdown}
          newsNavLink={newsNavLink}
          contactCta={contactCta}
        />
      </div>
      <ScrollProgress />
    </nav>
  );
}
