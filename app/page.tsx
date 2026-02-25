import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { ExperienceSection } from "@/components/experience-section";
import { EducationSection } from "@/components/education-section";
import { ProjectsSection } from "@/components/projects-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 space-y-14">
        <Hero />
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
      </main>
      <footer className="border-t border-border py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Ammar Hussein
      </footer>
    </div>
  );
}
