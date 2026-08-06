"use client";

import { useState } from "react";
import Link from "next/link";
import styles from "./MobileMenu.module.css";
import type { NavDropdown, NavLink } from "@/content/navigation";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NavGroup({
  dropdown,
  expanded,
  onToggle,
  onNavigate,
}: {
  dropdown: NavDropdown;
  expanded: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  return (
    <>
      <div className={styles.groupRow}>
        <Link href={dropdown.href} className={styles.groupLink} prefetch={false} onClick={onNavigate}>
          {dropdown.label}
        </Link>
        <button
          type="button"
          className={styles.groupToggle}
          aria-expanded={expanded}
          aria-label={`${expanded ? "Collapse" : "Expand"} ${dropdown.label} menu`}
          onClick={onToggle}
        >
          <ChevronDown className={`${styles.chevron} ${expanded ? styles.chevronOpen : ""}`} />
        </button>
      </div>
      {expanded && (
        <div className={styles.subGroup}>
          <span className={styles.groupLabel}>{dropdown.dropdownLabel}</span>
          {dropdown.items.map((item) => (
            <div key={item.href}>
              <Link href={item.href} className={styles.subLinkParent} prefetch={false} onClick={onNavigate}>
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link
                  key={child.href}
                  href={child.href}
                  className={styles.subLinkChild}
                  prefetch={false}
                  onClick={onNavigate}
                >
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default function MobileMenu({
  primaryNav,
  productsDropdown,
  caseStudiesDropdown,
  technicalResourcesDropdown,
  newsNavLink,
  contactCta,
}: {
  primaryNav: NavLink[];
  productsDropdown: NavDropdown;
  caseStudiesDropdown: NavDropdown;
  technicalResourcesDropdown: NavDropdown;
  newsNavLink: NavLink;
  contactCta: NavLink;
}) {
  const [open, setOpen] = useState(false);
  const [expandedGroup, setExpandedGroup] = useState<"products" | "case-studies" | "technical-resources" | null>(
    null,
  );

  function closeMenu() {
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={open}
        aria-controls="mobile-menu-panel"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        )}
      </button>

      <div id="mobile-menu-panel" className={`${styles.panel} ${open ? styles.open : ""}`}>
        <nav className={styles.panelInner} aria-label="Mobile">
          {primaryNav.map((link) => (
            <Link key={link.href} href={link.href} className={styles.link} prefetch={false} onClick={closeMenu}>
              {link.label}
            </Link>
          ))}

          <NavGroup
            dropdown={productsDropdown}
            expanded={expandedGroup === "products"}
            onToggle={() => setExpandedGroup((prev) => (prev === "products" ? null : "products"))}
            onNavigate={closeMenu}
          />

          <NavGroup
            dropdown={caseStudiesDropdown}
            expanded={expandedGroup === "case-studies"}
            onToggle={() => setExpandedGroup((prev) => (prev === "case-studies" ? null : "case-studies"))}
            onNavigate={closeMenu}
          />

          <Link href={newsNavLink.href} className={styles.link} prefetch={false} onClick={closeMenu}>
            {newsNavLink.label}
          </Link>

          <NavGroup
            dropdown={technicalResourcesDropdown}
            expanded={expandedGroup === "technical-resources"}
            onToggle={() =>
              setExpandedGroup((prev) => (prev === "technical-resources" ? null : "technical-resources"))
            }
            onNavigate={closeMenu}
          />

          <Link href={contactCta.href} className={styles.cta} prefetch={false} onClick={closeMenu}>
            {contactCta.label}
          </Link>
        </nav>
      </div>
    </>
  );
}
