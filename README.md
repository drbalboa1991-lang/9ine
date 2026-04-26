# 9ine

A pixel-faithful React + Vite clone of the Sex9ine homepage (https://sex9ine.wpenginepowered.com).

Built with React 18, Vite, Bootstrap 5 (with the original Picostrap theme tokens), and Swiper for the reviews carousel. All images, fonts, and SVGs are mirrored from the source under `public/assets/`.

## Run locally

```bash
cd 9ine
npm install
npm run dev
```

Open http://localhost:5173.

## Build

```bash
npm run build
npm run preview
```

The production bundle is emitted to `dist/`.

## Project structure

```
9ine/
├── public/assets/        # original images, icons, SVGs, fonts
├── src/
│   ├── components/       # one file per page section
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── IconFeatures.jsx
│   │   ├── FeatureImage.jsx
│   │   ├── MostWanted.jsx
│   │   ├── WhySex9ine.jsx
│   │   ├── Categories.jsx
│   │   ├── Reviews.jsx
│   │   ├── FAQ.jsx
│   │   ├── Photostrip.jsx
│   │   └── Footer.jsx
│   ├── styles/global.css # custom CSS + Bootstrap token overrides
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
└── package.json
```

## Deploy to Vercel

The simplest path:

```bash
npm install -g vercel
vercel
```

Vercel auto-detects Vite. Accept the defaults. For production:

```bash
vercel --prod
```

Or import the GitHub repo at https://vercel.com/new — Framework Preset will be `Vite`, build command `npm run build`, output dir `dist`.

## Notes on fidelity

- Theme color tokens (`--bs-primary` etc.) are taken directly from the source's compiled `bundle.css`.
- Fonts: `Chewy` (headings, button text) and `Montserrat` (body) match the original.
- The photostrip gradient animation, hero rounded-corner layout, and `.black-69-btn` hover transform are reproduced from the source's inline `wp-custom-css`.
- FAQ answer copy was placeholder on the source site (`Answer for FAQ item N goes here.`) and has been replaced with reasonable defaults.
