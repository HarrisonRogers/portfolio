import { projects } from './projects';
import { Metadata } from 'next';
import { ProjectList } from './projectList';

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Projects I have built and contributed to',
};

function ProjectsPage() {
  // Separate projects into personal and work categories
  const personalProjects = projects.filter(
    (project) => project.personal === true,
  );
  const workProjects = projects.filter((project) => project.personal === false);

  return (
    <div>
      <div className="flex items-center gap-2">
        <h1 className="text-5xl mb-7 font-instrument-serif tracking-wide">
          Projects{' '}
        </h1>
        <small className="text-gray-500 dark:text-gray-400">
          (some of these may be older and don&apos;t work )
        </small>
      </div>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        A lot of my work is done in private repositories so not all of them are
        listed here.
      </p>
      <ProjectList projects={workProjects} sectionTitle="Work" />
      <ProjectList projects={personalProjects} sectionTitle="Personal" />
    </div>
  );
}

export default ProjectsPage;
