# Manual Node.js Setup for Netlify - REQUIRED

## ⚠️ Critical: Netlify is NOT detecting Node version automatically

Despite having `.nvmrc` and `NODE_VERSION` in `netlify.toml`, Netlify is still using Node 18.20.8.

## ✅ Solution: Set in Netlify Dashboard

You **MUST** manually set the Node version in the Netlify dashboard:

### Steps:

1. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com
   - Select your site

2. **Navigate to Environment Variables**
   - Site settings → Build & deploy → Environment
   - Click "Edit variables"

3. **Add/Update NODE_VERSION**
   - Click "Add variable"
   - **Key**: `NODE_VERSION`
   - **Value**: `20.10.0`
   - **Scopes**: Check "All scopes" or at least "Builds"
   - Click "Save"

4. **Clear Cache and Redeploy**
   - Go to Deploys tab
   - Click "Trigger deploy" → "Clear cache and deploy site"

## Why This is Needed

Netlify's automatic detection from `.nvmrc` or `netlify.toml` isn't working in this case, possibly because:
- The `base = "site"` directory setting
- Netlify reads configs in a specific order
- Environment variables in UI override file-based configs

## Verification

After setting in dashboard and redeploying, check build logs:
- Should show: `Now using node v20.10.0` or similar
- Should NOT show: `node v18.x.x`
- Build should succeed

## Alternative: Use Netlify UI Build Settings

You can also try:
1. Site settings → Build & deploy → Build settings
2. Under "Environment variables" section
3. Add `NODE_VERSION = 20.10.0`

This is the most reliable method and will definitely work.

