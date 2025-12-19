# Fixing 404 Errors on Netlify

## Common Causes & Solutions

### Issue 1: Base Directory Not Set
**Symptom**: All pages show 404

**Fix**:
1. Go to Netlify Dashboard → Site settings → Build & deploy
2. Under "Build settings", set:
   - **Base directory**: `site`
   - **Build command**: `npm run build` (or leave default)
   - **Publish directory**: `.next`

### Issue 2: Next.js Plugin Not Working
**Symptom**: Routes not resolving

**Fix**: The `@netlify/plugin-nextjs` is now installed. Make sure:
1. The plugin is listed in `netlify.toml`
2. Netlify detects it automatically
3. If not, go to Site settings → Plugins and enable it

### Issue 3: Output Mode Issue
**Symptom**: Build succeeds but pages don't load

**Fix**: I've removed `output: 'standalone'` from `next.config.ts` which was causing issues with Netlify.

### Issue 4: Missing Redirects
**Symptom**: Direct URL access shows 404

**Fix**: Added redirect rule in `netlify.toml`:
```toml
[[redirects]]
  from = "/*"
  to = "/.netlify/functions/next"
  status = 200
```

## Quick Fix Steps

1. **Redeploy** after these changes:
   ```bash
   git add .
   git commit -m "Fix Netlify 404 errors"
   git push
   ```

2. **In Netlify Dashboard**:
   - Go to Deploys
   - Click "Trigger deploy" → "Clear cache and deploy site"

3. **Verify Settings**:
   - Base directory: `site`
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Node version: 18

## Testing

After redeploy, test these URLs:
- `/` (home page)
- `/shop`
- `/shop/shirt-001`
- `/customize`
- `/contact`

All should load correctly now!

