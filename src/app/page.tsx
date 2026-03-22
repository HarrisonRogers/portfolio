import Link from 'next/link';
import Image from 'next/image';
import ImageGazer from '@/components/imageGazer';
import { metaData } from './config';

export default function Home() {
  return (
    <div className="relative">
      {/* Background gradient shapes */}
      <div
        className="hero-gradient"
        style={{
          width: '300px',
          height: '300px',
          background: 'var(--accent-blue)',
          top: '-60px',
          right: '-100px',
        }}
      />
      <div
        className="hero-gradient"
        style={{
          width: '250px',
          height: '250px',
          background: 'var(--accent-blue)',
          bottom: '-40px',
          left: '-80px',
          opacity: '0.06',
        }}
      />

      <div className="relative z-10">
        {/* Hero */}
        <div>
          <p className="text-sm font-mono text-muted-foreground tracking-wider uppercase mb-4">
            AI Integrated Software Engineer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1]">
            Hey, I&apos;m{' '}
            <span className="text-[var(--accent-blue)]">{metaData.name}</span>
          </h1>
        </div>

        {/* Profile image */}
        <div>
          <Link href="/about">
            <div className="w-48 h-48 overflow-hidden rounded-2xl mx-auto sm:float-right sm:ml-8 sm:mb-5 lg:mt-2 mt-8 lg:mb-5 mb-10 hover:scale-105 transition-all duration-300 relative group">
              <div className="absolute inset-0 rounded-2xl bg-[var(--accent-blue)] opacity-0 group-hover:opacity-15 transition-opacity duration-300 z-10" />
              <div className="hidden sm:block w-full h-full">
                <ImageGazer />
              </div>
              <div className="block sm:hidden w-full h-full relative">
                <Image
                  src="/harrison.jpeg"
                  alt="Harrison Rogers"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-top object-cover"
                  priority
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Intro */}
        <div>
          <p className="mt-7 text-lg leading-relaxed">
            I&apos;m a full-stack engineer specializing in{' '}
            <span className="font-medium text-foreground">React</span>,{' '}
            <span className="font-medium text-foreground">React Native</span>, and{' '}
            <span className="font-medium text-foreground">Rust</span> — with a deep
            passion for AI and Web3 development.
          </p>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            I love solving complex problems, experimenting with new technologies,
            and pushing the boundaries of what&apos;s possible on the web. Check out
            my projects, learn more about me, or get in touch!
          </p>
        </div>

        {/* Specialty pills */}
        <div className="flex flex-wrap gap-2 mt-8">
          <span className="tech-tag">AI / ML</span>
          <span className="tech-tag">React</span>
          <span className="tech-tag">React Native</span>
          <span className="tech-tag">Rust</span>
          <span className="tech-tag">Web3</span>
          <span className="tech-tag">Next.js</span>
        </div>
      </div>
    </div>
  );
}
