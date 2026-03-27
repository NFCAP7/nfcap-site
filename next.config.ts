import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  basePath: "/nfcap-site",
  assetPrefix: "/nfcap-site/",
};

export default nextConfig;