import Link from 'next/link';
import Image from 'next/image';
import headShot from '../photos/headshot.jpeg';

export default function Home() {
  return (
    <div>
      <h1 className="text-4xl font-bold">Hi I&apos;m Harrison</h1>
      <Link href="/about">
        <div className="relative w-48 h-48 overflow-hidden rounded-full mx-auto sm:float-right sm:ml-5 sm:mb-5 lg:mt-5 mt-0 lg:mb-5 mb-10 hover:scale-105 transition-all duration-300">
          <Image
            className="object-cover object-[center_top]"
            src={headShot}
            alt="Harrison Rogers"
            fill
            sizes="192px"
            priority
            unoptimized
          />
        </div>
      </Link>
    </div>
  );
}
