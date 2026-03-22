import Link from 'next/link';
import React from 'react';
import { projects, type ProjectTag } from './projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects I have built and contributed to',
};

const tagLabels: Record<ProjectTag, string> = {
  ai: 'AI',
  web3: 'Web3',
  mobile: 'Mobile',
  backend: 'Backend',
  frontend: 'Frontend',
};

function ProjectsPage() {
  const personalProjects = projects.filter((p) => p.personal);
  const workProjects = projects.filter((p) => !p.personal);

  const renderSection = (
    list: typeof projects,
    title: string
  ) => {
    if (list.length === 0) return null;
    return (
      <div className="mb-12">
        <h2 className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-6">
          {title}
        </h2>
        <div className="space-y-3">
          {list.map((project) => (
            <div
              key={project.title}
              className="glow-card group rounded-xl border border-border bg-card p-5 transition-all"
            >
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1.5">
                    {project.url ? (
                      <Link
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground font-semibold text-base hover:text-[var(--accent-blue)] transition-colors"
                      >
                        {project.title}
                        <span className="inline-block ml-1.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200">
                          ↗
                        </span>
                      </Link>
                    ) : (
                      <span className="text-foreground font-semibold text-base">
                        {project.title}
                      </span>
                    )}
                    {project.sourceCode && (
                      <Link
                        href={project.sourceCode}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                      >
                        src
                      </Link>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:flex-nowrap sm:ml-4 shrink-0">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-tag"
                    >
                      {tagLabels[tag]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
          What I&apos;ve built
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-2">
          Projects
        </h1>
        <p className="text-muted-foreground text-sm mb-10">
          Some of these may be older and no longer active.
        </p>
      </div>

      {renderSection(workProjects, 'Work')}
      {renderSection(personalProjects, 'Personal')}
    </div>
  );
}

export default ProjectsPage;
