# Quick Netlify Setup

## 🚀 Fastest Way to Deploy

### Option 1: One-Click Deploy (Recommended)

**Click this link to deploy directly:**
https://app.netlify.com/start/deploy?repository=https://github.com/tophercook7-maker/kelseys-kustom-kreation

This will:
1. Connect your GitHub account
2. Import the repository
3. Set up the site automatically

**Then configure:**
1. **Base directory**: `site`
2. **Build command**: `npm run build` (or leave default)
3. **Publish directory**: `.next` (relative to base directory)
4. **Node version**: 20 (in Environment variables) - **Required for Next.js 16.1.0**

**Important**: The `netlify.toml` is already configured, so Netlify should auto-detect these settings!

### Option 2: Manual Setup

1. Go to https://app.netlify.com
2. Click "Add new site" → "Import an existing project"
3. Choose "GitHub"
4. Select: `tophercook7-maker/kelseys-kustom-kreation`
5. Configure:
   - **Base directory**: `site`
   - **Build command**: `npm run build` (or leave default - netlify.toml handles it)
   - **Publish directory**: `.next` (relative to base directory)
6. Click "Deploy site"

**Note**: The `netlify.toml` file should auto-configure most settings. If you see 404 errors, make sure:
- Base directory is set to `site`
- The @netlify/plugin-nextjs is installed (it's in package.json)
- Node version is set to 18

### Environment Variables

After deployment, add these in Site settings → Environment variables:

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY = pk_test_...
STRIPE_SECRET_KEY = sk_test_...
NEXT_PUBLIC_SITE_URL = https://your-site-name.netlify.app
```

### Custom Domain

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Enter: `kelseys.mixedmakershop.com`
4. Follow DNS instructions

---

**Your repo is ready**: https://github.com/tophercook7-maker/kelseys-kustom-kreation

