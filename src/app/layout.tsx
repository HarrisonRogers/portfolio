import type { Metadata } from 'next';
import './globals.css';
import Analytics from '@/components/analytics';
import Home from '@/components/home';

export const metadata: Metadata = {
  title: 'Harrison Rogers Software Developer',
  description:
    'Hi, I am Harrison Rogers a Software Engineer based in New Zealand. I love building sites and applications with React.ts, Next.js, Solidity and other web3 and web2 technologies.',
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
      <Home>{children}</Home>
    </html>
  );
}
