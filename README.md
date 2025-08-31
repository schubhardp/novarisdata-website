# Novaris Data — Website

Official website of **Novaris Data** — an IT consulting company focused on:
- 🌐 Web Development
- ⚙️ Backend Systems (Python, Django, FastAPI)
- 🗄️ Database Management (PostgreSQL, Oracle, MySQL)

> Tagline: **Web • Backend • Data**

---

## Live & Deployment

This site is intended to be deployed with **Cloudflare Pages**.
- Each push to the `main` branch triggers an automatic build and deploy.
- Recommended custom domain: `www.novarisdata.com` with root redirect to `www`.
- SSL/TLS: enable **Always use HTTPS** and **Automatic HTTPS Rewrites** in Cloudflare.

### Quick Deploy (Static HTML/CSS)
1. Connect this repository to **Cloudflare Pages** → *Create a project*.
2. Framework preset: **None** (static site).
3. Build command: *(leave empty)*
4. Output directory: `/`
5. Add custom domain: `www.novarisdata.com`

---

## Project Structure

```
novarisdata-website/
 ├── index.html        # Landing page
 ├── css/
 │   └── styles.css    # Stylesheet
 ├── img/
 │   └── logo.png      # Company logo (ND monogram)
 └── README.md
```

---

## Local Preview

Just open `index.html` in your browser, or serve the folder locally:
```bash
# Using Python 3
python -m http.server 8080
# then visit http://localhost:8080
```

---

## Branding

- **Logo**: ND monogram (PNG/SVG recommended). Place as `img/logo.png`.
- **Colors**:
  - Primary: `#1D3557` (navy)
  - Accent: `#168AAD` (teal/blue)
  - Neutral: `#222222` (text), `#F9FBFC` (background)
- **Typography**: Sans-serif (e.g., Inter, Montserrat, or system fonts).

---

## Contact

- Email: **contacto@novarisdata.com**
- Website: **https://www.novarisdata.com**

---

## License

MIT License © 2025 Novaris Data
