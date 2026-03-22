import React from 'react';
import { Metadata } from 'next';
import techStack from './techStack';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about me, who I am and my tech stack',
};

const categoryMeta: Record<string, { icon: string }> = {
  Languages: { icon: '{ }' },
  Frontend: { icon: '◆' },
  Backend: { icon: '⬡' },
};

function AboutPage() {
  return (
    <div>
      {/* Header */}
      <div>
        <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
          Background
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-10">
          About
        </h1>
      </div>

      {/* Narrative */}
      <div className="space-y-5 text-lg leading-relaxed">
        <p>
          I chose to forge my own path in Software Engineering rather than follow
          the traditional university route. At 18, I built a solid foundation and
          have since been honing my skills at{' '}
          <span className="font-medium text-foreground">First Table</span>.
        </p>
        <p className="text-muted-foreground">
          I thrive in hands-on learning — spending my days in the editor, building
          real projects. I&apos;m passionate about driving innovation in{' '}
          <span className="font-medium text-[var(--accent-blue)]">
            Web3
          </span>{' '}
          and{' '}
          <span className="font-medium text-[var(--accent-blue)]">
            AI
          </span>{' '}
          technologies.
        </p>
      </div>

      {/* Divider */}
      <div className="section-divider my-12" />

      {/* Tech stack */}
      <h2 className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-8">
        Tech Stack
      </h2>

      <div className="space-y-8">
        {Object.entries(techStack).map(([key, technologies]) => {
          const title = key.charAt(0).toUpperCase() + key.slice(1);
          const meta = categoryMeta[title] || { icon: '●' };

          return (
            <div key={key} className="group">
              <div className="flex items-center gap-3 mb-4">
                <span className="specialty-icon text-sm font-mono font-bold">
                  {meta.icon}
                </span>
                <h3 className="text-lg font-semibold">{title}</h3>
              </div>
              <div className="flex flex-wrap gap-2 pl-[52px]">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-secondary text-secondary-foreground font-medium transition-colors hover:bg-secondary/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutPage;
