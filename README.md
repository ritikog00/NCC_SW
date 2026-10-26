# DTU NCC Girls Wing Website

A responsive React + Vite website based on the supplied DTU NCC Girls Wing mockups and achievement document. It includes Home, Updates, Achievements, Camps, Samaant, and About Us pages.

## Run locally

1. Install Node.js 20 or newer.
2. From this folder, run `npm install`.
3. Run `npm run dev` and open the local address Vite prints.

To create a production build, run `npm run build`. The output is written to `dist/`.

The app is a static client-side site; no database or API credentials are needed. If deploying to a static host, configure it to serve `index.html` for the routes `/about`, `/updates`, `/achievements`, `/campus`, and `/samaant`.

## Content and assets

- `src/data/achievements.ts` contains the verified achievement highlights used by the pages.
- `public/images/achievement/` contains images extracted from the supplied Word document.
- `public/images/ncc-badge.png` is the DTU NCC badge supplied for the site.
- `public/images/home-training.jpg` is the supplied cadet group photo, rotated upright for the home hero.
- `public/images/cto-parinita-sinha.jpg` is the supplied portrait used in the Care Taking Officer section.
- `public/images/samaant-group.jpg`, `samaant-command.jpg`, and `samaant-moments.jpg` are supplied Samaant ’26 photos.
- `public/images/under-officers.jpg` and the camp photos are supplied photos used on the Home and Campus pages.
- `public/images/cadet-community-wide.jpg` is the supplied cadet group photo, rotated to landscape for About Us and the cadet community gallery.
- `public/images/suo-kanak-nagpal.jpg` is the supplied portrait used for the RCTC profile.
- The footer links to the official Delhi Technological University website: https://dtu.ac.in/
- `source-material/achievement-source.docx` is the original document used for the site content.
