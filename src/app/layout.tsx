import type { Metadata } from 'next';
import './globals.css';
import Analytics from '@/components/analytics';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Geist, Geist_Mono } from 'next/font/google';
import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { ViewTransition } from 'react';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Harrison | AI Integrated Software Engineer',
  description:
    'Hi, I am Harrison Rogers an AI Integrated Software Engineer based in New Zealand. I love building AI, Web and Ios applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Analytics />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40 noise-overlay relative min-h-screen overflow-x-hidden`}
      >
        <VercelAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[720px] w-full relative z-10">
            <Navbar />
            <ViewTransition>{children}</ViewTransition>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
