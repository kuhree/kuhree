import type { MarkdownInstance } from "astro";

import { slugifyMany } from "./slugify";
import type { Frontmatter } from "../types";

function getPostsByTag(posts: MarkdownInstance<Frontmatter>[], tag: string) {
  return posts.filter((post) =>
    slugifyMany(post.frontmatter.tags).includes(tag)
  );
}

export default getPostsByTag;
