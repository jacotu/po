# Punctum Obscurum

A site about punctuation — remembered and forgotten symbols.

## Running the project

- `npm install` — install dependencies  
- `npm run dev` — start the development server  
- `npm run build` — production build  

The ABC Daily font files are expected at `public/fonts/`:
`ABCDailySlabVariable-Trial.ttf`, `ABCDailySlabMonoVariable-Trial.ttf`.

## Deploying to Vercel

The repo now includes [vercel.json](/Users/daniel/Downloads/Punctum%20Obscurum/vercel.json), so Vercel can build it as a `Vite` app and serve SPA routes correctly.

Deploy steps:

1. Import the repo into Vercel.
2. Keep the detected build command as `npm run build`.
3. Keep the output directory as `dist`.
4. Deploy.
  
