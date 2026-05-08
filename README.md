# vitalitydose.in

Rebuilt static multipage website for Cloudflare Pages / GitHub Pages.

## Structure

- `index.html` — homepage
- `products/` — product listing plus 27 product detail pages
- `tools/` — tools hub plus BMI, TDEE, macros, ideal weight, and body fat calculators
- `assets/css/global.css` — shared styles extracted from original inline CSS
- `assets/js/main.js` — nav, reveal, FAQ, guide expand
- `assets/js/tools.js` — all calculator logic
- `assets/js/products.js` — product filters
- `assets/data/products.json` — structured product data
- `_headers`, `_redirects`, `robots.txt`, `sitemap.xml`, `site.webmanifest` — Cloudflare/SEO support

## Deploy

Upload this folder to your GitHub repository root, then connect the repo to Cloudflare Pages. Build command: leave blank. Output directory: `/` or root.

## Adding product images

Place images in `assets/images/` and reference them from product pages or `products.json`.
