# Choco Crafy by Hina

Website for a small handmade chocolate and gift business. Customers browse the range, see prices and order straight through WhatsApp with one tap, so there is no checkout or account to deal with.

## Features

- Product catalog with prices in PKR: truffle boxes, chocolate bars, gift sets, brownies and fudge
- **Order on WhatsApp:** every product has a button that opens WhatsApp with the order already written, including the product name and price
- A separate **Gifts** page
- Floating WhatsApp button on every page
- Hero, about, products and contact sections
- Fully responsive, built mobile first
- Supabase client set up and ready for a product database

## Tech stack

- React 18 with TypeScript
- Vite
- Tailwind CSS and shadcn/ui (Radix UI)
- React Router, TanStack Query
- Supabase JS client
- Vitest

## Getting started

```bash
npm install
npm run dev
```

The site runs at `http://localhost:8080`.

Other scripts:

```bash
npm run build     # production build in dist/
npm run preview   # serve the production build
npm run test      # run tests
npm run lint
```

## Environment

The app reads its Supabase settings from `.env`:

| Variable | Purpose |
|---|---|
| `VITE_SUPABASE_URL` | Project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Public (anon) key, safe to ship to the browser |
| `VITE_SUPABASE_PROJECT_ID` | Project ID |

## Project structure

```
src/
  pages/        Index (home), Gifts, NotFound
  components/   Navbar, HeroSection, AboutSection, ProductsSection,
                ContactSection, Footer, WhatsAppFloat, ui/ (shadcn)
  integrations/ Supabase client and types
supabase/       Supabase project config
```

---

Built by [Zain Ul Abideen](https://github.com/zainulabideen5)
