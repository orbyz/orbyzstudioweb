"use client";

import Image from "next/image";
import Link from "next/link";

type ProjectBlockProps = {
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  result: string;
  image: string;
  website?: string;
  instagram?: string;
  reverse?: boolean;
};

export function ProjectBlock({
  title,
  subtitle,
  problem,
  solution,
  result,
  image,
  website,
  instagram,
  reverse = false,
}: ProjectBlockProps) {
  return (
    <section className="py-24 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div
          className={`grid gap-12 lg:grid-cols-2 items-center ${
            reverse ? "lg:grid-flow-col-dense" : ""
          }`}
        >
          {/* VISUAL */}
          <div className={`relative ${reverse ? "lg:col-start-2" : ""}`}>
            {/* glow */}
            <div className="absolute inset-0 blur-2xl opacity-20 bg-primary/20 rounded-2xl" />

            <div className="relative rounded-2xl overflow-hidden border border-default">
              <Image
                src={image}
                alt={title}
                width={1200}
                height={800}
                className="object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}
          <div className={`${reverse ? "lg:col-start-1" : ""}`}>
            {/* subtitle */}
            <p className="text-sm text-primary mb-2">{subtitle}</p>

            {/* title */}
            <h2 className="text-3xl md:text-4xl font-semibold text-text mb-6">
              {title}
            </h2>

            {/* problem */}
            <p className="text-muted mb-4">
              <strong className="text-text">Problema:</strong> {problem}
            </p>

            {/* solution */}
            <p className="text-muted mb-4">
              <strong className="text-text">Solución:</strong> {solution}
            </p>

            {/* result */}
            <p className="text-muted mb-6">
              <strong className="text-text">Resultado:</strong> {result}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              {website && (
                <Link
                  href={website}
                  target="_blank"
                  className="btn btn-primary"
                >
                  Ver web
                </Link>
              )}

              {instagram && (
                <Link
                  href={instagram}
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Ver Instagram
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
