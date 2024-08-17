---
isDraft: false
isFeatured: true
author: Khari Johnson
publishedAt: 2024-08-18:12:30.000Z

banner: 'https://go.dev/blog/gopher/wfmu.jpg'
bannerAlt: 'The original golang gopher'
aliases:
  - Learning golang
description: I've started "learning" golang. It's a sweet language. Let's talk more about why.
tags:
  - golang
---

## Table of contents

# Intro

I've started "learning" [go](https://go.dev). It's a really nice language so far and kind of fills the gap between shell scripting and full-stack web app for me. I love the single binary output and it's honestly my favorite part of the language. The package manager seems decent. The code is verbose, but it reads well and is fun to write, mostly. I haven't explored much of the advanced featured, but we'll get there.

# Why?

My career up to this point has mostly revolved around javascript. Web-apps and JSON APIs. Simple*-ish* stuff when I look back with the experience of today.

While JS runs pretty much any usecase these days, it can get old in certain scenarios. Building the app is one thing, but getting that app prepared for production is **_not so fun_**, to me.

Half of my apps are Electron or some variant and learning JS (specifically, React) launched my career. I love the language on the frontend, and it's even better with Typescript and the vast community.

However, I'm looking to simplify parts of my workflow and while Javascript can run _almost_ anything, sometimes a statically-typed compiled binary seems like a better fit.

## Rewriting an old node app

I keep an older projet around called **Why, Ye?**. [Here's](https://gitlab.com/kuhree/why-ye) the last verion I wrote sometime in 2020 (4 years later, I can definitely see the growth). I tried cloning it down earlier and I can't even get it to run. Is this my own fault? Probably. With a little more time, I'm sure I could get it done. But it's still live so I'll leave it.

I [rewrote](https://github.com/kuhree/go-whyye) it in Go. At first, the entire application was written without a single 3rd party dependency.

**Everything was in the std library.**

The http server, templating, error-handling, testing (**cough** that I didn't use **cough**) all of it. It was kind of beautiful.

Then when building the app, the output was a **BINARY**. And I can build ones to run anywhere, on my Macs, the linux servers, CI/CD pipelines and k8s clusters.

> install go, build the app, rsync the binary, and run the mf

Amazing, glorious, everything I had hoped for.

The second turning point was the reource usage. I recently say a video by [WebDevCody](https://www.youtube.com/@WebDevCody/videos) (can't find the video, check out the channel though!), that compared the resource usage between a node app and a go app. So I had to see it for myself.

The previous version won't even install, but the GO version uses 10MB of ram at idle. That's with a sqlite db embedded in the final image (sue me).

# The Future

Soo, I'm a fan of Go. Probably for the wrong reasons but it expands the things I can work on and is enjoyable too. Eventually, I'll probably need to get into C/C++ or maybe even Rust for lower level systems engineering or gamedev, but I haven't hit that wall yet.

Some things probably aren't as great, but I haven't run into that either. So far, it's nice and I'm already working on some new and old projects that could use the boost.
