import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ORBYZ Studio Web",
    short_name: "ORBYZ Studio Web",
    description:
      "Brandig, Web Development, Digital Marketing, SEO, Social Media Marketing, Cyber Security",
    start_url: "/",
    display: "standalone",
    background_color: "#171717",
    theme_color: "#fff",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
