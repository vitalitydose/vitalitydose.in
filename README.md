# Vitality Dose — Scalable Multipage Website

## Structure

```
/
├── index.html
├── about/
├── blog/
├── contact/
├── privacy/
├── products/
│   ├── index.html
│   └── [product-slug]/index.html
├── research/
├── tools/
├── assets/
│   ├── css/site.css
│   ├── js/site.js
│   ├── js/tools.js
│   └── images/
├── data/
│   ├── products.json
│   ├── blog.json
│   ├── research.json
│   ├── tools.json
│   └── testimonials.json
└── partials/
```

## What changed

- Converted the site into a multipage static architecture
- Added individual product pages for 31 products
- Added blog and research hubs with starter content
- Added a reusable asset library for CSS, JS, logos, product images, and client images
- Added separate tool pages with downloadable report generation
- Added stronger internal-linking paths and page-level SEO markup

## Maintenance workflow

1. Add or edit products in `data/products.json`
2. Update page copy in the relevant page folder
3. Reuse `assets/css/site.css` and `assets/js/*.js` for global changes
4. Add new articles inside `/blog/[slug]/index.html`
5. Add research updates inside `/research/[slug]/index.html`

## Before publishing

- Replace placeholder product images if you have real assets
- Replace testimonial placeholders with approved client content
- Update contact details and legal pages if needed
- Regenerate `sitemap.xml` after major page additions
