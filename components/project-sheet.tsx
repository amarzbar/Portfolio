"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/app/data/projects";

interface ProjectSheetProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ProjectSheet({ project, open, onOpenChange }: ProjectSheetProps) {
  if (!project) return null;

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md overflow-y-auto"
        aria-label={`Details for ${project.name}`}
      >
        <SheetHeader>
          <div className="flex items-center gap-2">
            <SheetTitle>{project.name}</SheetTitle>
            <Badge
              variant={project.status === "Public" ? "secondary" : "outline"}
              className="text-xs"
            >
              {project.status}
            </Badge>
          </div>
          <SheetDescription>{project.description}</SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Tech stack */}
          <div className="space-y-2">
            <h3 className="text-sm font-medium text-foreground">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
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
          </div>

          {/* License */}
          {project.license && (
            <div className="space-y-2">
              <h3 className="text-sm font-medium text-foreground">License</h3>
              <p className="text-sm text-muted-foreground">{project.license}</p>
            </div>
          )}

          {/* Actions */}
          <div className="pt-4 border-t border-border">
            {project.status === "Private" ? (
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lock className="h-4 w-4" />
                <span>This repository is private</span>
              </div>
            ) : (
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" className="w-full gap-2">
                  <ExternalLink className="h-4 w-4" />
                  View on GitHub
                </Button>
              </a>
            )}
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
