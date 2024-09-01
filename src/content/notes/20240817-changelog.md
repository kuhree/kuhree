---
isDraft: false
isFeatured: true
author: Khari Johnson
publishedAt: 2024-08-17:12:30.000Z

aliases:
  - Changelog - 3
description: Welcome to the changelog! A series of notes tagged 'changelog' that let me share the things I've been enjoying recently.
tags:
  - changelog
---

## Table of contents

## Updates

### MoreAI

In the last `#changelog`, I integrated AI into my weekly life. Today, it's updated to pretty much daily. (Most of this is thanks to the new home lab, it's pretty cool [check it out](/notes/homelab)). It's hit or miss some of the time, but it definitely comes in handy for 75% of use-cases I throw at it (code-gen, summarizing, improving writing). I'm fine tuing the models I use and the prompts.

Here's most of the tools I'm using to make this happen.

- [Ollama](https://ollama.com/). Run AI models locally. Provides a OpenAI-compatible API.
- [Open WebUI](https://openwebui.com/) - Chat-like web-interface for intercting with the models
- [Stable-Diffusion-WebUI](https://github.com/AbdBarho/stable-diffusion-webui-docker) - Get SD running with a few simple docker compose commands
- [Raycast](https://www.raycast.com/) w/ [Ollama extensions](https://www.raycast.com/massimiliano_pasquini/raycast-ollama) - Easily run commands like "summarize this" or "rewrite this" on selected text. Easy to add your own.
- [dingllm](https://github.com/yacineMTB/dingllm.nvim) - The simplest way I could find to integrate ollama into neovim. So simple that I want to fork it when I have a weekend or two.

### Work

I'm still working as a [Technical Support Engineer II](/work/searchspring). Learning a lot and growing. Not much to report here as I've kind of just kept my head down. Some things are changing though, positions opening up, schedules are changing, that kinda thing. I'm also coming up on that 1.5yr mark and at yr 2 I'll be looking to make some changes. Preparing for all that.

I started [learning go](/notes/20240818-learning-go). Which, if I had to say (which I don't but I want to), brings my tech "stack" kinda goes like this:

```
local -> infra -> prototypes -> production -> comfort
```

| name       | languages                                       | purpose                                                                              |
| ---------- | ----------------------------------------------- | ------------------------------------------------------------------------------------ |
| local      | bash, zsh, lua                                  | for one-off/local scripts                                                            |
| infra      | go, lua                                         | for when bash gets out of control (pretty quick) or the script is shared or critical |
| prototypes | js -> vite w/ React/Svelte/Vue                  | for demos and quick ideas                                                            |
| production | go + framework w/ react/svelete/htmx            | for production webapps/services                                                      |
| comfort    | js -> next.js or vite + react-router (remix.js) | for when I still want a 1 language codebase                                          |

Everything gets wrapped in a Docker image and sent to the approiate hosting like [GCP](cloud.google.com) or [Railway](https://railway.app). Eventually I want to migrate things to AWS instead of GCP (or VPS/Self-Host), but until then IIABDFI.

### Gaming

I've had a great time the past couple of months. Some new genres, new games. It was a good summer. Took advantage of a Steam Sale or two.

Still hard-stuck Champion 1-2 in Rocket League, some things never change.

- [The First Descendent](https://tfd.nexon.com/en/main)
  - My buddy told me to check this out. I put about 120hrs in then the loop got a bit stale. Was great fun though and with party is even better.
- [Delta Force: Hawk Ops Alpha](https://www.playdeltaforce.com/en/)
  - I've seen this on YouTube a time or two and have been meaning to check it out for a while. As a DMZ fan, this was pretty dope. I don't feel like grinding Tarkov so this is a nice in-between. Also with a Battlefield Conquest-like mode to main or play in between deployments. Big fan, excited for the full release.
- [xDefiant](https://www.ubisoft.com/en-us/game/xdefiant)
  - I've been grinding this while waiting to checkout BO6. It's fun, another shooter with power. Much closer to CS2 than COD and I like that.
- [Warframe](https://www.warframe.com/landing)
  - I've seen this game and played it a few times over the years, bnut never really got into it. After getting bored of The First Descendent, this seemed like a good idea to checkout based on the recommendations. It's free and they say that no content has been removed since launch. That's nice. I've put about 100hrs in and I haven't even left hit like 10% of the game. This one's cool when I want to chill. Another DRG type of game.

Other than that, I picked up all of the Half-life and Portal series, Watch_Dogs 2 & Legion, older Battlefields, and RDR2 on a couple Steam sales. My SSD is full and I need more time.

From previous `#changelogs`

- [It Takes Two](it-takes-two)
  - I turned Jason's PC into a NAS, so not much here (he wasn't using it btw, js)
- [Helldivers 2](helldivers-2)
  - Played this at my sister's house. Great game, reminds me a lot of [Deep Rock Galactic](https://www.deeprockgalactic.com/)
- [Hell Let Loose](hell-let-loose)
  - My duo's been grinding this for a min now. Unfortunately no cross-play so I havent really touched it yet. In the backlog for now.
- [Palworld](palworld)
  - Never had the chance to pick this up.

## Overall

It's been a great summer. Now I'm ready to bundle up for the winter and work on all the projects (cars, code, business) I want.

<!-- References  -->

[helldivers-2]: https://store.steampowered.com/app/553850/HELLDIVERS_2/ 'Helldivers 2'
[hell-let-loose]: https://store.steampowered.com/app/686810/Hell_Let_Loose/ 'Hell Let Loose'
[palworld]: https://store.steampowered.com/app/1623730/Palworld/ 'Palworld'
[it-take-two]: https://store.steampowered.com/app/1426210/It_Takes_Two/ 'It Takes Two'
