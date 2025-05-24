'use client';

import React, { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycleTheme = (): void => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={cycleTheme}
      className="cursor-pointer border-none hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 shadow-none relative"
      title={mounted ? `Current theme: ${theme}` : 'Theme toggle'}
      suppressHydrationWarning
    >
      {/* Light mode icon */}
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${
          mounted && theme === 'light'
            ? 'scale-100 rotate-0 opacity-100'
            : 'scale-0 rotate-90 opacity-0'
        }`}
      />

      {/* Dark mode icon */}
      <Moon
        className={`h-[1.2rem] w-[1.2rem] transition-all absolute ${
          mounted && theme === 'dark'
            ? 'scale-100 rotate-0 opacity-100'
            : 'scale-0 rotate-90 opacity-0'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
