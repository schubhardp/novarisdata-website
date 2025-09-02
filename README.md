# Novaris Data — Bilingual Website (ES/EN)

Estructura estática lista para Cloudflare Pages. Todos los estáticos viven en `/assets/`.

## Estructura
```
/
├─ index.html
├─ servicios.html
├─ proyectos.html
├─ sobre.html
├─ contacto.html
├─ privacy.html
├─ cookies.html
├─ 404.html
├─ en/
│  ├─ index.html
│  ├─ services.html
│  ├─ projects.html
│  ├─ about.html
│  ├─ contact.html
│  ├─ privacy.html
│  └─ cookies.html
├─ assets/
│  ├─ css/styles.css
│  ├─ js/main.js
│  └─ img/{logo.png, favicon.png}
├─ .well-known/security.txt
├─ CNAME
├─ robots.txt
├─ sitemap.xml
└─ site.webmanifest
```
## Deploy (Cloudflare Pages)
- Framework: **None** (sin build). Output: **/**.
- Dominio: `www.novarisdata.com` (fijado por `CNAME`).

## Datos de contacto
- Sitio: https://www.novarisdata.com
- Email: contact@novarisdata.com
- Tel: +56 9 29621546

## SEO
- `sitemap.xml` con ES/EN.
- `robots.txt`, OpenGraph, JSON-LD Organization.
