import React from 'react';
import Link from 'next/link';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] text-center">
      <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
        404
      </p>
      <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-4">
        Lost in the void
      </h1>
      <p className="text-muted-foreground mb-8">
        This page doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="text-sm font-mono px-5 py-2.5 rounded-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-colors"
      >
        Go home
      </Link>
    </div>
  );
}

export default NotFound;
