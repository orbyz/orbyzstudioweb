import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "OrByZ Studio",
    short_name: "OrByZ",
    description:
      "Agencia digital especializada en branding, marketing digital y desarrollo web.",
    start_url: "/",
    display: "standalone",
    background_color: "#171717",
    theme_color: "#CEF009",
    icons: [
      {
        src: "/logo.png",
        sizes: "500x500",
        type: "image/png",
      },
    ],
  };
}
