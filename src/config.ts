import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://kharijohnson.dev/",
  author: "Khari Johnson",
  description: "Builder. Explorer. *Nix Enthusiast",
  title: "Khari Johnson",
  biography:
    "Hi there! I'm a curious adventurer with a passion for making and all things *Nix. My never-ending curiosity has taken me on many exciting journeys, both physical and mental. I'm always eager to explore new ideas and techniques in the maker world, constantly seeking to improve my skills and abilities. When I'm not tinkering with tech, you'll likely find me out on some wild adventure or soaking up the beauty of nature. If you're looking for someone who loves to create, explore, and challenge the norm, let's connect!",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
} as const;

export const ASSETS = {
  logo: {
    src: (ext: "png" | "svg" = "png") => `/assets/logo.${ext}`,
    alt: "Khari Johnson's logo",
  },
};

export const LOGO_IMAGE = {
  enable: true,
  svg: false,
  width: 36,
  height: 36,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/kuhree",
    linkTitle: ` ${SITE.author} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/khari-johnson",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/kuhreee",
    linkTitle: `${SITE.author} on Twitter`,
    active: true,
  },
  {
    name: "Twitch",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.author} on Twitch`,
    active: false,
  },
  {
    name: "Facebook",
    href: "",
    linkTitle: `${SITE.author} on Facebook`,
    active: false,
  },
  {
    name: "Instagram",
    href: "",
    linkTitle: `${SITE.author} on Instagram`,
    active: false,
  },
  {
    name: "YouTube",
    href: "",
    linkTitle: `${SITE.author} on YouTube`,
    active: false,
  },
  {
    name: "WhatsApp",
    href: "",
    linkTitle: `${SITE.author} on WhatsApp`,
    active: false,
  },
  {
    name: "Snapchat",
    href: "",
    linkTitle: `${SITE.author} on Snapchat`,
    active: false,
  },
  {
    name: "Pinterest",
    href: "",
    linkTitle: `${SITE.author} on Pinterest`,
    active: false,
  },
  {
    name: "TikTok",
    href: "",
    linkTitle: `${SITE.author} on TikTok`,
    active: false,
  },
  {
    name: "CodePen",
    href: "",
    linkTitle: `${SITE.author} on CodePen`,
    active: false,
  },
  {
    name: "Discord",
    href: "",
    linkTitle: `${SITE.author} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "",
    linkTitle: `${SITE.author} on GitLab`,
    active: false,
  },
  {
    name: "Reddit",
    href: "",
    linkTitle: `${SITE.author} on Reddit`,
    active: false,
  },
  {
    name: "Skype",
    href: "",
    linkTitle: `${SITE.author} on Skype`,
    active: false,
  },
  {
    name: "Steam",
    href: "",
    linkTitle: `${SITE.author} on Steam`,
    active: false,
  },
  {
    name: "Telegram",
    href: "",
    linkTitle: `${SITE.author} on Telegram`,
    active: false,
  },
  {
    name: "Mastodon",
    href: "",
    linkTitle: `${SITE.author} on Mastodon`,
    active: false,
  },
];
