#!/bin/bash
set -e

# Ensure Node.js 20.11.1 is used
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Install and use Node 20.11.1 if not already active
if ! command -v node &> /dev/null || [ "$(node -v | cut -d'v' -f2 | cut -d'.' -f1)" != "20" ]; then
  echo "Installing Node.js 20.11.1..."
  nvm install 20.11.1
  nvm use 20.11.1
fi

# Verify Node version
echo "Using Node.js version: $(node -v)"
echo "Using npm version: $(npm -v)"

# Run the build
npm run build
