import { ProjectsHero } from "@/features/projects/ProjectsHero";
import { ProjectsList } from "@/features/projects/ProjectsList";
import { ProjectsCTA } from "@/features/projects/ProjectsCTA";

export default function ProjectsPage() {
  return (
    <main>
      <ProjectsHero />
      <ProjectsList />
      <ProjectsCTA />
    </main>
  );
}
