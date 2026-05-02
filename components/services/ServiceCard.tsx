"use client";

import Link from "next/link";
import clsx from "clsx";
import { useRef } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  outcome: string;
  icon?: React.ReactNode;
  href?: string;
  ctaLabel?: string;
  featured?: boolean;
};

export function ServiceCard({
  title,
  description,
  outcome,
  icon,
  href,
  ctaLabel,
  featured = false,
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    cardRef.current?.style.setProperty("--mouse-x", `${x}px`);
    cardRef.current?.style.setProperty("--mouse-y", `${y}px`);
  };

  const Wrapper = href ? Link : "div";

  return (
    <Wrapper href={href || ""} className="block focus:outline-none">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={clsx(
          "group relative overflow-hidden rounded-2xl border border-default p-6",
          "transition-all duration-300 ease-out",
          "bg-[var(--card-bg)]",
          "hover:-translate-y-1",
          "hover:border-[var(--card-border-hover)]",
          "focus-visible:ring-2 focus-visible:ring-primary",
          featured && "scale-[1.02]",
        )}
      >
        {/* GLOW LAYER */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: "var(--glow-primary)" }}
        />

        {/* CONTENT */}
        <div className="relative z-10">
          {/* ICON */}
          {icon && (
            <div className="mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
              {icon}
            </div>
          )}

          {/* TITLE */}
          <h3 className="text-lg font-semibold text-text mb-2">{title}</h3>

          {/* DESCRIPTION */}
          <p className="text-sm text-muted mb-4 leading-relaxed">
            {description}
          </p>

          {/* OUTCOME */}
          <p className="text-sm text-primary font-medium">{outcome}</p>

          {/* CTA */}
          {ctaLabel && href && (
            <span className="inline-block mt-4 text-sm text-muted transition-all duration-300 group-hover:text-primary">
              {ctaLabel} →
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
