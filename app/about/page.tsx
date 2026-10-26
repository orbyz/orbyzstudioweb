import Image from "next/image";
import imgEquipo from "@assets/equipo.jpg";
import imgCEO from "@assets/ceo.jpg";
import imgCMO from "@assets/cmo.jpg";
import Link from "next/link";
import { Metadata } from "next";
import { AboutHero } from "@/features/about/AboutHero";
import { AboutPrinciples } from "@/features/about/AboutPrinciples";
import { AboutTeam } from "@/features/about/AboutTeam";
import { AboutApproach } from "@/features/about/AboutApproach";
import { AboutCredibility } from "@/features/about/AboutCredibility";
import { AboutCTA } from "@/features/about/AboutCTA";


export const metadata: Metadata = {
  title: {
    absolute: "Nosotros | OrByZ Studio",
  },
  description:
    "Conoce al equipo de OrByZ Studio y nuestra forma de trabajar en desarrollo web, identidad de marca y marketing digital.",
  alternates: {
    canonical: "https://www.orbyzstudio.dev/about",
  },
};


export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutPrinciples />
      <AboutTeam />
      <AboutApproach />
      <AboutCredibility />
      <AboutCTA />
    </>
  );
}
