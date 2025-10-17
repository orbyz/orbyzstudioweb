import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ORBYZ Studio",
    short_name: "ORBYZ Studio",
    description: "Agencia de Branding, Marketing Digital y Desarrollo Web",
    start_url: "/",
    display: "standalone",
    background_color: "#171717",
    theme_color: "#fff",
    icons: [
      {
        src: "/icon-500x500.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}
