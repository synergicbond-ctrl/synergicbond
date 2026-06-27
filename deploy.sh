#!/bin/bash

# =========================
# CLEAN PROJECT
# =========================
rm -rf .next node_modules/.cache

# =========================
# INSTALL
# =========================
npm install

# =========================
# BUILD
# =========================
npm run build

# =========================
# DEPLOY
# =========================
vercel deploy --prod --force --yes

# =========================
# DOMAIN LINK
# =========================
DEPLOY_URL=$(vercel ls | grep vercel.app | head -1 | awk '{print $2}')
vercel alias set $DEPLOY_URL www.synergicbond.com
