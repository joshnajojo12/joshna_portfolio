# Joshna Jojo Portfolio

## Overview
A freelance designer & developer portfolio website built with Next.js 14, featuring interactive animations with Framer Motion and GSAP, styled with Tailwind CSS and styled-components.

## Project Structure
- `/app` - Next.js 14 App Router pages and components
  - `/_components` - Reusable UI components
  - `/_config` - Configuration files
  - `/_data` - Static data (nav items, social links, etc.)
  - `/_fonts` - Custom font definitions
  - `/_hooks` - Custom React hooks (Lenis scrolling, parallax, etc.)
  - `/_layout` - Layout components (header, footer, thumbnail)
  - `/_lib` - Library utilities
  - `/_utils` - Utility functions
- `/public` - Static assets (images, fonts, etc.)

## Technologies
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- styled-components
- Framer Motion
- GSAP
- Lenis (smooth scrolling)
- next-cloudinary (image optimization)
- nodemailer (contact form)

## Running the Project
The development server runs on port 5000:
```bash
npm run dev -- -p 5000 -H 0.0.0.0
```

## Environment Variables
This project may use the following environment variables (see `.env.local.example`):
- `EMAIL_USER` - Email address for contact form
- `EMAIL_PASSWORD` - App password for email service

## Recent Changes
- January 31, 2026: Fixed client-side errors
  - Updated thumbnail-options.js to use local images instead of missing video files
  - Updated project-options.js to use local images instead of Cloudinary videos
  - Added null checks to GSAP hooks (use-follow-pointer.js) to prevent TypeError
  - Fixed github.svg reference to use existing github.png
- January 31, 2026: Initial import and Replit environment setup
