# JT SportsFest XIII

The website for the 13th edition of JT SportsFest at LGS Johar Town. It brings the event details, sports categories, rules, and registration together so participants can find what they need before taking part.

The site is built with Next.js, React, and TypeScript, with Tailwind CSS for styling and Motion for animations. It uses the local Nexa font files in `src/app/fonts`.

## Running it locally

You'll need Node.js and npm installed. From the repository root, open the app folder, install the dependencies, and start the development server:

```bash
cd jt-sportsfest
npm install
npm run dev
```

Then open [localhost:3000](http://localhost:3000). Changes to the source files will appear as you save them.

If you're already in the `jt-sportsfest` folder, skip the `cd` step. You only need to install dependencies on the first run or when they change.

## Where to make changes

- `src/app/page.tsx` puts the home page sections together.
- `src/app/sports/page.tsx` contains the sports grid and its static panels.
- `src/data/sports.ts` holds the sports list, dates, categories, and event rules. Keep the sport numbers in order when adding or removing an entry.
- `src/components` contains shared pieces such as the header, footer, and sport details panel.
- `src/app/globals.css` contains shared styles.
- `public/images` holds the site's images.

The registration page in `src/app/register/page.tsx` embeds a Fillout form. The registration count API reads its endpoint from `REGISTRATION_COUNT_URL`; set that in `.env.local` if you need to work on the live count. The endpoint should return JSON with a non-negative `total` value.

## Checking your changes

Run these from the app folder:

```bash
npm run lint
npm run build
```

The build also checks image paths for missing files and filename casing. This helps catch images that work on Windows but break after deployment. You can run that check separately with `npm run check:images`.

After a successful build, use `npm start` to preview the production version locally.
