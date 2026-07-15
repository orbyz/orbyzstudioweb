import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      // Portadas por defecto de Notion (como solid_red.png)
      { protocol: "https", hostname: "app.notion.com" },
      { protocol: "https", hostname: "www.notion.so" },
      // Imágenes subidas dentro de las páginas de Notion (URLs firmadas de S3)
      { protocol: "https", hostname: "prod-files-secure.s3.us-west-2.amazonaws.com" },
      { protocol: "https", hostname: "s3.us-west-2.amazonaws.com" },
      // Imágenes de portada tomadas de Unsplash directo desde Notion
          { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
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
