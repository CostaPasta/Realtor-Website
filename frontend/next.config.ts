import type { NextConfig } from "next";
import path from "path";
import { shortLinkRedirects } from "./short-links";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    // Most visitors are first-time; inlining Tailwind's small stylesheet removes a
    // render-blocking request.
    inlineCss: true,
  },
  async redirects() {
    return shortLinkRedirects();
  },
};

export default nextConfig;
