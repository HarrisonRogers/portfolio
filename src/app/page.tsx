import Link from 'next/link';
import Image from 'next/image';
import ImageGazer from '@/components/imageGazer';
import { metaData } from './config';

export default function Home() {
  return (
    <div>
      <h1 className="font-instrument-serif text-6xl tracking-wide">
        Hey, I&apos;m
        <br />
        {metaData.name} 👋
      </h1>
      <Link href="/about">
        <div className="w-48 h-48 overflow-hidden rounded-full mx-auto sm:float-right sm:ml-5 sm:mb-5 lg:mt-2 mt-5 lg:mb-5 mb-10 hover:scale-105 transition-all duration-300 relative">
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

      <p className="mt-7">
        I&apos;m an AI Integrated Software Engineer with a full-stack
        background, specializing in TypeScript, React, React Native and Rust.
      </p>
      <p className="mt-5">
        I am a passionate AI tinkerer and am constantly building and toying with
        the latest and greatest features and AI tools.
      </p>
    </div>
  );
}
