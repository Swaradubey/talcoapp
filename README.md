# Talco Website — Next.js

A complete multi-page website for **Talco** built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Pages

| Route | Page |
|---|---|
| `/` | Homepage with hero, stats, and quick navigation |
| `/app-info` | App Information — platforms, features, changelog, company info |
| `/support` | Support & Help — searchable FAQ with category filtering |
| `/contact` | Contact Us — email/chat channels + contact form |
| `/privacy-policy` | Privacy Policy — full legal document |
| `/delete-account` | Delete Account — warning, in-app steps, deletion request form |

## Tech Stack

- **Next.js 14** with App Router
- **TypeScript**
- **Tailwind CSS**
- **Google Fonts** — Syne (display), DM Sans (body), DM Mono (mono)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Design System

| Token | Value |
|---|---|
| Background | `#0A0A0F` |
| Surface | `#111118` |
| Card | `#16161F` |
| Border | `#1E1E2E` |
| Accent | `#6EE7B7` (green) |
| Text | `#F0F0F5` |
| Subtext | `#9CA3AF` |

## Customization

- Update company details in `/app/app-info/page.tsx`
- Change brand name/logo in `/components/Navbar.tsx` and `/components/Footer.tsx`
- Update contact emails across all pages
- Modify FAQ content in `/app/support/page.tsx`
- Edit privacy policy sections in `/app/privacy-policy/page.tsx`
