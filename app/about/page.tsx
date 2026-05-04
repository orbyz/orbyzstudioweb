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
  title: "Nosotros – Orbyz Studio",
  description:
    "Especialistas en desarrollo web, identidad de marca y marketing digital.",
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
