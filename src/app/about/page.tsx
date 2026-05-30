import React from 'react';
import { Metadata } from 'next';
import Card from '@/components/ui/card';
import { cn } from '@/lib/utils';
import techStack, { type TechStackCardProps } from './techStack';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about me, who I am and my tech stack',
};

const TechStackCard = ({
  title,
  icon,
  technologies,
  className,
}: TechStackCardProps & { className?: string }) => {
  return (
    <Card className={cn('w-full', className)}>
      <div className="p-6">
        <h2 className="text-lg font-semibold">
          {icon} {title}
        </h2>
        <ul className="list-disc pl-6 mt-2">
          {technologies.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

function AboutPage() {
  return (
    <div>
      <h1 className="text-5xl mb-7 font-instrument-serif tracking-wide">
        About
      </h1>
      <article className="space-y-4">
        <p>
          I am a Software Engineer from New Zealand. I currently work at{' '}
          <a
            href="https://www.firsttable.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
          >
            First Table
          </a>{' '}
          as a Frontend Developer. I love building whatever interests me,
          whether that is a web app, mobile app, trading bots or ai
          applications/automations.
        </p>
        <p>
          When I am creating and tinkering I tend to use the tech stack below.
        </p>
      </article>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <TechStackCard
          title="Languages"
          icon="🌐"
          technologies={techStack.languages}
          className="sm:col-span-2"
        />
        <TechStackCard
          title="Frontend"
          icon="🚀"
          technologies={techStack.frontend}
        />
        <TechStackCard
          title="Backend"
          icon="🛠"
          technologies={techStack.backend}
        />
      </div>
    </div>
  );
}

export default AboutPage;
