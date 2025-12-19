# Final Attempt: Netlify Node Version Fix

## The Real Problem
When `base = "site"` is set, Netlify changes to that directory **BEFORE** applying environment variables from the dashboard. This is a known Netlify limitation.

## Solution: Check These Specific Things

### 1. Verify Variable is Actually Set
In Netlify Dashboard:
- Site settings → Build & deploy → Environment
- Look for `NODE_VERSION` in the list
- Click on it to edit
- Value should be exactly: `20.10.0` (no quotes, no spaces)
- Scope should be: **"All scopes"** or at least **"Builds"**

### 2. Delete and Re-add the Variable
Sometimes Netlify caches old values:
1. Delete `NODE_VERSION` variable
2. Save
3. Add it again: `NODE_VERSION = 20.10.0`
4. Set scope to "All scopes"
5. Save

### 3. Check Build Logs Carefully
Look at the **very first lines** of the build log:
- Should show: `Now using node v20.10.0`
- If it shows `node v18.x.x`, the variable isn't being read

### 4. Try Without Base Directory (Test)
As a test, temporarily:
1. Remove `base = "site"` from netlify.toml
2. Change command to: `cd site && npm run build`  
3. Change publish to: `site/.next`
4. Deploy and see if Node version is detected

If this works, the issue is the base directory setting.

### 5. Contact Netlify Support
If the variable is set correctly in dashboard but still using Node 18, this is likely a Netlify bug. Contact support with:
- Site URL
- Screenshot of environment variables showing NODE_VERSION = 20.10.0
- Build log showing Node 18.20.8

They can check your site's actual configuration on their end.

## Most Likely Issue
The `base = "site"` directory is preventing the environment variable from being applied. This is a Netlify limitation when using base directories.

**Next step**: Try removing `base = "site"` temporarily to test if that's the issue.

