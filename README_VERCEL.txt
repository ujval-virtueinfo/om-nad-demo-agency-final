This package was prepared for Vercel static deployment.

What I changed:
- Converted root-relative asset links that start with "/" to relative "./" when safe.
- Ensured an index.html exists at the project root (copied if found deeper).
- Added vercel.json with routing:
  * Clean URLs: /about -> /about.html (if present)
  * SPA fallback: unknown routes fall back to /index.html
- Added cache-control headers for common static assets.

How to deploy:
1. Go to https://vercel.com/dashboard
2. Import Project -> Upload (select this ZIP)
3. No build step required. Deploy.

If you prefer strict static behavior (true 404s) or different caching rules, tell me and I'll update the package.
