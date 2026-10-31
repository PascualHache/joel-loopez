# Joel Loopez — Original Music & Audio Services

React + Vite single-page site. Styling is plain CSS with custom properties layered
on top of the [Radix color scales](https://www.radix-ui.com/colors) — no CSS
framework, no CSS-in-JS.

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production bundle in dist/
npm run preview  # serve the build locally
```

## Structure

```
index.html
src/
  main.jsx            React entry
  App.jsx             section composition / page order
  components/         one .jsx + matching .css per component
  data/               site copy, track list, tool list
  styles/
    tokens.css        Radix imports + semantic design tokens
    global.css        reset, base elements, layout primitives
```

## Theming

All colors, spacing, radii and type sizes live as custom properties in
[`src/styles/tokens.css`](src/styles/tokens.css). Radix scales are imported there
(`--red-9`, `--gray-11`, …) and aliased to semantic names (`--accent-9`,
`--text-muted`, …) that components consume. Swap the imported scale — e.g.
`red-dark.css` → `crimson-dark.css` — to re-brand without touching components.

## Content

Copy and media live in [`src/data/site.js`](src/data/site.js). Hero and about
images currently point at Unsplash placeholders; drop real assets in `public/`
and reference them as `/filename.jpg`.

Songs are client-editable in Sanity (project `cabiyw63`, dataset `production`).
The Studio lives in [`studio-joel-loopez/`](studio-joel-loopez/) with its own
`package.json` and is deployed to Sanity's hosting, not Vercel. The site reads
published songs from the API CDN at runtime ([`src/lib/sanity.js`](src/lib/sanity.js),
[`useCanciones`](src/hooks/useCanciones.js)), so content changes need no deploy.

The site needs these variables in `.env.local` and in Vercel:

```bash
VITE_SANITY_PROJECT_ID=cabiyw63
VITE_SANITY_DATASET=production
```

Studio, from `studio-joel-loopez/`:

```bash
npm run dev                                   # http://localhost:3333
npx sanity deploy                             # after any schema/config change
npx sanity cors add https://your-domain.com --no-credentials
```

## Deploying to Vercel

[`vercel.json`](vercel.json) is preconfigured (Vite framework preset, `dist`
output, SPA rewrite). Import the repo on Vercel, or:

```bash
npx vercel        # preview
npx vercel --prod # production
```
