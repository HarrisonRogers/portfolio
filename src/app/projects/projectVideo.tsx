'use client';

import { useState } from 'react';

type ProjectVideoProps = {
  src: string;
  title: string;
};

export function ProjectVideo({ src, title }: ProjectVideoProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-neutral-100 dark:bg-neutral-900">
      <video
        src={src}
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        className={`absolute inset-0 size-full scale-110 object-cover blur-2xl transition-opacity duration-300 ${
          isLoaded ? 'opacity-60' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 bg-black/10" aria-hidden="true" />
      <video
        src={src}
        aria-label={`${title} preview`}
        autoPlay
        muted
        loop
        playsInline
        onCanPlay={() => setIsLoaded(true)}
        onError={() => setIsLoaded(true)}
        className={`relative z-10 size-full object-contain transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
      {!isLoaded && (
        <div
          className="absolute inset-0 z-20 overflow-hidden bg-neutral-200 dark:bg-neutral-800"
          role="status"
          aria-label="Loading video preview"
        >
          <div
            className="absolute inset-0 bg-linear-to-br from-neutral-300 via-neutral-200 to-neutral-100 motion-safe:animate-pulse dark:from-neutral-800 dark:via-neutral-700 dark:to-neutral-900"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
}
