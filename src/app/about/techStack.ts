const techStack = {
  languages: ['JavaScript', 'TypeScript', 'React', 'Rust', 'Solidity'],
  frontend: [
    'React',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'React Native',
    'Expo',
    'Wagmi',
  ],
  backend: ['GraphQL', 'PostgreSQL', 'SQLite', 'Node.js'],
};

export type TechStackCardProps = {
  title: string;
  icon: string;
  technologies: string[];
};

export default techStack;
