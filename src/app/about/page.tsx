import React from 'react';
import { Metadata } from 'next';
import Card from '@/components/ui/card';
import techStack, { type TechStackCardProps } from './techStack';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about me, who I am and my tech stack',
};

const TechStackCard = ({ title, icon, technologies }: TechStackCardProps) => {
  return (
    <Card className="w-full">
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
      <h1 className="text-3xl mb-7">About</h1>
      <p className="leading-relaxed">
        I chose to forge my own path in Software Engineering rather than follow
        the traditional university route. At 18, I built a solid foundation and
        have since been honing my skills at First Table. I thrive in hands-on
        learning—spending my days in the editor, building real projects.
        I&apos;m passionate about driving innovation in Web3 and blockchain
        technologies.
      </p>
      <p className="mt-4">
        I love working with modern technologies to build scalable,
        high-performance applications. My tech stack includes:
      </p>
      <div className="mt-4 flex flex-col gap-4">
        <TechStackCard
          title="Languages"
          icon="🌐"
          technologies={techStack.languages}
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
