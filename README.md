# The Den — Website

Marketing site for The Den, a strength gym. Plain HTML, CSS, and JavaScript. There's no framework, no build step, and nothing to install.

## Project structure

```
the-den-website/
├── index.html          # The whole page
├── css/styles.css      # All styles; brand tokens at the top
├── js/main.js          # FAQ accordion, tour form, footer year
└── assets/img/         # Logo, bear mark, icons, photos (.jpg + .webp)
```

## Run it locally

Open `index.html` in a browser. Or, to serve it the way a host will:

```bash
cd the-den-website
python -m http.server 8000
# then visit http://localhost:8000
```

## Publish on GitHub Pages (free)

1. Create a new repository on GitHub, for example `the-den-website`.
2. Push this folder:
   ```bash
   cd the-den-website
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<your-username>/the-den-website.git
   git push -u origin main
   ```
3. On GitHub, open **Settings → Pages**. Under **Build and deployment**, set Source to **Deploy from a branch**, then pick `main` and `/ (root)`. Save.
4. After a minute the site is live at `https://<your-username>.github.io/the-den-website/`.

To use your own domain, add it under **Settings → Pages → Custom domain** and point your DNS at GitHub as their docs describe. Netlify, Vercel, and Cloudflare Pages also work: drag the folder in or connect the repo, with no build command.

## Before launch

### Fill in the placeholders

Search `index.html` for `[` to find every placeholder:

- Opening date, neighborhood, city, and street address
- Hours (the copy assumes 24/7 member access with phone entry)
- Rack count and heaviest dumbbell
- Guest pass policy, cancellation notice, and parking
- Add-on prices for personal coaching, programming, and day passes
- Head coach name and certification
- Phone, email, and Instagram handle (also update the `href`s on those links)

The copy also assumes month-to-month membership with no contract. Change it if your terms differ.

### Replace the photos

The photos in `assets/img/` are stand-ins taken from open-source gym website templates, color-graded to match the brand. Replace them with photos of your actual space and members before launch. Real photos convert noticeably better than stock on gym sites.

To swap a photo, keep the same file name, or update both the `.webp` and `.jpg` paths in `index.html`. Aim for about 1,400–2,000 px wide and under 300 KB. [Squoosh](https://squoosh.app) is a free way to export WebP.

### Connect the tour form

Right now the form validates and shows a confirmation, but it doesn't send anything. To receive requests:

1. Create a form endpoint with a service like [Formspree](https://formspree.io), [Basin](https://usebasin.com), or Netlify Forms. Your gym management software may also give you a lead-capture URL.
2. Set `action="..."` on `<form id="tour-form">` in `index.html` to that URL.
3. In `js/main.js`, uncomment the `fetch` block marked "Hook up a real backend here."

### Set the social share image URL

`og:image` in the `<head>` uses a relative path. Some platforms need a full URL, so change it to `https://yourdomain.com/assets/img/og-image.jpg` once you have the domain.

## Brand reference

| Token | Value | Use |
| --- | --- | --- |
| Ink | `#16151C` | Background (from the logo) |
| Gold | `#BF9637` | Only accent color (from the logo) |
| Bone | `#EEEBE5` | Headlines and primary text |
| Body text | `#CFCAC3` | Paragraphs on dark backgrounds |

The typeface is **Saira**, loaded from Google Fonts. Headlines are Black (900) Italic at 106% width to echo the logo lettering.

The slant is the logo's lean: `-12deg` on buttons and bullets, `-8deg` on photo frames. These are set as CSS variables at the top of `styles.css`.
