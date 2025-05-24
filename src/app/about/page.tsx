import React from 'react';
import { Metadata } from 'next';
import Card from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'About Me',
  description: 'Learn about me, who I am and my tech stack',
};

const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
  backend: ['Supabase', 'Prisma', 'GraphQL', 'PostgreSQL', 'SQLite'],
  web3: ['Solidity', 'Smart Contracts', 'Wagmi', 'Ethereum', 'Base'],
  ai: ['OpenAI', 'Vercel AI SDK', 'Tool Calling'],
  paymentsAndApis: ['Stripe', 'Third-party integrations'],
};

type TechStackCardProps = {
  title: string;
  icon: string;
  technologies: string[];
};

const TechStackCard = ({ title, icon, technologies }: TechStackCardProps) => {
  return (
    <Card>
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
      <p>
        I chose to forge my own path in software development rather than follow
        the traditional university route. At 18, I built a solid foundation at
        Dev Academy and have since been honing my skills at First Table. I
        thrive in hands-on learning—spending my days in the console, building
        real projects—and I&apos;m passionate about driving innovation in Web3
        and blockchain technologies.
      </p>
      <p className="mt-4">
        I love working with modern technologies to build scalable,
        high-performance applications. My tech stack includes:
      </p>
      <div className="mt-4 space-y-4 grid grid-cols-1 md:grid-cols-2 gap-4">
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
        <TechStackCard title="Web3" icon="🔗" technologies={techStack.web3} />
        <TechStackCard title="AI" icon="🤖" technologies={techStack.ai} />
        <TechStackCard
          title="Payments & APIs"
          icon="💳"
          technologies={techStack.paymentsAndApis}
        />
      </div>
    </div>
  );
}

export default AboutPage;
