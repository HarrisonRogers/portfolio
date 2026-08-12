import type { Metadata } from 'next';
import './globals.css';
import Analytics from '@/components/analytics';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Geist, Geist_Mono, Instrument_Serif } from 'next/font/google';

import { Analytics as VercelAnalytics } from '@vercel/analytics/next';
import { ViewTransition } from 'react';
import { metaData, socialLinks } from './config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const instrumentSerif = Instrument_Serif({
  variable: '--font-instrument-serif',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(metaData.baseUrl),
  title: {
    default: 'Harrison Rogers | AI Integrated Software Engineer',
    template: '%s | Harrison Rogers',
  },
  description:
    'Hi, I am Harrison Rogers an AI Integrated Software Engineer based in New Zealand. I love building AI, Web and Ios applications.',
  authors: [{ name: 'Harrison Rogers', url: metaData.baseUrl }],
  creator: 'Harrison Rogers',
  keywords: [
    'Harrison Rogers',
    'software engineer',
    'AI engineer',
    'TypeScript developer',
    'New Zealand developer',
    'Harrison Rogers API',
    'Harrison Rogers MCP server',
  ],
  openGraph: {
    type: 'profile',
    firstName: 'Harrison',
    lastName: 'Rogers',
    username: 'harrisonrogers',
    url: metaData.baseUrl,
    title: 'Harrison Rogers | AI Integrated Software Engineer',
    description: metaData.description,
    images: [metaData.ogImage],
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://harrisonrogers.dev/#person',
      name: 'Harrison Rogers',
      url: 'https://harrisonrogers.dev',
      image: 'https://harrisonrogers.dev/harrison.jpeg',
      jobTitle: 'AI Integrated Software Engineer',
      homeLocation: { '@type': 'Country', name: 'New Zealand' },
      sameAs: [socialLinks.github, socialLinks.linkedin, socialLinks.twitter],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://harrisonrogers.dev/#website',
      name: 'Harrison Rogers',
      url: 'https://harrisonrogers.dev',
      author: { '@id': 'https://harrisonrogers.dev/#person' },
    },
  ],
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
        <link
          rel="alternate"
          type="application/json"
          href="/openapi.json"
          title="Harrison Rogers OpenAPI specification"
        />
        <link rel="mcp-manifest" href="/.well-known/mcp.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${instrumentSerif.variable} antialiased flex flex-col items-center justify-center mx-auto mt-2 lg:mt-8 mb-20 lg:mb-40`}
      >
        <VercelAnalytics />
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto min-w-0 mt-2 md:mt-6 flex flex-col px-6 sm:px-4 md:px-0 max-w-[630px] w-full">
            <Navbar />
            <ViewTransition>{children}</ViewTransition>
            <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
