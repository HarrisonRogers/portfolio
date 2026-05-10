const techStack = {
  languages: ['TypeScript', 'React', 'Rust'],
  frontend: [
    'React',
    'Next.js',
    'Tailwind CSS',
    'CSS',
    'React Native',
    'Expo',
    'AI SDKs',
    'Wagmi',
  ],
  backend: ['GraphQL', 'PostgreSQL', 'SQLite', 'Node.js', 'Supabase', 'Convex'],
};

export type TechStackCardProps = {
  title: string;
  icon: string;
  technologies: string[];
};

export default techStack;
