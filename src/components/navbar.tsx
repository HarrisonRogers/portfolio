import Link from 'next/link';
import React from 'react';
import { ModeToggle } from '@/components/modeToggle';
const navItems = {
  '/': { name: 'Home' },
  '/about': { name: 'About' },
  '/projects': { name: 'Projects' },
  '/career': { name: 'Career' },
};

function Navbar() {
  return (
    <nav className="lg:mb-16 mb-6 py-5">
      <div className="flex justify-between">
        <div className="flex flex-row gap-4 items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition hover:opacity-85 "
            >
              {name}
            </Link>
          ))}
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
