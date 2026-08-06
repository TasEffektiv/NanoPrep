import Link from "next/link";

export default function NotFound() {
  return (
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "96px 40px", textAlign: "center" }}>
      <h1 style={{ fontFamily: "var(--font-head)", fontSize: 40, marginBottom: 16 }}>Page not found</h1>
      <p style={{ color: "var(--muted)", marginBottom: 24 }}>
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link href="/" style={{ color: "var(--green2)", fontWeight: 600 }}>
        Return to the homepage
      </Link>
    </div>
  );
}
