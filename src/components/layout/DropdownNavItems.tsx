"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import type { NavDropdown } from "@/content/navigation";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 10 6" fill="none" aria-hidden="true">
      <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/**
 * Manages all header dropdowns (Products / Case Studies / Technical
 * Resources) as mutually-exclusive client state instead of pure CSS
 * `:hover`/`:focus-within`. With independent `:focus-within` triggers,
 * clicking one link (leaving it focused) and then hovering a sibling
 * satisfied both conditions at once, so multiple dropdowns rendered open
 * simultaneously. A single `openKey` makes that impossible — opening one
 * always implies the others are closed.
 */
export default function DropdownNavItems({ dropdowns }: { dropdowns: NavDropdown[] }) {
  const [openKey, setOpenKey] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  function clearCloseTimer() {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }

  function openNow(key: string) {
    clearCloseTimer();
    setOpenKey(key);
  }

  function closeSoon() {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpenKey(null), 120);
  }

  function renderItem(dropdown: NavDropdown) {
    const key = dropdown.href;
    const isOpen = openKey === key;
    return (
      <li
        key={key}
        className={styles.hasDropdown}
        data-open={isOpen}
        onMouseEnter={() => openNow(key)}
        onMouseLeave={closeSoon}
        onFocus={() => openNow(key)}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget as Node)) {
            setOpenKey(null);
          }
        }}
      >
        <Link href={dropdown.href} prefetch={false} aria-expanded={isOpen}>
          {dropdown.label}
          <ChevronDown className={styles.chevron} />
        </Link>
        <div className={styles.dropdown} data-open={isOpen}>
          <div className={styles.dropdownLabel}>{dropdown.dropdownLabel}</div>
          {dropdown.items.map((item) => (
            <div key={item.href} className={styles.dropdownGroup}>
              <Link href={item.href} prefetch={false} className={styles.dropdownParent}>
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link key={child.href} href={child.href} prefetch={false} className={styles.dropdownChild}>
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </li>
    );
  }

  return <>{dropdowns.map(renderItem)}</>;
}
