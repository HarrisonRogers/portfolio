'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';
import { ModeToggle } from '@/components/modeToggle';

const navItems = {
  '/': { name: 'Home' },
  '/about': { name: 'About' },
  '/projects': { name: 'Projects' },
  '/career': { name: 'Career' },
};

function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="lg:mb-16 mb-8 py-5">
      <div className="flex justify-between items-center">
        <div className="flex flex-row gap-1 items-center">
          {Object.entries(navItems).map(([path, { name }]) => {
            const isActive = pathname === path;
            return (
              <Link
                key={path}
                href={path}
                className={`relative px-3 py-1.5 text-sm font-medium transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-foreground bg-secondary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                }`}
                transitionTypes={['slide']}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
