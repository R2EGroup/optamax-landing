# Optamax Landing Page

Marketing landing page for [Optamax](https://optamax.ai) — the Energy Operating System.

## Stack

- **Next.js 15** (App Router, static generation)
- **Tailwind CSS 3** with Optamax brand theme
- **Lucide React** icons
- **Geist** font family

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Environment Variables

| Variable | Default | Purpose |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | `https://optamax.ai` | Canonical site URL used in metadata, sitemap, OG images, and JSON-LD. Set this in Vercel to your live domain (e.g. `https://www.optamax.io`) to ensure canonical URLs and sitemap entries are correct. |
| `GOOGLE_SITE_VERIFICATION` | _(empty)_ | Google Search Console verification code. If set, injected into `<meta name="google-site-verification">`. |
| `BING_SITE_VERIFICATION` | _(empty)_ | Bing Webmaster Tools verification code. |

Create a `.env.local` file for local overrides:

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

## SEO Features

- App Router `sitemap.ts` → served at `/sitemap.xml`
- App Router `robots.ts` → served at `/robots.txt`
- App Router `opengraph-image.tsx` → 1200×630 OG card at `/opengraph-image`
- App Router `twitter-image.tsx` → 1200×630 Twitter card at `/twitter-image`
- App Router `manifest.ts` → `/manifest.webmanifest`
- Geo meta tags (`geo.region`, `geo.placename`, `geo.position`, `ICBM`) in `<head>`
- JSON-LD structured data: Organization (with geo), SoftwareApplication, WebSite, FAQPage

## Deployment

Deployed via Vercel. Push to `main` triggers automatic deployment.
