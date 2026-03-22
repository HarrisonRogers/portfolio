import Link from 'next/link';
import React from 'react';
import { projects } from './projects';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects I have built and contributed to',
};

function ProjectsPage() {
  // Separate projects into personal and work categories
  const personalProjects = projects.filter(
    (project) => project.personal === true
  );
  const workProjects = projects.filter((project) => project.personal === false);

  // Helper function to render a project list
  const renderProjectList = (
    projectList: typeof projects,
    sectionTitle: string
  ) => {
    if (projectList.length === 0) return null;

    return (
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4 text-black dark:text-white">
          {sectionTitle}
        </h2>
        <div>
          {projectList.map((project, index) => (
            <div key={index} className="flex flex-col space-y-1 mb-5">
              <div className="w-full flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
                <div className="flex items-center space-x-2">
                  {project.url ? (
                    <Link
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black dark:text-white underline underline-offset-2 hover:no-underline transition"
                    >
                      <h3>{project.title}</h3>
                    </Link>
                  ) : (
                    <h3 className="text-black dark:text-white">
                      {project.title}
                    </h3>
                  )}

                  {project.sourceCode && (
                    <Link
                      href={project.sourceCode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-neutral-500 dark:text-neutral-400 transition hover:opacity-70"
                    >
                      (
                      <span className="underline underline-offset-2 hover:no-underline">
                        Source Code
                      </span>
                      )
                    </Link>
                  )}
                </div>
                <p className="text-neutral-600 dark:text-neutral-400 tracking-tight">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <h1 className="text-3xl mb-7">
        Projects{' '}
        <span className="text-gray-500 dark:text-gray-400 text-sm">
          (some of these may be older and don&apos;t work )
        </span>
      </h1>
      {renderProjectList(workProjects, 'Work')}
      {renderProjectList(personalProjects, 'Personal')}
    </div>
  );
}

export default ProjectsPage;
