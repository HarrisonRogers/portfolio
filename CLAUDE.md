# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

```bash
yarn dev          # Start dev server with Turbopack
yarn build        # Production build
yarn start        # Start production server
yarn lint         # Run ESLint (next/core-web-vitals + typescript)
```

## Architecture Overview

This is a **Next.js 16 portfolio website** using the App Router pattern with React 19 and TypeScript.

### Project Structure

- **`src/app/`** - App Router pages and layouts
  - `config.ts` - Site metadata and social links
  - Route folders (`about/`, `career/`, `projects/`) contain `page.tsx` with co-located data files
- **`src/components/`** - React components
  - `ui/` - shadcn/ui components (Radix primitives + CVA variants)
  - Root level: navbar, footer, theme-provider, analytics
- **`src/lib/`** - Utilities (`utils.ts` for `cn()` function, `constants.ts` for ImageGazer config)

### Key Patterns

- **shadcn/ui approach**: Components use Radix UI primitives with class-variance-authority for variants
- **Theme system**: next-themes with CSS custom properties using OKLch color space
- **Path alias**: `@/*` maps to `./src/*`
- **Server vs Client**: Server components by default; use `'use client'` directive when needed

### Notable Component

**ImageGazer** (`src/components/imageGazer.tsx`) - Interactive component that tracks cursor position and scrubs through video frames on a 25x25 grid. Uses refs and mouse events to create an engaging hover effect on the profile video.

## Tech Stack

- Next.js 16 + React 19 + TypeScript 5
- Tailwind CSS 4 with tailwindcss-animate
- Radix UI primitives
- next-themes for dark mode
- Vercel Analytics + Google Analytics
