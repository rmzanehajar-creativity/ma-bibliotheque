# Amelia Vazquez – Author Website

Static website (HTML, CSS, vanilla JS). No build step, no dependencies.

## Structure
```
index.html
css/style.css
js/main.js
assets/images/   <- put your images here
```

## Images
Add these files to `assets/images/` (the page shows a gradient fallback without them):
- `hero.jpg`   – hero background / portrait
- `author.jpg` – "About the Author" portrait

Book covers are CSS placeholders. To use real covers, replace each `<div class="book bX">…</div>` in `index.html` with `<img src="assets/images/cover-1.jpg" alt="Title">`.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` and visit http://localhost:8000.

## Deploy on GitHub Pages
1. Push the repo to GitHub.
2. Settings → Pages → Source: *Deploy from a branch* → `main` / `(root)` → Save.
3. Your site will be live at `https://<username>.github.io/<repo>/`.

## To do
- Connect the newsletter form (`js/main.js`) to an email service.
- Link "Shop Now" buttons to your store.
