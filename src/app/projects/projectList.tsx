'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';
import { ProjectVideo } from './projectVideo';
import type { Project } from './projects';

type ProjectListProps = {
  projects: Project[];
  sectionTitle: string;
};

export function ProjectList({ projects, sectionTitle }: ProjectListProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (projects.length === 0) return null;

  return (
    <Dialog
      open={selectedProject !== null}
      onOpenChange={(open) => {
        if (!open) setSelectedProject(null);
      }}
    >
      <section className="mb-8">
        <h2 className="mb-4 text-xl font-semibold text-black dark:text-white">
          {sectionTitle}
        </h2>
        <div className="space-y-2">
          {projects.map((project) => (
            <button
              key={project.title}
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-haspopup="dialog"
              className="group flex w-full cursor-pointer flex-col items-start justify-between gap-1 rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-500 sm:flex-row sm:items-center sm:gap-4 dark:hover:bg-neutral-800/70"
            >
              <span className="text-black underline decoration-neutral-400 underline-offset-4 transition group-hover:decoration-transparent dark:text-white">
                {project.title}
              </span>
              <span className="tracking-tight text-neutral-600 dark:text-neutral-400">
                {project.description}
              </span>
            </button>
          ))}
        </div>
      </section>

      {selectedProject && (
        <DialogContent className="max-w-2xl gap-0 overflow-hidden rounded-2xl p-0 sm:max-w-2xl">
          {selectedProject.video && (
            <ProjectVideo
              key={selectedProject.video}
              src={selectedProject.video}
              title={selectedProject.title}
            />
          )}

          <div>
            <DialogHeader className="p-5 pb-0 sm:p-7 sm:pb-0">
              <DialogTitle className="font-instrument-serif text-3xl tracking-wide text-black dark:text-white">
                {selectedProject.title}
              </DialogTitle>
              <DialogDescription className="max-w-prose text-sm leading-6 text-neutral-600 dark:text-neutral-400">
                {selectedProject.details}
              </DialogDescription>
            </DialogHeader>

            <DialogFooter className="m-5 mt-7 flex-row flex-wrap justify-start gap-3 border-t border-neutral-200 pt-5 sm:m-7 sm:mt-7 sm:justify-start dark:border-neutral-800">
              {selectedProject.url && (
                <a
                  href={selectedProject.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-sm font-medium text-white transition hover:opacity-75 dark:bg-white dark:text-black"
                >
                  View project
                  <ExternalLink className="size-4" aria-hidden="true" />
                </a>
              )}
              {selectedProject.sourceCode && (
                <a
                  href={selectedProject.sourceCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-neutral-300 px-4 py-2 text-sm font-medium text-black transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                >
                  Source code
                  <Github className="size-4" aria-hidden="true" />
                </a>
              )}
            </DialogFooter>
          </div>
        </DialogContent>
      )}
    </Dialog>
  );
}
