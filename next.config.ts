import type { NextConfig } from "next";

/**
 * Static export: this is a purely static marketing site with no server-side
 * data, auth, or API routes — every "form" is a client-side demo (matching
 * the source, which never wired any form to a backend). Static export lets
 * Netlify serve prebuilt HTML/CSS/JS with no server runtime required.
 *
 * Because output:"export" has no server, legacy `.html` redirects and the
 * on-demand Image Optimization API can't run through Next's server-side
 * redirects()/Image APIs — `images.unoptimized` is required for `next/image`
 * to work at all under static export. Redirects are handled declaratively
 * by Netlify instead (see netlify.toml). All images are now downloaded and
 * served locally from `public/images/` (previously hotlinked from
 * i.ibb.co / rezitech.com.au — see CHANGELOG.md "Self-host all images"),
 * so no `images.remotePatterns` allowlist is needed.
 * See ARCHITECTURE.md "Static generation decisions".
 */
const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
