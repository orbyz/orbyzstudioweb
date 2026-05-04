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
  weight: "400",
  display: "swap",
  variable: "--font-sora",
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.orbyzstudio.dev"),
  title: {
    default: "ORBYZ Studio | Agencia Digital 360°",
    template: "%s – ORBYZ Studio", // <- clave: %s se reemplaza con el título de cada página
  },
  description:
    "Fusionamos creatividad y seguridad para impulsar tu marca. Descubre nuestras soluciones 360° en branding, marketing y ciberseguridad.",
  openGraph: {
    type: "website",
    url: "https://www.orbyzstudio.dev",
    siteName: "ORBYZ Studio",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "ORBYZ Studio" },
    ],
  },
  // Metadatos para Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Crecimiento Digital Seguro | ORBYZ Studio",
    description:
      "Fusionamos creatividad y seguridad para impulsar tu marca. Descubre nuestras soluciones 360° en branding, marketing y ciberseguridad.",
    images: "/og-image.jpg", // Ruta a tu imagen en la carpeta `public`
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={sora.className}>
      <body className={`${sora.className} max-h-screen antialiased`}>
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
