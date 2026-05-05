import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "orbyzstudio.dev",
          },
        ],
        destination: "https://www.orbyzstudio.dev/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
