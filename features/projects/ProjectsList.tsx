"use client";

import { PROJECTS } from "./projects.data";
import { ProjectBlock } from "./ProjectBlock";

export function ProjectsList() {
  return (
    <section>
      <div className="mx-auto max-w-3xl px-6 text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-semibold text-text mb-4">
          Casos reales, resultados reales
        </h2>
        <p className="text-muted">
          Cada proyecto está diseñado para resolver un problema concreto y
          generar impacto.
        </p>
      </div>
      {PROJECTS.map((project, index) => (
        <ProjectBlock
          key={project.title}
          {...project}
          reverse={index % 2 !== 0}
        />
      ))}
    </section>
  );
}
