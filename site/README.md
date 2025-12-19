# Kelsey's Kustom Kreation - E-Commerce Website

Premium, Apple-level e-commerce website built with Next.js, Tailwind CSS, and Stripe.

## Features

- **Premium Design**: Full-canvas background with glassmorphic overlays
- **Product Gallery**: Custom shirts, tumblers, and license plates
- **Customization**: File upload and customization options for each product
- **Stripe Integration**: Secure payment processing
- **Responsive**: Fully mobile-first design
- **Netlify Ready**: Configured for deployment on Netlify

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- Framer Motion
- Stripe
- Netlify

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp .env.example .env.local
```

Add your Stripe keys:
```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_publishable_key
STRIPE_SECRET_KEY=your_secret_key
```

3. Add your background image:
- Place your hero background image at `public/images/hero-bg.jpg`
- Recommended size: 1920x1080 or larger

4. Add product images:
- Place product images in `public/images/products/`
- Update image paths in `lib/products.ts` to match your files

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard
5. Configure custom domain: `kelseys.mixedmakershop.com`

The site is pre-configured with `netlify.toml` for seamless deployment.

## Project Structure

```
site/
├── app/                    # Next.js app router pages
│   ├── api/               # API routes (Stripe checkout)
│   ├── shop/              # Shop pages
│   ├── customize/         # Customization page
│   ├── contact/           # Contact page
│   └── order-status/      # Order tracking
├── components/            # React components
├── lib/                   # Utilities and data
├── types/                 # TypeScript types
└── public/                # Static assets
```

## Customization

### Adding Products

Edit `lib/products.ts` to add new products or modify existing ones.

### Styling

Global styles are in `app/globals.css`. The design uses:
- Glass morphism effects
- Full-canvas background images
- Subtle animations with Framer Motion

### Logo

Replace `public/logo.svg` with your logo file. SVG format recommended for scalability.

## Environment Variables

Required environment variables:

- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key
- `STRIPE_SECRET_KEY`: Your Stripe secret key (server-side only)

## Support

For questions or issues, contact: hello@kelseys.mixedmakershop.com
