import Link from 'next/link';
import React from 'react';
import { metaData } from '@/app/config';
import { ModeToggle } from '@/components/modeToggle';
const navItems = {
  '/about': { name: 'About' },
  '/projects': { name: 'Projects' },
  '/career': { name: 'Career' },
};

function Navbar() {
  return (
    <nav className="lg:mb-16 mb-6 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition hover:opacity-85 "
            >
              {name}
            </Link>
          ))}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
