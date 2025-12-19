# Netlify Setup Guide

Your repository has been pushed to GitHub:
**https://github.com/tophercook7-maker/kelseys-kustom-kreation**

## Quick Setup Steps

### Option 1: Automatic Setup via Netlify Dashboard (Recommended)

1. **Go to Netlify**
   - Visit https://app.netlify.com
   - Sign in or create an account

2. **Import from Git**
   - Click "Add new site" → "Import an existing project"
   - Choose "GitHub"
   - Authorize Netlify to access your GitHub account
   - Select repository: `tophercook7-maker/kelseys-kustom-kreation`

3. **Configure Build Settings**
   - **Base directory**: `site`
   - **Build command**: `npm run build`
   - **Publish directory**: `site/.next`
   - **Node version**: 18 (set in Environment variables)

4. **Add Environment Variables**
   Click "Show advanced" → "New variable" and add:
   ```
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_... (your Stripe key)
   STRIPE_SECRET_KEY = sk_test_... (your Stripe key)
   NEXT_PUBLIC_SITE_URL = https://kelseys.mixedmakershop.com
   ```

5. **Deploy**
   - Click "Deploy site"
   - Wait for build to complete

6. **Set Custom Domain**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `kelseys.mixedmakershop.com`
   - Follow DNS configuration instructions
   - Netlify will automatically provision SSL

### Option 2: Netlify CLI

If you have Netlify CLI installed:

```bash
cd site
netlify login
netlify init
# Follow prompts:
# - Create & configure a new site
# - Team: (select your team)
# - Site name: kelseys-kustom-kreation
# - Build command: npm run build
# - Directory to deploy: .next
# - Netlify functions folder: (leave blank)

# Set environment variables
netlify env:set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY "pk_test_..."
netlify env:set STRIPE_SECRET_KEY "sk_test_..."
netlify env:set NEXT_PUBLIC_SITE_URL "https://kelseys.mixedmakershop.com"

# Deploy
netlify deploy --prod
```

### Domain Configuration

1. **In Netlify Dashboard:**
   - Go to Site settings → Domain management
   - Add custom domain: `kelseys.mixedmakershop.com`

2. **DNS Settings:**
   - Netlify will provide DNS records
   - Add these to your domain provider (where mixedmakershop.com is hosted)
   - Type: CNAME
   - Name: kelseys
   - Value: (provided by Netlify)

3. **SSL Certificate:**
   - Netlify automatically provisions SSL
   - HTTPS will be enabled once DNS propagates (can take up to 48 hours)

### Post-Deployment Checklist

- [ ] Site builds successfully
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Stripe checkout works (test mode first!)
- [ ] Custom domain is active
- [ ] SSL certificate is provisioned
- [ ] Test on mobile devices

### Stripe Setup

1. **Get Stripe Keys:**
   - Sign up at https://stripe.com
   - Go to Developers → API keys
   - Copy Publishable key and Secret key
   - Use test keys for development
   - Switch to live keys for production

2. **Webhook (Optional):**
   - In Stripe Dashboard → Webhooks
   - Add endpoint: `https://kelseys.mixedmakershop.com/api/webhooks/stripe`
   - Select events: `checkout.session.completed`

### Troubleshooting

**Build Fails:**
- Check Node version (should be 18)
- Verify all dependencies in package.json
- Check build logs in Netlify dashboard

**Images Not Loading:**
- Verify SVG files are in `public/images/`
- Check file paths in `lib/products.ts`

**Domain Not Working:**
- Wait for DNS propagation (up to 48 hours)
- Verify DNS records are correct
- Check SSL certificate status

### Support

- Netlify Docs: https://docs.netlify.com
- Next.js on Netlify: https://docs.netlify.com/integrations/frameworks/next-js/
- Your repo: https://github.com/tophercook7-maker/kelseys-kustom-kreation

---

**Your site is ready to deploy!** 🚀

