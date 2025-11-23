RC Video Vision — Website Project
================================

This folder contains a ready-to-edit React + Vite + Tailwind project for rcvideovision.in.
Build locally with Node.js and deploy the `dist/` contents to Hostinger `public_html`.

Quick start (local):
1. Install Node.js LTS
2. npm install
3. npm run dev    # for development
4. npm run build  # creates `dist/` folder ready for upload to Hostinger

Files to replace with your media:
- public/assets/images/  (put your photos here)
- public/assets/videos/  (put your project videos here; hero-loop.mp4 is referenced)
- Update send-email.php with your contact email and create that mailbox at Hostinger

Hostinger upload:
- Zip the contents of `dist/` and extract to `public_html` via hPanel -> File Manager or use FTP.

