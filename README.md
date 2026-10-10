# Camila's project catalog

A React + TypeScript catalog of selected projects, built with Vite and published to GitHub Pages.

## Run locally

Requires Node.js 20 or newer.

```sh
npm ci
npm run dev
```

## Update the catalog

Edit the typed project list in [`src/projects.ts`](./src/projects.ts). Add a repository URL, and add a `demo` URL when a live project is available. Project artwork and category filters are rendered by the React app.

## Deploy

The `Deploy to GitHub Pages` workflow builds the site and publishes the `dist` directory when changes are pushed to `main`. For the compiled app to be served, set **Repository Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow cannot change this repository setting. If Pages is set to deploy from a branch, it serves the uncompiled source `index.html` instead of the Vite build.

This repository is `ccarlocchia.github.io`, so the site is built for the root path and will be available at `https://ccarlocchia.github.io/`.
