"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import projects from "@/app/data/projects";
import type { Project } from "@/app/data/projects";
import { ProjectSheet } from "@/components/project-sheet";

const fade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ProjectsSection() {
  const [selected, setSelected] = useState<Project | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  function openProject(project: Project) {
    setSelected(project);
    setSheetOpen(true);
  }

  return (
    <section id="projects" aria-label="Projects" className="space-y-6">
      <motion.h2
        variants={fade}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-semibold text-foreground"
      >
        Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            variants={fade}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <Card
              role="button"
              tabIndex={0}
              aria-label={`View details for ${project.name}`}
              onClick={() => openProject(project)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  openProject(project);
                }
              }}
              className="border border-border hover:border-foreground/20 transition-colors rounded-2xl p-5 flex flex-col justify-between min-h-[220px] cursor-pointer group"
            >
              <div className="flex flex-col gap-2 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-lg group-hover:text-foreground/70 transition-colors">
                    {project.name}
                  </h3>
                  {project.status && (
                    <Badge
                      variant="secondary"
                      className={
                        project.status === "Public"
                          ? "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300"
                          : "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300"
                      }
                    >
                      {project.status}
                    </Badge>
                  )}
                  {project.license && (
                    <Badge
                      variant="secondary"
                      className="bg-zinc-100 dark:bg-zinc-800 text-muted-foreground"
                    >
                      {project.license}
                    </Badge>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.techStack.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-zinc-100 dark:bg-zinc-800 text-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground line-clamp-3 flex-1">
                  {project.description}
                </p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      <ProjectSheet
        project={selected}
        open={sheetOpen}
        onOpenChange={setSheetOpen}
      />
    </section>
  );
}
