# 📘 Angular 18 + GitHub Pages Deployment Guide

*(Username Site: nvrnagella.github.io)*

---

# 🏗 Project Architecture

## Repository Name

```
nvrnagella.github.io
```

## Branch Strategy

| Branch   | Purpose                             |
| -------- | ----------------------------------- |
| main     | Angular source code                 |
| gh-pages | Compiled static build (dist output) |

⚠ Never edit `gh-pages` manually.

---

# 📂 Important Angular 18 Build Structure

After build:

```
dist/
  docs-app/
    browser/   ← Deploy this folder
    server/
```

You must deploy:

```
dist/docs-app/browser
```

NOT:

```
dist/docs-app
```

---

# 🚀 Standard Deployment Process (Root Site)

Since this is a username site:

```
https://nvrnagella.github.io/
```

We do NOT use `--base-href`.

---

## ✅ Step 1 — Commit Source

```bash
git add .
git commit -m "Update docs"
git push origin main
```

---

## ✅ Step 2 — Clean Old Build

PowerShell:

```powershell
Remove-Item -Recurse -Force dist
```

---

## ✅ Step 3 — Build Production

```bash
ng build docs-app --configuration production
```

Verify:

Open:

```
dist/docs-app/browser/index.html
```

Must contain:

```html
<base href="/">
```

---

## ✅ Step 4 — Deploy to gh-pages

```bash
npx angular-cli-ghpages --dir=dist/docs-app/browser
```

---

## ✅ Step 5 — GitHub Pages Setting (Very Important)

Go to:

```
Repository → Settings → Pages
```

Set:

```
Source → Deploy from a branch
Branch → gh-pages
Folder → / (root)
```

Click Save.

---

## ✅ Step 6 — Hard Refresh

Open:

```
https://nvrnagella.github.io/
```

Press:

```
Ctrl + Shift + R
```

---

# 🧠 If You Ever See README Instead of Site

Problem:
GitHub Pages source is set to `main`.

Fix:
Change source to `gh-pages`.

---

# 🧠 If You Ever See 404

### Case 1 – Subfolder Site

If repo is:

```
username.github.io/repo-name
```

Then build with:

```bash
ng build --base-href=/repo-name/ --deploy-url=/repo-name/
```

---

### Case 2 – Username Site

If repo is:

```
username.github.io
```

Then build WITHOUT base-href override.

---

# 🧠 If Markdown Not Loading

Check:

1. Files are inside `public/`
2. Access path is correct:

   ```html
   <markdown src="docs/...">
   ```
3. `MarkdownModule` imported in:

   * `app.config.ts`
   * Component imports

---

# 🧠 If Layout Not Updating

Check:

1. You edited `app.component.html`
2. You rebuilt
3. You redeployed
4. `gh-pages` commit timestamp updated

Remember:

Main branch changes do NOT update live site.

---

# 📦 Add Permanent Deploy Script

In `package.json`:

```json
"scripts": {
  "deploy": "ng build docs-app --configuration production && npx angular-cli-ghpages --dir=dist/docs-app/browser"
}
```

Then deploy using:

```bash
npm run deploy
```

This prevents mistakes.

---

# 🏆 Final Mental Model

Main branch = Source
gh-pages branch = Compiled snapshot
GitHub Pages serves ONLY gh-pages

---

# 🔁 Quick Deployment Checklist (Copy This)

1. `git push main`
2. Delete `dist`
3. `ng build`
4. `npx angular-cli-ghpages --dir=dist/docs-app/browser`
5. Verify Pages source = gh-pages
6. Hard refresh

Done.

---

# 🎯 What You Now Have

* Angular 18 standalone docs platform
* Markdown rendering
* Clean root domain
* Professional branch strategy
* Repeatable deployment process

---