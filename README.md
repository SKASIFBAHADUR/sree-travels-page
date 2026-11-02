# Sree Travel Deals – React + Next.js + Tailwind CSS

Migrated from the static HTML/CSS/JS implementation into a modern, component-based Next.js App Router application with TypeScript and Tailwind CSS. The original visual design, colors, typography, media assets, and animations have been preserved 100%.

## Tech Stack
- **Framework:** Next.js (App Router)
- **UI Library:** React.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Brand CSS custom properties
- **Icons:** Lucide React & inline SVGs

## Project Structure
```text
trailblaze/
├── public/
│   └── assets/
│       ├── images/        # 37 WebP destination and gallery photos
│       └── videos/        # 4 MP4 video reels
├── src/
│   ├── app/
│   │   ├── layout.tsx     # Root layout with SEO metadata & Google Fonts
│   │   ├── page.tsx       # Main page orchestrating components
│   │   └── globals.css    # Tailwind CSS + custom brand tokens & animations
│   ├── components/
│   │   ├── Navbar.tsx         # Sticky navigation, mobile drawer & section spy
│   │   ├── Hero.tsx           # Hero section with parallax & looping video phone
│   │   ├── Introduction.tsx   # About story, counter statistics & photo collage
│   │   ├── Destinations.tsx   # 12-col asymmetric grid & upcoming packages
│   │   ├── Experiences.tsx    # Arched experiential cards
│   │   ├── VideoShowcase.tsx  # Video cards with custom play buttons
│   │   ├── Gallery.tsx        # CSS column masonry layout
│   │   ├── WhyChooseUs.tsx    # Value proposition cards
│   │   ├── CallToAction.tsx   # WhatsApp & phone CTA banner
│   │   ├── Footer.tsx         # Responsive footer with dynamic year
│   │   ├── Lightbox.tsx       # Media modal for videos and images
│   │   └── ScrollReveal.tsx   # IntersectionObserver scroll reveal hook
│   ├── data/
│   │   └── travelData.ts  # Structured content and card definitions
│   └── types/
│       └── index.ts       # TypeScript interfaces
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Getting Started

### Development
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm run start
```
