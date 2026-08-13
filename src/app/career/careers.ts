export type Career = {
  title: string;
  company: string;
  startDate: string;
  endDate: string;
  url: string;
  description?: string;
};

export const careers: Career[] = [
  {
    title: 'Apprentice Frontend Developer',
    company: 'First Table',
    startDate: '2024-09-09',
    endDate: '2025-03-08',
    url: 'https://www.firsttable.co.nz/',
    description:
      'Learning the fundamentals of software development while contributing to real-world projects. Working with modern web technologies and agile methodologies.',
  },
  {
    title: 'Frontend/Growth Developer',
    company: 'First Table',
    startDate: '2025-03-09',
    endDate: 'Present',
    url: 'https://www.firsttable.co.nz/',
    description:
      'Building and maintaining web applications using React, TypeScript, and Node.js. Helping grow the product through software engineering and growth engineering.',
  },
];
