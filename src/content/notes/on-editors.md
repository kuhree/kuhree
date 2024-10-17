---
author: Khari Johnson
publishedAt: 2024-10-17T12:30:00Z
isFeatured: true
isDraft: true

aliases:
  - Editors
  - Editors: From Notepad to ???
description:
  Over the years, I've experimented with various editors, each leaving its mark on my coding journey. I'll share my experiences with different editors, from the humble beginnings with Notepad to my current setup with Neovim and beyond.
banner: 'https://placehold.co/600x400'
banner_alt: 'White background with black text that show the dimensions'
tags:
  - editors
  - editors/vscode
  - editors/nvim
---

## Table of contents

Over the years, I've experimented with various editors, each leaving its mark on my coding journey. I'll share my experiences with different editors, from the humble beginnings with Notepad to my current setup with Neovim and beyond. Let's talk about it.

## Notepad (and Notepad++)

In the beginning there was Notepad. It was on every machine by default. It opened every type of file whether it was supported or not.

It was my first introduction into source code. I was downloading Bloons TD5  tweak/crack/hack for every iOS jailbreak I had available to me.

A truly GOATED series by the way. I've since spent way too much actual money on this game) highly recommend checking it out if you enjoy tower defense types.

Notepad was/is great, and Notepad++ is even better when I'm editing game files on Windows.

These days, I'm not on windows all that often. So let's see what else is out there.

I didn't really think about editors all that much until we started coding in school.

## Eclipse

We used Eclipse to write Java and move robots on the screen in my first programming course in school. That was it. I hated most it, but it was fine for the course.

After that, I wanted to find something _faster_, more user-friendly, and versatile options when I started web development. This was an interesting time.

## Brackets (and Atom)

First there was Atom, the "hackable" editor. VSCode's predecessor.

It was nice. Very fast and clean. "Hackable" was very true, but I was too early to appreciate it.

So I found Brackets, which was the one editor with the cleanest implementation of Live Preview. This one let me make changes and see them live without having to open the browser. Big fan. I only left because of a little name you might be familiar with:

## VS Code

Open-Source, cross-platform, extensions galore. One editor for every language on every device. I was aa dream.  I got over the LivePreview bug when I started writing more app-like experiences and less websites.

VS Code helped me launch a career. It was great until I got into more complicated projects, "managing" infrastructure, and starting my homelab. While there was an extension for everything, you never knew if it was going to blow up in 10 minutes, so I didn't bother after a while.

I don't need my editor to tell me my code is shit. Something about tsserver + eslint + vscode would just eat all the hardware I have on larger projects. I started a whole homelab to get around this. I explored VSCode over remote desktop protocols, ssh X11 forwarding, docker container "workspaces" and all. Not for me.

As I explored how to get VS code to run better, my workflow used it less and less. I found myself using vim on the servers where I would run `vscode-server`.

Can you tell where we're headed yet? Alright, cool we'll just skim over this last bit.

I still use VS Code today. Certain projects, specific extensions, pairing. It has it's purpose, it's own perks, and drawbacks.

However, I found myself wanting to combine the terminal and the editor. I was already in the terminal for most of my work anyway, why not edit text in there too? So, I eventually came across...

## (Neo)Vim

Vim. Ah, Neovim. The home for the last few years. My everything editor and "personal development environment" (credit to @teej_dv).

Customizable to the core. It handles every language I've come across. There's a ~~extension~~ plugin for everything, and if not, I feel confident enough to make a basic version. It's helped me learn new languages and explore different way to write code. It fits like little puzzle piece in my workflow surrounded by tmux.

Ever since Vim, every editor has to have Vim bindings. It's the fastest way for me to write. I'm writing this in nvim (and Zed, but we'll get there).
I write notes, designs, docs, code, planning, everything I can in nvim or another editor with bindings (Obsidian, VSCode, Zed) for a specific purpose.
`nvim` is the default and it works well for the tinkerer in me.

Plus, every time some editor gets a cool feature, someone in the community is already on it. Great stuff.

I'm still exploring all the time, tweaking and testing. And recently, something interesting has popped up.

## Zed

Zed is kinda this new kid on the block and I'm a big fan. They've been doing some great things over the last year+ I've been watching. I tried it when it first came out and was immediately impressed, like I am with most things. But this was different. Like switching from from Backets -> VSCode -> nvim different.

It's fast and doesn't need many plugins. Set the vim bindings and go, it just works. It's been a bit funky on linux, but that's expected. Initial impressions is that it's going to replace VSCode in those specific instances and may even replace nvim if I get faster with it or my workflow changes. It's doing everything right.

- Fast startup/close
- Amazing vim bindings
- LSP support / Syntax highlighting

More of Zed's standout features include:

- Collaborative editing: google docs for code (haven't tried, really want to)
- Workspaces: could be a tmux replacement for me
- ZedAI: AI integration is pretty smooth


I'm loving Zed. There's a few things, like this slow cursor. But I'm not sure if that's just me yet.

Everything else is pretty impressive, especially when working with multiple larger codebases. Vim bindings are GOOD and they feel natural and well-integrated. It still feels like the early days, but I'll definitely keep watch here.

## Honorable Mentions

Neovim's been the goto for years now, but I've come aross a few interesting attempts as well:

### Sublime Text
- STUPID fast
- Very clean, minimal, focus
- Search and replace is a godsend
- Smooth plugin ecosystem too

If I had discovered Sublime Text earlier in my journey, I might never have left. It's honestly an inspiring piece of software.

### Helix
- modal editing and vim motions but flipped?
- LSP and Syntax highlighting OOTB
- TUI interface

A bit different, but I saw no advantages over the current nvim config and the motions don't transfer really. It actually helped me learn more motions though so that's a plus.

- Emacs - I heard it's a great OS looking for a text editor. Got nvim-pilled first, never gave a real shot
- Jetbrains Suite - Heard great things, I'm not paying a subscription tho.

## Thoughts

Most editors are pretty good. Eclipse was/is hell, but even it served its purpose. Use what works. Switch things up if you need to. Stay curious.

I (and maybe you) often get caught up in the "best tool" debate, but who cares?

In a past life, I asked an old mentor, "what's your favorite brand, milwaukee, dewault, ..." his response,

> "The one that works after I get paid."

The best tool is the one that helps you solve people's real problems. Whatever it is, each editor (tool) has its strengths and quirks. Embrace the learning curve, customize your environment, and have fun with it.

Who knows? I might even try out Emacs next. I already can't use my pinky.
