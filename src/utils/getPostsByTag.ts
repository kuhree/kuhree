import type { Frontmatter } from "../types";
import { slugifyMany } from "./slugify";

function getPostsByTag(posts: Frontmatter[], tag: string) {
  return posts.filter((post) => {
    const { tags } = post.data;
    if (tags) {
      return slugifyMany(tags).includes(tag);
    }

    return false;
  });
}

export default getPostsByTag;
