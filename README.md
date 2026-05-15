# kaimuck · QR menu

Menu për kafenenë, mobile-first, pa build step. Hap çdo skedar në Cursor,
ndrysho atë që dëshiron, dhe vendos folderin në çdo host statik.

## Struktura

```
qr-menu/
├── index.html       # struktura e faqes (ndrysho rrallë)
├── styles.css       # ngjyrat, fontet, layout-i
├── menu-data.js     # ← KËTU NDRYSHO PIJET, PRIÇMET, PËRSHKRIMET
├── menu.js          # logjika e renderit (mos e prek pa nevojë)
└── assets/
    └── kaimuck-logo.png
```

## Si të ndryshosh menynë

Hap `menu-data.js` në Cursor. Çdo pije është një objekt:

```js
{ n: "espresso", d: "the official wake-up call", p: 70 }
//   ^ emri      ^ përshkrimi playful           ^ çmimi në ден
```

Për të shtuar një pije të re, kopjo një rresht dhe ndryshoje.
Për një kategori të re, kopjo një bllok `{ id: ..., name: ..., items: [...] }`.

`brand.tag`, `brand.hours`, `brand.hero` dhe `brand.secret` kontrollojnë
tekstet lart dhe poshtë.

## Si ta testosh lokalisht

Nuk ka build. Hap thjesht `index.html` me një server lokal — p.sh.

```bash
# python 3
python3 -m http.server 8000

# ose me node (kërkon npx)
npx serve .
```

Hap `http://localhost:8000` në telefon (i lidhur në të njëjtin Wi-Fi)
ose në browser-in tënd.

## Si ta vendosësh online (deploy)

### Opsioni 1 — Netlify Drop (më i shpejti)
1. Shko në https://app.netlify.com/drop
2. Tërhiq folderin `qr-menu` aty.
3. Te merr menjëherë një URL, p.sh. `https://kaimuck-menu.netlify.app`.

### Opsioni 2 — Cloudflare Pages
1. https://pages.cloudflare.com → "Upload assets"
2. Tërhiq folderin → merr URL.

### Opsioni 3 — Vercel
1. https://vercel.com → "New Project" → "Import"
2. Lidh git ose ngarko folderin.

### Opsioni 4 — Domeni yt
Ngarko të gjithë folderin në hostin tënd (FTP / cPanel / etc).
Faqja kryesore është `index.html`.

## QR code

Pasi të kesh URL-në (p.sh. `https://kaimuck.menu`), gjenero një QR code
me çdo shërbim:

- https://qrcode-monkey.com — bën QR me ngjyra / logo
- https://qr-code-generator.com — i thjeshtë dhe falas
- Ose në Canva (ka template për table tents)

Printo QR-në në një kartë të vogël për tavolinat / banakun.

## Vërejtje teknike

- 100% statik. Nuk ka backend, nuk ka cookies, nuk ka analytics.
- Funksionon offline pasi të jetë ngarkuar njëherë (browser cache).
- I optimizuar për mobile, por shfaqet edhe në desktop.
- Logoja është PNG. Nëse e ke SVG, zëvendëso `assets/kaimuck-logo.png`
  dhe ndrysho path-in te `index.html`.
