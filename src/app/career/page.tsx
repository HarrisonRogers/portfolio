import React from 'react';
import dayjs from 'dayjs';
import { careers } from './careers';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Career',
  description: 'My career history',
};

function CareerPage() {
  const formatDate = (dateString: string): string => {
    if (dateString === 'Present') return 'Present';
    return dayjs(dateString).format('MMMM YYYY');
  };

  const sortedCareers = [...careers].sort((a, b) =>
    a.endDate === 'Present'
      ? -1
      : b.endDate === 'Present'
      ? 1
      : new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
  );

  return (
    <div>
      <h1 className="text-3xl mb-8">Career</h1>

      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {sortedCareers.map((career, index) => (
          <li
            key={index}
            className={`mb-10 ms-4 ${
              index === sortedCareers.length - 1 ? '' : 'mb-10'
            }`}
          >
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>

            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {formatDate(career.startDate)} - {formatDate(career.endDate)}
            </time>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {career.title}
            </h3>
            <Link
              href={career.url}
              className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2"
            >
              {career.company}
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default CareerPage;
