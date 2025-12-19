# Troubleshooting Netlify Node Version Issue

## If NODE_VERSION is Already Set in Dashboard But Still Using Node 18

### Check These Things:

1. **Verify the Variable is Set Correctly**
   - Go to: Site settings → Build & deploy → Environment
   - Look for `NODE_VERSION`
   - Value should be exactly: `20.10.0` (not `20` or `"20.10.0"` with quotes)
   - Scope should include "Builds"

2. **Check for Typos**
   - Variable name must be exactly: `NODE_VERSION` (all caps, underscore)
   - Not: `node_version`, `NODE-VERSION`, `NodeVersion`

3. **Clear All Caches**
   - Deploys → Trigger deploy → **Clear cache and deploy site**
   - Also try: Site settings → Build & deploy → Build settings → "Clear build cache"

4. **Check Build Logs**
   - Look at the very beginning of the build log
   - Should show: `Now using node v20.10.0`
   - If it shows `node v18.x.x`, the variable isn't being read

5. **Try Different Approaches**

   **Option A: Remove Base Directory (Temporary Test)**
   - Temporarily remove `base = "site"` from netlify.toml
   - Move netlify.toml into site/ directory
   - Update paths accordingly
   - See if Node version is detected

   **Option B: Use Build Command with Node Version**
   - Change build command to: `nvm use 20.10.0 && npm run build`
   - But this requires nvm to be available

   **Option C: Contact Netlify Support**
   - If dashboard setting isn't working, this might be a Netlify bug
   - They can check your site's actual configuration

6. **Verify Netlify is Reading Your Config**
   - In build logs, look for "Resolved config" section
   - Should show: `NODE_VERSION` in environment list
   - If it's there but still using Node 18, it's a Netlify issue

## Alternative: Downgrade Next.js (Not Recommended)

If nothing works, you could downgrade Next.js to a version that supports Node 18:
- Next.js 15.x supports Node 18
- But you'd lose Next.js 16 features

## Most Likely Issue

If you've set it in the dashboard correctly and it's still not working:
1. **Cache issue** - Clear all caches and redeploy
2. **Scope issue** - Make sure variable scope includes "Builds"
3. **Netlify bug** - Contact support with your site URL

## Quick Test

Try setting the variable with a different name to test:
- Add: `NODEJS_VERSION = 20.10.0` (some systems use this)
- Or: `NVM_NODE_VERSION = 20.10.0`

If those work, it confirms the `NODE_VERSION` variable name isn't being recognized.

