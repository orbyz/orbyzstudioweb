import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-inter",
  preload: false,
});

export const metadata: Metadata = {
  // Define una URL base para que las rutas relativas funcionen
  metadataBase: new URL("https://www.orbyzstudio.dev"),

  title: "ORBYZ Studio | Agencia Digital 360°",
  description:
    "Ofrecemos servicios integrales de branding, marketing digital, desarrollo web y ciberseguridad para un crecimiento seguro.",

  // Metadatos para Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    type: "website",
    url: "https://www.orbyzstudio.dev/",
    title: "ORBYZ Studio | Agencia Digital 360°",
    description:
      "Fusionamos creatividad y seguridad para impulsar tu marca. Descubre nuestras soluciones 360° en branding, marketing y ciberseguridad.",
    images: [
      {
        url: "/og-image.jpg", // Ruta a tu imagen en la carpeta `public`
        width: 1200,
        height: 630,
        alt: "Imagen de presentación de ORBYZ Studio",
      },
    ],
  },

  // Metadatos para Twitter Cards
  twitter: {
    card: "summary_large_image",
    title: "Crecimiento Digital Seguro | ORBYZ Studio",
    description:
      "Fusionamos creatividad y seguridad para impulsar tu marca. Descubre nuestras soluciones 360° en branding, marketing y ciberseguridad.",
    images: ["/og-image.jpg"], // Ruta a tu imagen en la carpeta `public`
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.className}>
      <body className={`${inter.className} max-w-[1280px]antialiased`}>
        <Navigation />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
