# FitTrack Frontend Assessment

FitTrack is a polished fitness and wellness frontend built as a separate project from the notes backend.

## Tech Stack

- React 18 with Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Zod validation
- Shadcn-inspired reusable UI primitives

## Features

- Responsive premium landing page with hero, social proof, features, how-it-works, testimonials, pricing, CTA, and footer.
- Sticky navbar with transparent-to-solid scroll behavior, mobile drawer, and dark mode.
- Five-step authentication/onboarding flow with animated progress, validation, selectable cards, skip options, and mobile-friendly controls.
- Dashboard with welcome header, stat cards, workout checklist, weekly activity chart, quick actions, desktop sidebar, and mobile bottom nav.

## Run Locally

```bash
npm install
npm run dev
```

Open the Vite URL, usually:

```text
http://localhost:5173
```

## Build

```bash
npm run build
```

## Project Structure

```text
src/
  components/
    ui/
      Button.jsx
      Card.jsx
      Input.jsx
      Section.jsx
    AuthFlow.jsx
    Dashboard.jsx
    Landing.jsx
    Navbar.jsx
  lib/
    utils.js
  App.jsx
  data.js
  main.jsx
  styles.css
```

## Design Notes

The interface uses a calm premium wellness palette, large confident typography, rounded surfaces, soft shadows, subtle motion, and compact dashboard layouts. The app is frontend-only with mock data because the assessment states backend integration is optional.
