import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@styles/globals.css";
import Navbar from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import { CookieBanner } from "@/features/cookies/CookieBanner";

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
});

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.orbyzstudio.dev"),

  title: {
    default: "OrByZ Studio | Desarrollo Web y Marketing Digital",
    template: "%s | OrByZ Studio",
  },

  description:
    "Creamos webs y sistemas digitales que generan clientes. Desarrollo, diseño y marketing enfocados en resultados reales.",

  keywords: [
    "desarrollo web",
    "agencia digital",
    "marketing digital",
    "diseño web",
    "SEO",
    "España",
    "Valencia",
  ],

  authors: [{ name: "OrByZ Studio" }],
  creator: "OrByZ Studio",

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://www.orbyzstudio.dev",
  },

  openGraph: {
    type: "website",
    url: "https://www.orbyzstudio.dev",
    siteName: "OrByZ Studio",
    title: "OrByZ Studio | Desarrollo Web y Marketing Digital",
    description:
      "Creamos webs y sistemas digitales que generan clientes. Diseño, desarrollo y marketing orientados a resultados.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "OrByZ Studio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "OrByZ Studio | Desarrollo Web y Marketing Digital",
    description: "Creamos webs y sistemas digitales que generan clientes.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={sora.className}>
      <body className={`${sora.variable} max-h-screen antialiased`}>
        <Navbar />
        {children}
        <Footer />
        <CookieBanner />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
