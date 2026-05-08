# Vitality Dose — Website

**Science-backed nutrition coaching from Guruzala, Palnadu, Andhra Pradesh**

🌐 Live at: [vitalitydose.in](https://vitalitydose.in)

---

## 📁 File Structure

```
vitalitydose.in/
├── index.html                    ← Homepage
│
├── products/
│   ├── index.html                ← All products listing
│   ├── formula-1/index.html
│   ├── shakemate/index.html
│   ├── ppp/index.html
│   ├── formula-2/index.html
│   ├── cell-activator/index.html
│   ├── cell-u-loss/index.html
│   ├── herbal-control/index.html
│   ├── h24-rebuild/index.html
│   ├── h24-hydrate/index.html
│   ├── afresh/index.html
│   ├── lifto/index.html
│   ├── simply-probiotic/index.html
│   ├── herbal-aloe/index.html
│   ├── aloe-plus/index.html
│   ├── active-fiber/index.html
│   ├── beta-heart/index.html
│   ├── niteworks/index.html
│   ├── herbalifeline/index.html
│   ├── joint-support/index.html
│   ├── calcium/index.html
│   ├── skin-booster/index.html
│   ├── womans-choice/index.html
│   ├── male-factor/index.html
│   ├── dinoshake/index.html
│   ├── brain-health/index.html
│   ├── immune-health/index.html
│   └── triphala/index.html
│
├── tools/
│   ├── index.html                ← Tools hub (all 5 calculators)
│   ├── bmi-calculator/index.html
│   ├── tdee-calculator/index.html
│   ├── macros-calculator/index.html
│   ├── ideal-weight/index.html
│   └── body-fat/index.html
│
├── blog/index.html               ← Coming soon
├── research/index.html           ← Coming soon
├── trends/index.html             ← Coming soon
├── services/index.html           ← Coming soon
├── about/index.html              ← Coming soon
├── contact/index.html            ← Coming soon
│
├── assets/
│   ├── css/
│   │   └── global.css            ← All shared styles (extracted from index.html)
│   ├── js/
│   │   ├── main.js               ← Nav, scroll reveal, FAQ, guide expand
│   │   ├── tools.js              ← All health calculators (BMI, TDEE, Macros, IBW, BF%)
│   │   └── products.js           ← Products page filter + animations
│   ├── data/
│   │   └── products.json         ← All 27 products as structured data
│   └── images/                   ← (add product images here as they become available)
│
├── _headers                      ← Cloudflare caching & security headers
├── _redirects                    ← URL redirects (legacy → new paths)
├── robots.txt                    ← Search engine crawl rules
├── sitemap.xml                   ← All URLs for Google indexing
├── site.webmanifest              ← PWA manifest
├── favicon.ico / favicon.svg     ← Favicons
└── README.md                     ← This file
```

---

## 🚀 Deployment Guide

### Option A — GitHub Pages (Free)

1. Create a GitHub repository: `vitalitydose.in`
2. Push all files (maintain the exact folder structure)
3. **Settings → Pages → Deploy from branch → main → / (root)**
4. Add a `CNAME` file with `vitalitydose.in` for custom domain
5. Point DNS to GitHub Pages IPs

### Option B — Cloudflare Pages (Recommended)

1. Push to GitHub
2. **Cloudflare Dashboard → Pages → Create project → Connect Git**
3. Build settings:
   - **Framework preset:** None (static HTML)
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/`
4. Connect your domain in Cloudflare Pages settings

> Cloudflare Pages auto-processes `_redirects` and `_headers` — no extra config needed.

---

## ✏️ Customisation Checklist

Search and replace these placeholders across all HTML files:

| Placeholder       | Replace With                              |
|-------------------|-------------------------------------------|
| `XXXXXXXXXX`      | Your actual WhatsApp number               |
| `@vitalitydose`   | Your actual social handles                |
| `hello@vitalitydose.in` | Your actual email                   |
| `917019890619`    | Your actual WhatsApp number (with 91 prefix) |

---

## 🛠️ Health Tools

All calculators are in `assets/js/tools.js` and run 100% in the browser:

| Tool | URL | Function |
|------|-----|----------|
| BMI Calculator | `/tools/bmi-calculator/` | `calcBMI()` |
| TDEE Calculator | `/tools/tdee-calculator/` | `calcTDEE()` |
| Macros Calculator | `/tools/macros-calculator/` | `calcMacros()` |
| Ideal Body Weight | `/tools/ideal-weight/` | `calcIBW()` |
| Body Fat % | `/tools/body-fat/` | `calcBF()` |

---

## 📦 Adding a New Product

1. Add the product object to `assets/data/products.json`
2. Create the folder: `products/your-product-slug/`
3. Create `products/your-product-slug/index.html` (copy an existing product page as template)
4. Add the URL to `sitemap.xml`
5. Add a card to `products/index.html`

---

## ✍️ Activating a Coming Soon Page

When a section like `/blog/` is ready:
1. Replace `blog/index.html` with your real content
2. Update the `<changefreq>` in `sitemap.xml` from `monthly` to `weekly`
3. Remove the "coming soon" WhatsApp CTA

---

## 📈 SEO Architecture

Each page has:
- Unique `<title>` + `<meta description>`
- `<link rel="canonical">` pointing to its own URL
- Breadcrumb navigation for context hierarchy
- Product pages have `LocalBusiness` schema inherited from global head

The `sitemap.xml` covers all 42 URLs at launch. Google will index each product and tool page individually — giving you ~40 additional indexable pages vs the previous single-file structure.

---

*Built for Niranjan — Vitality Dose, Guruzala, Palnadu, Andhra Pradesh*
