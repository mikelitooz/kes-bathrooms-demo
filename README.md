# Yorkshire Home Interiors Ltd Demo

An isolated premium Next.js demo website for Yorkshire Home Interiors Ltd.

## Run locally

```bash
cd yorkshire-home-interiors-demo
npm run dev
```

This workspace already has the required packages installed in the parent folder, so the scripts use the parent `node_modules` for local preview. For deployment, run `npm install` inside this folder or let Vercel install from this `package.json`.

## Deploy to Vercel

1. Push this folder to GitHub, either as its own repository or as a monorepo folder.
2. In Vercel, import the repository.
3. Set the root directory to `yorkshire-home-interiors-demo`.
4. Use the default Next.js settings.

## Replacing Demo Media

Update image URLs in `src/data/site.ts`. Each collection, gallery, and hero image is controlled from that single file.

## Adding Products

Add another item to `collections` in `src/data/site.ts` with a title, description, price label, and image URL.
