# Node.js Version Fix for Netlify

## Problem
Netlify is still using Node 18 even though we've configured Node 20.

## Solution Applied

### 1. Added .nvmrc in Root Directory
- Created `.nvmrc` in project root
- Contains: `20.10.0`
- Netlify checks root directory first

### 2. Updated netlify.toml
- Changed `NODE_VERSION = "20"` to `NODE_VERSION = "20.10.0"`
- More explicit version specification

### 3. Kept .nvmrc in site/ Directory
- Also exists in `site/.nvmrc`
- Covers both detection methods

## How Netlify Detects Node Version

Netlify checks in this order:
1. `NODE_VERSION` environment variable (from netlify.toml or dashboard)
2. `.nvmrc` file in root directory
3. `.nvmrc` file in base directory (if base directory is set)

## Next Steps

1. **Push these changes to GitHub**
2. **In Netlify Dashboard**:
   - Go to Site settings → Build & deploy → Environment
   - Add/Update: `NODE_VERSION = 20.10.0`
   - OR verify it's reading from netlify.toml
3. **Clear cache and redeploy**:
   - Deploys → Trigger deploy → Clear cache and deploy site

## Verification

After deploy, check build logs for:
- Should show: `Now using node v20.10.0`
- Should NOT show: `node v18.x.x`

If still showing Node 18, manually set in Netlify dashboard environment variables.

