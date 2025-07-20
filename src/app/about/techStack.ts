const techStack = {
  languages: ['JavaScript', 'TypeScript', 'React', 'Rust', 'Solidity'],
  frontend: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
  backend: ['Supabase', 'Prisma', 'GraphQL', 'PostgreSQL', 'SQLite'],
  web3: ['Solidity', 'Smart Contracts', 'Wagmi', 'Ethereum', 'Base'],
  ai: ['OpenAI', 'Vercel AI SDK', 'Tool Calling'],
  paymentsAndApis: ['Stripe', 'Third-party integrations'],
};

export type TechStackCardProps = {
  title: string;
  icon: string;
  technologies: string[];
};

export default techStack;
