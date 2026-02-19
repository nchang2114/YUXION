# Yuxion Marketing Site

Production-ready marketing and commerce demo site for **Yuxion**, a multi-discipline creative company spanning games, apps, film, furniture, and tech fashion.

Built with Next.js App Router, TypeScript, Tailwind CSS, Framer Motion, and local content data.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start development server:

```bash
npm run dev
```

3. Open:

```text
http://localhost:3000
```

## Scripts

- `npm run dev` - Run local dev server
- `npm run build` - Create production build
- `npm run start` - Run production server
- `npm run lint` - Run Next.js lint checks
- `npm run typecheck` - Run TypeScript checks

## Routes

- `/` - Home
- `/work` - Work index with category filters
- `/work/[slug]` - Work detail
- `/studio` - Studio story, process, team
- `/store` - Store index with category filters
- `/shop/[slug]` - Product detail
- `/checkout` - Mock checkout (no payment processing)
- `/journal` - Journal index
- `/journal/[slug]` - Journal article
- `/support` - Contact support page
- `/faqs` - FAQs
- `/tos` - Terms of Service
- `/privacy` - Privacy policy

## Where to Edit Content

- Work case studies: `content/work.ts`
- Store products: `content/products.ts`
- Journal posts: `content/journal.ts`

## Core UI and Layout

- Global shell (navbar/footer/transitions): `components/layout/site-shell.tsx`
- Theme + cart providers: `components/providers/site-providers.tsx`
- Shared UI primitives: `components/ui/*`
- Work and store filter grids: `components/work/work-filter-grid.tsx`, `components/store/store-filter-grid.tsx`

## Theming and Visual System

- Global CSS tokens and gradients: `app/globals.css`
- Tailwind design extensions: `tailwind.config.ts`
- Theme persistence: `next-themes` via `components/providers/theme-provider.tsx`

## Deployment Notes

- Deploy on Vercel or any Node 18+ environment.
- Build command: `npm run build`
- Start command: `npm run start`
- All data is local and static; no backend required.
- Cart and newsletter are browser-local demos only.
