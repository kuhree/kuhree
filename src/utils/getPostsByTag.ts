import type { Frontmatter } from "../types";
import { slugifyMany } from "./slugify";

function getPostsByTag(posts: Frontmatter[], tag: string) {
  return posts.filter((post) => slugifyMany(post.data.tags).includes(tag));
}

export default getPostsByTag;
