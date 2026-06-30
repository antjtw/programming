# 復帰 — Return Programme

A mobile-first, responsive web app for a staged powerlifting return built around an active cardiac (pericarditis) recovery. Five mesocycles plus an interim reconditioning block, with movement-correction goals and daily bodyweight logging.

## Structure

Multi-page app with shared modules. The deep programme content (mesos → weeks → sessions) is data-driven from a single file rather than hand-authored per page.

```
index.html          Home — overview, cardiac intent, accountability, bodyweight
programme.html      Programming — list of the 6 mesocycles
meso.html?m=ID      Meso overview (goals, intent, caps, cardiac) + weeks + session links
session.html?m=&w=&s=   Session detail — movements + bodyweight entry
goals.html          Movement Goals — the 6 issues the programme is built around

css/
  tokens.css        Design tokens — light + dark palettes, type
  base.css          Reset, responsive shell (sidebar ⇄ tab bar), typography, motion
  components.css    Cards, tiles, callouts, movement rows, bodyweight widget, grids

js/
  store.js          Bodyweight persistence (layered: see below)
  data.js           Programme content — single source of truth (APP.PROGRAMME)
  theme.js          Light/dark: device default + persisted manual toggle
  components.js     Shared render helpers + bodyweight widget
  chrome.js         App shell (sidebar / topbar / tab bar / theme toggle / breadcrumb)
  *.page.js         One render entry per page
```

Scripts use a single global `window.APP` namespace and load in dependency order (`store → data → theme → components → chrome → <page>`). No build step.

## Responsive

- **Mobile (default, primary):** single column, bottom tab bar, sticky top bar with breadcrumb + back.
- **Desktop (≥ 1000px):** persistent left sidebar (nav + theme toggle + cardiac note), wider content, multi-column grids for meso/goal/session lists. Top/tab bars hide.

## Theme

Defaults to the device/browser preference (`prefers-color-scheme`). A toggle (sidebar on desktop, top bar on mobile) overrides and persists the choice. A tiny inline script in each page sets the theme before first paint to avoid a flash.

## Bodyweight persistence

`store.js` tries three backends, in order, and uses the first available:

1. **`window.storage`** — the Claude artifact storage API (when viewed inside Claude).
2. **`localStorage`** — normal web hosting, including **GitHub Pages**.
3. **In-memory** — last resort; data is lost on reload (only if the two above are blocked).

Bodyweight is keyed by calendar date (`bw:YYYY-MM-DD`), so logging it in any session on a given day shows the same value everywhere, and it persists across visits.

## Deploy to GitHub Pages

1. Push all files to a repo (keep the folder structure).
2. Settings → Pages → deploy from branch → `main` / root.
3. Open the published URL. On HTTPS the modules, fonts, and `localStorage` persistence all work.

> Note: opening `index.html` directly from disk (`file://`) works for navigation, but some browsers restrict storage on the `file://` origin — host it (GitHub Pages, or any static server) for full persistence.

## Important

This app encodes a personal, medically-shaped training plan. The cardiac guidance (finish the colchicine course; stop and contact cardiology on chest pain, palpitations, breathlessness, or unusual fatigue) is specific to one person's situation and is **not** general medical advice.
