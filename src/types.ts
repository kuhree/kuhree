export interface Frontmatter {
  featured: boolean;
  draft: boolean;

  author: string;
  datetime: string;

  slug?: string;
  aliases?: string | string[];
  description: string;

  tags: string[];

  /**
   * Attach an image to the post.
   * Will be used for the `ogImage` as well.
   *
   * ~~Adjust location with banner_x and banner_y~~
   */
  banner?: string;
  // banner_x?: string;
  // banner_y?: string;
}

export interface ObsidianFrontmatter extends Frontmatter {
  id?: string;
}

export type SocialObjects = {
  name: SocialMedia;
  href: string;
  active: boolean;
  linkTitle: string;
}[];

export type SocialIcons = {
  [social in SocialMedia]: string;
};

export type SocialMedia =
  | "Github"
  | "Facebook"
  | "Instagram"
  | "LinkedIn"
  | "Mail"
  | "Twitter"
  | "Twitch"
  | "YouTube"
  | "WhatsApp"
  | "Snapchat"
  | "Pinterest"
  | "TikTok"
  | "CodePen"
  | "Discord"
  | "GitLab"
  | "Reddit"
  | "Skype"
  | "Steam"
  | "Telegram"
  | "Mastodon";
