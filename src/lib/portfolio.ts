import { socialLinks } from '@/app/config';

export const profile = {
  name: 'Harrison Rogers',
  role: 'AI Integrated Software Engineer',
  location: 'New Zealand',
  summary:
    'Full-stack software engineer specialising in TypeScript, React, React Native, Rust, and AI applications and automations.',
  skills: ['TypeScript', 'React', 'React Native', 'Rust', 'AI applications'],
  links: {
    website: 'https://harrisonrogers.dev',
    github: socialLinks.github,
    linkedin: socialLinks.linkedin,
    x: socialLinks.twitter,
    email: socialLinks.email.replace('mailto:', ''),
  },
} as const;

export const apiDirectory = {
  name: 'Harrison Rogers Developer API',
  version: '1.0.0',
  documentation: 'https://harrisonrogers.dev/developers',
  openapi: 'https://harrisonrogers.dev/openapi.json',
  mcp: 'https://harrisonrogers.dev/mcp',
  endpoints: {
    profile: 'https://harrisonrogers.dev/api/profile',
    projects: 'https://harrisonrogers.dev/api/projects',
    career: 'https://harrisonrogers.dev/api/career',
  },
} as const;
