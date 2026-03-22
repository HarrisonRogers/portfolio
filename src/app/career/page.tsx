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
    return dayjs(dateString).format('MMM YYYY');
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
      {/* Header */}
      <div>
        <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
          Experience
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-12">
          Career
        </h1>
      </div>

      {/* Timeline */}
      <div className="timeline-line pl-8 space-y-10">
        {sortedCareers.map((career, index) => {
          const isActive = career.endDate === 'Present';
          return (
            <div key={index} className="relative">
              <div
                className={`timeline-dot ${isActive ? 'timeline-dot-active' : ''}`}
              />

              <div className="group">
                <time className="text-xs font-mono text-muted-foreground tracking-wider uppercase">
                  {formatDate(career.startDate)} — {formatDate(career.endDate)}
                </time>

                <h3 className="text-xl font-semibold mt-1.5 text-foreground">
                  {career.title}
                </h3>

                <Link
                  href={career.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium mt-0.5 text-[var(--accent-blue)] transition-colors hover:text-[var(--accent-blue)]/80"
                >
                  {career.company}
                  <span className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 text-xs">
                    ↗
                  </span>
                </Link>

                {career.description && (
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed max-w-lg">
                    {career.description}
                  </p>
                )}

                {isActive && (
                  <div className="mt-3">
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-[color-mix(in_oklch,var(--accent-blue)_10%,transparent)] text-[var(--accent-blue)] border border-[color-mix(in_oklch,var(--accent-blue)_25%,transparent)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-blue)] animate-pulse" />
                      Current
                    </span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CareerPage;
