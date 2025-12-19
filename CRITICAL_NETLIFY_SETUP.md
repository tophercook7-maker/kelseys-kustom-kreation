# ⚠️ CRITICAL: Netlify Node Version Setup

## The Problem
Netlify is **NOT** automatically detecting Node 20 from our config files. You **MUST** set it manually in the Netlify dashboard.

## ✅ Solution: Set in Netlify Dashboard (REQUIRED)

### Step-by-Step Instructions:

1. **Go to Netlify Dashboard**
   - Visit: https://app.netlify.com
   - Sign in if needed

2. **Select Your Site**
   - Click on your site name

3. **Navigate to Environment Variables**
   - Click: **Site settings** (top right, gear icon)
   - Click: **Build & deploy** (left sidebar)
   - Click: **Environment** (under "Build settings")
   - Click: **Edit variables** button

4. **Add NODE_VERSION**
   - Click: **Add variable** button
   - **Key**: `NODE_VERSION`
   - **Value**: `20.10.0`
   - **Scopes**: Check ✅ **All scopes** (or at least "Builds")
   - Click: **Save**

5. **Clear Cache and Redeploy**
   - Go to **Deploys** tab (top navigation)
   - Click: **Trigger deploy** dropdown
   - Select: **Clear cache and deploy site**
   - Wait for build to complete

## ✅ Verification

After setting and redeploying, check the build logs. You should see:
- ✅ `Now using node v20.10.0` (or similar)
- ❌ NOT `node v18.x.x`

## Why This is Needed

Despite having:
- ✅ `.nvmrc` file (root)
- ✅ `.node-version` file (root)  
- ✅ `NODE_VERSION` in `netlify.toml`
- ✅ `engines.node` in `package.json`

Netlify's automatic detection **is not working** when `base = "site"` is set. This is a known Netlify limitation.

**The dashboard setting overrides everything and is the only reliable method.**

## Alternative: Use Netlify UI Build Settings

If environment variables don't work, try:
1. Site settings → Build & deploy → Build settings
2. Scroll to "Environment variables" section
3. Add `NODE_VERSION = 20.10.0` there

---

**This is the ONLY way to fix the Node version issue. The config files alone won't work.**

