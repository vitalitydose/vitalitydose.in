# Vitality Dose — Website

**Science-backed nutrition coaching from Guruzala, Palnadu, Andhra Pradesh**

🌐 Live at: [vitalitydose.in](https://vitalitydose.in)

---

## 📁 File Structure

```
vitalitydose/
├── index.html        ← Main website (single file — all HTML/CSS/JS)
├── sitemap.xml       ← Google indexing
├── robots.txt        ← Search engine crawl rules
├── _headers          ← Cloudflare caching & security headers
├── _redirects        ← Cloudflare URL redirects
├── _config.yml       ← GitHub Pages config (optional)
└── README.md         ← This file
```

---

## 🚀 Deployment Guide

### Option A — GitHub Pages (Free)

1. Create a new GitHub repository named `vitalitydose.in` (or your username.github.io)
2. Upload all files to the repository root
3. Go to **Settings → Pages**
4. Source: `Deploy from a branch` → `main` → `/ (root)`
5. Your site will be live at `https://yourusername.github.io/repo-name`
6. To use your custom domain (vitalitydose.in):
   - Add a `CNAME` file with just: `vitalitydose.in`
   - In your DNS settings, point your domain to GitHub Pages IPs

### Option B — Cloudflare Pages (Recommended — Faster CDN)

1. Push all files to a GitHub repository
2. Go to [Cloudflare Dashboard](https://dash.cloudflare.com) → **Pages**
3. Click **Create a project** → **Connect to Git**
4. Select your GitHub repository
5. Build settings:
   - **Framework preset:** None (static HTML)
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/` (root)
6. Click **Save and Deploy**
7. Connect your custom domain in Cloudflare Pages settings

### Option C — GitHub + Cloudflare (Best Setup)

1. Deploy to GitHub Pages first (Option A)
2. In Cloudflare DNS, add a CNAME record:
   - Name: `@` or `www`
   - Target: `yourusername.github.io`
   - Proxy: ✅ Enabled (orange cloud)
3. Cloudflare automatically handles HTTPS, CDN caching, and the `_headers` file

---

## ✏️ Customisation Checklist

Before going live, find and replace these placeholders in `index.html`:

| Placeholder | Replace With |
|---|---|
| `XXXXXXXXXX` | Your actual WhatsApp number (e.g. `9876543210`) |
| `@vitalitydose` (Instagram) | Your actual Instagram handle |
| `@vitalitydose` (YouTube) | Your actual YouTube handle |
| `@vitalitydose` (other platforms) | Your actual handles |
| `hello@vitalitydose.in` | Your actual email |
| `https://vitalitydose.in` | Your actual domain |
| Testimonial names | Real client testimonials (with permission) |
| Stat numbers (200+, 4.9★) | Your actual numbers |
| `2025-04-01` in sitemap | Update date when you publish |

---

## 🛠️ Tools Included (No Backend Needed)

All tools run 100% in the browser — no server required:

- **BMI Calculator** — with metric/imperial toggle
- **TDEE Calculator** — Mifflin-St Jeor equation with activity multipliers
- **Macros Calculator** — fat loss / maintenance / muscle gain ratios
- **Ideal Body Weight** — Devine, Robinson, Miller, Hamwi formulas
- **Body Fat % Estimator** — US Navy circumference method

---

## 📈 SEO Features

- `<title>` and `<meta description>` optimised for Guruzala + nutrition coaching
- JSON-LD `LocalBusiness` schema with `areaServed`, `geo`, `sameAs`
- JSON-LD `FAQPage` schema (Google FAQ rich snippets)
- `geo.region`, `geo.position`, `ICBM` meta tags
- Open Graph + Twitter Card tags
- `robots.txt` + `sitemap.xml`
- Cloudflare `_headers` for caching performance
- Hidden SEO keyword footer text (crawlable, not visually prominent)
- Location ticker and area pills with local keyword density

---

## 📱 Performance Notes

- Single-file website: zero HTTP requests for CSS/JS (inline)
- Google Fonts: only 3 fonts, preconnect enabled
- Images: none (all CSS/emoji) — instant load
- Animations: CSS only + IntersectionObserver (no heavy libraries)
- Cloudflare CDN will serve from nearest edge node

---

*Built for Niranjan — Vitality Dose, Guruzala, Palnadu, Andhra Pradesh*
