import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://kharijohnson.dev/",
  author: "Khari Johnson",
  description: "Builder. Explorer. *Nix Enthusiast",
  biography:
    "AstroPaper is a minimal, responsive, accessible and SEO-friendly Astro blog theme. This theme follows best practices and provides accessibility out of the box. Light and dark mode are supported by default. Moreover, additional color schemes can also be configured. ",
  title: "Khari Johnson",
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
  width: 48,
  height: 48,
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
