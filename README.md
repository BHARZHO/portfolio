# Software Engineer Portfolio — Architecture Foundation

A production-ready, highly scalable project template built with **React 19 + TypeScript + Vite 8 + Tailwind CSS v4**.

This repository implements a professional Frontend Architecture that decouples layout, routing, business logic, global styling, helper utilities, static constants, page modules, and reusable UI components.

---

## 🏗️ Folder Structure

```text
src/
├── assets/             # Raw media assets (images, logos, icons, resume file)
│   ├── images/
│   ├── icons/
│   ├── logos/
│   └── resume/
├── components/         # Reusable JSX components
│   ├── common/         # Helper components shared globally
│   ├── layout/         # Shell infrastructure components (Navbar, MobileMenu, Footer)
│   ├── sections/       # Section component blocks (Hero, About, Skills, Projects, etc.)
│   └── ui/             # Reusable design system primitives (Button, Card, Badge, Toggle, etc.)
├── constants/          # Static configuration maps (navigation lists, social URLs, tech stacks)
├── data/               # Structurally typed local mock/data layers (projects list, skills, experience timeline)
├── hooks/              # Custom React hooks (theme management, scroll tracking, intersection observers)
├── layouts/            # Layout wraps (e.g. RootLayout shell connecting router paths)
├── pages/              # Page view entries corresponding to specific URL routes
├── routes/             # Client-side router maps and navigation structure
├── services/           # Prepared API network wrappers for future services integrations
├── styles/             # Stylesheet modules (Tailwind v4 base imports, CSS variables, animations)
├── types/              # Domain-specific TypeScript declarations
├── utils/              # Pure functions (class mergers, animation variants, custom scrolls)
├── App.tsx             # Application wrapper mounting React Router Providers
└── main.tsx            # Vite client entrypoint mounting the application DOM node
```

---

## 🛠️ Configuration & Core Foundations

### 1. TypeScript & Path Aliases
Path alias mappings prevent relative path nesting clutter (`../../../../`). They are resolved through:
- **TypeScript** ([tsconfig.app.json](file:///c:/Dev/Portfolio/tsconfig.app.json)): Maps the `@/*` pattern directly to `./src/*`.
- **Vite** ([vite.config.ts](file:///c:/Dev/Portfolio/vite.config.ts)): Resolves imports starting with `@/` using Node path resolution libraries.

*Example Import syntax:*
```typescript
import type { Project } from '@/types';
import { Card } from '@/components/ui/Card';
import { useTheme } from '@/hooks/useTheme';
```

### 2. Styling System (Tailwind CSS v4 + PostCSS)
Tailwind v4 is configured through:
- `@tailwindcss/postcss` and `autoprefixer` inside [postcss.config.js](file:///c:/Dev/Portfolio/postcss.config.js).
- [src/styles/globals.css](file:///c:/Dev/Portfolio/src/styles/globals.css): Integrates `@import "tailwindcss";` alongside custom CSS variables.
- [src/styles/variables.css](file:///c:/Dev/Portfolio/src/styles/variables.css): Declares CSS Custom Properties for light/dark theme switches.
- [src/styles/animations.css](file:///c:/Dev/Portfolio/src/styles/animations.css): Stores bespoke CSS keyframe animations (such as float or bounce utilities).

### 3. Theme Toggle Support
Dark mode state is driven by the [useTheme](file:///c:/Dev/Portfolio/src/hooks/useTheme.ts) custom hook. When active, it appends the `.dark` selector class to the root `<html>` element, which toggles color properties declared in `variables.css` and triggers Tailwind dark classes (`dark:...`).

### 4. Client-Side Routing
React Router is set up inside [src/routes/index.tsx](file:///c:/Dev/Portfolio/src/routes/index.tsx):
- Runs via `createBrowserRouter` using the unified [RootLayout](file:///c:/Dev/Portfolio/src/layouts/RootLayout.tsx).
- Routes automatically load sub-pages (`Home`, `About`, `Skills`, `Experience`, `Projects`, `Certifications`, `Contact`).
- Catch-all fallback path resolves to `NotFound` (404 page).

---

## 💻 Developer Guide

### Prerequisites
- Node.js (Active LTS recommended)
- npm or equivalent package manager

### Available Commands

| Command | Action |
|:---|:---|
| `npm run dev` | Spins up the Vite development server locally |
| `npm run build` | Validates TypeScript schemas and bundles output to `/dist` |
| `npm run lint` | Evaluates ESLint guidelines to catch bugs and style mismatches |
| `npm run preview` | Serves the built production static site locally for inspection |
