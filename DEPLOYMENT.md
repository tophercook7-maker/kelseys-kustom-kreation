# Deployment Guide
## Kelsey's Kustom Kreation

### Pre-Deployment Checklist

1. **Environment Variables**
   - Set up Stripe account and get API keys
   - Add keys to Netlify environment variables

2. **Images**
   - Add hero background image: `site/public/images/hero-bg.jpg`
   - Add product images to `site/public/images/products/`
   - Replace placeholder images

3. **Logo**
   - Generate PNG versions from SVG if needed
   - Place in `site/public/` directory

4. **Domain Configuration**
   - Configure subdomain: `kelseys.mixedmakershop.com`
   - Set up DNS records in Netlify

### Netlify Deployment Steps

1. **Connect Repository**
   - Push code to Git repository (GitHub, GitLab, or Bitbucket)
   - Connect repository to Netlify

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

3. **Environment Variables**
   Add these in Netlify dashboard:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
   STRIPE_SECRET_KEY=sk_live_...
   NEXT_PUBLIC_SITE_URL=https://kelseys.mixedmakershop.com
   ```

4. **Domain Setup**
   - Go to Domain settings in Netlify
   - Add custom domain: `kelseys.mixedmakershop.com`
   - Follow DNS configuration instructions
   - Enable HTTPS (automatic with Netlify)

5. **Deploy**
   - Netlify will automatically deploy on push
   - Or trigger manual deploy from dashboard

### Post-Deployment

1. **Test Checkout Flow**
   - Test with Stripe test mode first
   - Verify order confirmation emails
   - Test all product pages

2. **Verify Images**
   - Check all product images load correctly
   - Verify hero background displays properly
   - Test on mobile devices

3. **SEO Setup**
   - Update metadata in `app/layout.tsx` if needed
   - Add Google Analytics if desired
   - Set up search console

### Stripe Setup

1. **Create Stripe Account**
   - Sign up at stripe.com
   - Complete account verification

2. **Get API Keys**
   - Dashboard → Developers → API keys
   - Copy Publishable key and Secret key
   - Use test keys for development
   - Use live keys for production

3. **Webhook Setup** (Optional)
   - Set up webhook endpoint for order processing
   - URL: `https://kelseys.mixedmakershop.com/api/webhooks/stripe`
   - Events: `checkout.session.completed`

### Troubleshooting

**Build Fails**
- Check Node version (should be 18+)
- Verify all dependencies installed
- Check for TypeScript errors

**Images Not Loading**
- Verify image paths in `lib/products.ts`
- Check file names match exactly
- Ensure images are in `public/images/` directory

**Stripe Checkout Not Working**
- Verify API keys are set correctly
- Check Stripe dashboard for errors
- Verify webhook endpoints if using

**Domain Not Working**
- Check DNS records
- Wait for DNS propagation (up to 48 hours)
- Verify SSL certificate is active

### Support

For deployment issues, check:
- Netlify documentation
- Next.js deployment guide
- Stripe integration docs

Contact: hello@kelseys.mixedmakershop.com

