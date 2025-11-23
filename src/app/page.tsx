import Link from 'next/link';
import Image from 'next/image';
import ImageGazer from '@/components/imageGazer';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">
        Hey, I&apos;m
        <br />
        Harrison Rogers 👋
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
              className="object-top object-cover"
              priority
            />
          </div>
        </div>
      </Link>

      <p className="mt-7">
        I&apos;m a Software Engineer with a full-stack background, specializing
        in React, Next.js and TypeScript. I have a deep passion for Web3 and AI
        development. I build smart contracts with Solidity, and create dynamic,
        interactive frontends that bridge users to blockchain technology and AI.
      </p>
      <p className="mt-5">
        I love solving complex problems, experimenting with new technologies,
        and pushing the boundaries of what&apos;s possible on the web. Check out
        my projects, learn more about me, or get in touch!
      </p>
    </div>
  );
}
