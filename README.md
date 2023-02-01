# 📄 Khari Johnson (.dev)

> Forked from AstroPaper
> Made with 🤍 by [Sat Naing](https://satnaing.dev) 👨🏻‍💻

![AstroPaper](public/astropaper-og.jpg)
![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![GitHub](https://img.shields.io/github/license/kuhree/www?color=%232F3741&style=for-the-badge)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-%23FE5196?logo=conventionalcommits&logoColor=white&style=for-the-badge)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=for-the-badge)](http://commitizen.github.io/cz-cli/)

This theme follows best practices and provides accessibility out of the box.
Light and dark mode are supported by default.
Moreover, additional color schemes can also be configured.

## 🔥 Features

- [x] super fast performance
- [x] accessible (Keyboard/VoiceOver)
- [x] responsive (mobile ~ desktops)
- [x] SEO-friendly
- [x] light & dark mode
- [x] fuzzy search
- [x] draft posts & pagination
- [x] sitemap & rss feed
- [x] followed best practices
- [x] highly customizable

## 🚀 Project Structure

Inside of the repo, you'll see the following folders and files:

```bash
/
├── public/
│   ├── assets/
│   │   └── logo.svg
│   │   └── logo.png
│   └── favicon.svg
│   └── astropaper-og.jpg
│   └── robots.txt
│   └── toggle-theme.js
├── src/
│   ├── assets/
│   │   └── socialIcons.ts
│   ├── components/
│   ├── content/
│   │   └── config.ts
│   │   └── posts
│   │     └── some-posts.md
│   ├── layouts/
│   └── pages/
│   └── styles/
│   └── utils/
│   └── config.ts
│   └── types.ts
└── package.json
```

Astro looks for `.astro` and `.md(x)` files in the `src/pages/` directory. 
Each page is exposed as a route based on its file name.

Any static assets, like images, can be placed in the `public/` directory.

All posts are stored in `src/content/posts` directory.

## 📖 Documentation

Documentation can be read in two formats\_ _markdown_ & _post_.

## 💻 Tech Stack

**Main Framework** - [Astro](https://astro.build/)
**Type Checking** - [TypeScript](https://www.typescriptlang.org/)
**Component Framework** - [ReactJS](https://reactjs.org/)
**Styling** - [TailwindCSS](https://tailwindcss.com/)
**UI/UX** - [Figma](https://figma.com)
**Fuzzy Search** - [FuseJS](https://fusejs.io/)
**Icons** - [Boxicons](https://boxicons.com/) | [Tablers](https://tabler-icons.io/)
**Code Formatting/Linting** - [Prettier](https://prettier.io/) | [Eslint](https://eslint.com)
**Deployment** - [Vercel](https://vercel.com)
**Illustration in About Page** - [https://freesvgillustration.com](https://freesvgillustration.com/)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                 | Action                                             |
| :---------------------  | :------------------------------------------------- |
| `pnpm install`          | Installs dependencies                              |
| `pnpm serve`            | Starts local dev server at `localhost:3000`        |
| `pnpm build`            | Build your production site to `./dist/`            |
| `pnpm preview`          | Preview your build locally, before deploying       |
| `pnpm format:check`     | Check code format with Prettier                    |
| `pnpm format`           | Format codes with Prettier                         |
| `pnpm lint`             | Lint ts files with ESlint                          |
| `pnpm lint:astro`       | Lint astro files specifically                      |
| `pnpm cz`               | Commit code changes with commitizen                |
| `pnpm astro ...`        | Run CLI commands like `astro add`, `astro preview` |

## 📜 License

Licensed under the MIT License, Copyright © 2023
