import React from 'react';

const techStack = {
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
  backend: ['Supabase', 'Prisma', 'GraphQL'],
  web3: ['Solidity', 'Smart Contracts'],
  paymentsAndApis: ['Stripe', 'Third-party integrations'],
};

function AboutPage() {
  return (
    <div>
      <h1 className="text-3xl mb-7">About</h1>
      <p>
        After seeing everyone else take the traditional university path, I
        decided to dive deep into the world of coding and carve out my own
        journey. Instead of lectures and textbooks, I spent my time in the
        console, learning by building. Now, at 18 years old, with a strong
        foundation from Dev Academy, I&apos;m focused on making an
        impact—especially in Web3 and blockchain development.
      </p>
      <p className="mt-4">
        I love working with modern technologies to build scalable,
        high-performance applications. My tech stack includes:
      </p>
      <div className="mt-4 space-y-4">
        <div>
          <h2 className="text-lg font-semibold">🚀 Frontend</h2>
          <ul className="list-disc pl-6">
            {techStack.frontend.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">🛠 Backend</h2>
          <ul className="list-disc pl-6">
            {techStack.backend.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">🔗 Web3</h2>
          <ul className="list-disc pl-6">
            {techStack.web3.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-semibold">💳 Payments & APIs</h2>
          <ul className="list-disc pl-6">
            {techStack.paymentsAndApis.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
