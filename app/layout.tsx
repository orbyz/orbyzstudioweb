import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@styles/globals.css";
import Navigation from "@components/Navigation";
import Footer from "@components/Footer";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-inter",
  preload: false,
});

export const metadata: Metadata = {
  title: "ORBYZ Studio",
  description: "Branding | Digital Marketing | Web Develop | Cybersecurity",
  keywords: ["Branding", "Digital Marketing", "Web Develop", "Cybersecurity"],
  creator: "Jonathan Olbes",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      </body>
    </html>
  );
}
