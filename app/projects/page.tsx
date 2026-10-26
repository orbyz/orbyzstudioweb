
import { metaProjects } from "../metadata";

import { ProjectsHero } from "@/features/projects/ProjectsHero";
import { ProjectsList } from "@/features/projects/ProjectsList";
import { ProjectsCTA } from "@/features/projects/ProjectsCTA";

export const metadata = metaProjects;

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsList />
      <ProjectsCTA />
    </main>
  );
}
