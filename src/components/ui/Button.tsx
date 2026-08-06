import Link from "next/link";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "white" | "outlineWhite";

const variantClass: Record<Variant, string> = {
  primary: styles.primary,
  secondary: styles.secondary,
  white: styles.white,
  outlineWhite: styles.outlineWhite,
};

export default function Button({
  href,
  variant = "primary",
  children,
  external,
}: {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  external?: boolean;
}) {
  const className = `${styles.btn} ${variantClass[variant]}`;

  if (external) {
    return (
      <a href={href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
