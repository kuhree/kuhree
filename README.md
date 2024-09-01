# [@kuhree/www](github-repo)

Personal website. Contains notes, portfolio, and random expirements with web APIs. Most likely live at [kuhree.com](kuhree).

Built on Astro for the flexibility. One day it'll be a proper website, but until then, consider it a personal playground.

Credit where credit's dues, some parts were ripped from [AstroPaper] and [Astro's Portfolio].

Other libraries in use:

- [typescript]
- [react.js]
- [bun]
- [tailwind]
- [remark] / [rehype]
- [satori]
- [eslint] / [prettier]

## License

MIT License, see [LICENSE](LICENSE) for more details.

## Development

1. Clone the repo: `git clone <git_url>/kuhree/www.git`
2. Install dependencies: `bun install`
3. Start the dev server: `bun run dev`
4. Navigate to [localhost:4321](http://localhost:4321)
5. Make changes and refresh the page to see them live!

## Building

1. Build the site: `bun run build`

- Or, `docker build -t kuhree/www .` to build the image using [docker]
- Or, `nixpacks build . --name kuhree/www` to deploy the image on [nixpacks].

2. Run the site: `bun run --bun --smol ./dist/server/entry.mjs`

- Or, `docker run -p 80:4321 kuhree/www` to run the image using [docker] and [nixpacks]

## Deployment

1. Push changes to origin: `git push origin main`

- Wait for staging pipeline to build and deploy the site (PRs included).
  - [Gitea Actions]
  - [Coolify Staging]

2. Changes will be synced to `upstream` automatically.

   - Wait for the production pipeline to deploy the site.
     - [Github Actions]
     - [Railway Dashboard]

## Features

- [x] Landing Page - `/`
- [x] About Page(s) - `/about`
  - [x] Resume - `/about/resume`
- [ ] Stats Page(s) - `/about/stats`
  - [ ] Game Stats
    - [x] Steam - `/about/stats/steam`
    - [ ] Xbox
    - [ ] Playstation
  - [ ] TV/Movie/Music/Anime Stats
    - [ ] Trakt
    - [ ] AniList
    - [ ] Deezer
    - [ ] Youtube Music
    - [ ] Spotify
- [x] Content Page(s)
  - [x] Blog as "Notes" - `/notes`
  - [x] Projects as "Work" - `/work`
- [x] Web
  - [x] OG Image
  - [x] RSS Feed - `/rss.xml`

[kuhree]: https://kuhree.com
[github-profile]: https://github.com/kuhree
[github-repo]: https://github.com/kuhree/www
[astro]: https://astro.build
[AstroPaper]: https://github.com/satnaing/astro-paper
[Astro's Portfolio]: https://github.com/withastro/astro/tree/main/examples/portfolio
[typescript]: https://www.typescriptlang.org
[reactjs]: https://reactjs.org
[tailwind]: https://tailwindcss.com
[remark]: https://github.com/remarkjs/remark
[rehype]: https://github.com/rehypejs/rehype
[satori]: https://github.com/vercel/satori
[eslint]: https://eslint.org
[prettier]: https://prettier.io
[bun]: https://bun.sh
[docker]: https://www.docker.com
[nixpacks]: https://nixpacks.com
[Gitea Actions]: https://git.littlevibe.net/kuhree/www/actions
[Github Actions]: https://github.com/kuhree/www/actions
[Railway Dashboard]: https://railway.app/dashboard
[react.js]: https://reactjs.org
