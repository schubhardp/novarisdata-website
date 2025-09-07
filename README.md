# Novaris Data — Website

A bilingual (ES/EN) static website for Novaris Data: **Consulting · Development · IT Solutions**.  
Designed for clarity, performance and straightforward deployment on **Cloudflare Pages**.

## Live Site

- ES: https://novarisdata.com/
- EN: https://novarisdata.com/en/

## Project Structure

```
/
├─ index.html
├─ servicios.html
├─ sobre-nosotros.html
├─ contacto.html
├─ privacidad.html
├─ cookies.html
├─ gracias.html
├─ 404.html
├─ en/
│  ├─ index.html
│  ├─ services.html
│  ├─ about.html
│  ├─ contact.html
│  ├─ privacy.html
│  ├─ cookies.html
│  ├─ thanks.html
└─ assets/
   ├─ style.css
   ├─ main.js
   └─ img/
      ├─ logo.png
      ├─ favicon.png
      ├─ og-cover.png
      └─ hero-nodes-anim.svg
```

### Language & Navigation
- Spanish pages live at the repository root.
- English pages live under `/en/`.
- Navbar includes a language toggle (ES ⇄ EN).
- Asset paths:
  - ES pages: `assets/...`
  - EN pages: `../assets/...`

## Contact

- Email: **contact@novarisdata.com**
- Phone: **+56 9 2962 1546**
- LinkedIn: https://www.linkedin.com/company/novarisdata/

## SEO & Metadata

- Canonical and `hreflang` tags are included on ES/EN home pages.
- Open Graph: `og:image` → `assets/img/og-cover.png`.
- JSON-LD (Organization) includes a **contactPoint** (EU‑friendly):

```json
{
  "@context":"https://schema.org",
  "@type":"Organization",
  "name":"Novaris Data",
  "url":"https://novarisdata.com/",
  "logo":"https://novarisdata.com/assets/img/logo.png",
  "sameAs":["https://www.linkedin.com/company/novarisdata/"],
  "contactPoint":[{
    "@type":"ContactPoint",
    "contactType":"sales",
    "email":"contact@novarisdata.com",
    "telephone":"+56 9 2962 1546",
    "areaServed":"CL",
    "availableLanguage":["es","en"]
  }]
}
```

- Optionally add `sitemap.xml` at repo root and submit it to Google Search Console.

## Cookies & Privacy

- Cookie banner stores the user choice in `localStorage` and allows accept/decline.
- `privacidad.html` / `privacy.html` and `cookies.html` contain a concise EU/CL summary:
  - Purposes, legal bases, retention, recipients (Cloudflare for hosting/CDN; Formspree for forms), and data subject rights.
  - Contact for data requests: `contact@novarisdata.com`.

## Local Development

Static site (no build step required). Serve with any static server:

```bash
# Python 3
python -m http.server 8080

# Node http-server (if installed)
npx http-server -p 8080
```

## Deployment (Cloudflare Pages)

Connected to the `main` branch. On push/merge to `main`:
1. Cloudflare builds and deploys automatically.
2. Verify deployment status in Cloudflare → Pages.
3. If changes don't appear, **Purge Cache**.

### Recommended Cloudflare Settings

- **Optimization**
  - Enable Brotli compression.
  - (Optional) Auto-minify HTML/CSS/JS.
- **Cache Rules**
  - Cache `/assets/*` for ~30 days.
  - Bypass cache for `*.html`.
- **Security Headers** (optional via Transform Rules or Workers):
  - `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload`
  - `X-Content-Type-Options: nosniff`
  - `Referrer-Policy: strict-origin-when-cross-origin`
  - `Permissions-Policy: interest-cohort=()`

## Contributing

- Create a feature branch: `git checkout -b feat/my-change`
- Commit with a clear message.
- Open a Pull Request.

## License

All content © Novaris Data. (If you prefer an OSS license for code, add MIT.)
