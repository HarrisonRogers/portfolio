'use client';

import React, { useRef } from 'react';
import { ThemeProvider } from './theme-provider';
import Navbar from './navbar';
import Footer from './footer';
import { Geist, Geist_Mono } from 'next/font/google';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

function Home({ children }: { children: React.ReactNode }) {
  const bodyRef = useRef<HTMLBodyElement>(null);

  return (
    <body
      ref={bodyRef}
      className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40`}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[630px] w-full">
          <Navbar />
          {children}
          <Footer />
        </main>
      </ThemeProvider>
    </body>
  );
}

export default Home;
