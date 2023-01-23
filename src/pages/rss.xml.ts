import rss from "@astrojs/rss";
import type { MarkdownInstance } from "astro";

import { SITE } from "@config";
import type { Frontmatter } from "@types";
import { slugify } from "@utils/slugify";
import extractTitle from "@utils/extractTitle";

const postImportResult = import.meta.glob<MarkdownInstance<Frontmatter>>(
  "../contents/**/**/*.md",
  { eager: true }
);

const posts = Object.values(postImportResult);

export const get = () =>
  rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.website,
    items: posts
      .filter(({ frontmatter }) => !frontmatter.draft)
      .map(({ frontmatter }) => ({
        link: `posts/${slugify(frontmatter)}`,
        title: extractTitle(frontmatter),
        description: frontmatter.description,
        pubDate: new Date(frontmatter.datetime),
      })),
  });
