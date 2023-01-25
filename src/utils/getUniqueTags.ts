import type { Frontmatter } from "../types";
import { slugify } from "./slugify";

function getUniqueTags(posts: Frontmatter[]) {
  let tags: string[] = [];
  const filteredPosts = posts.filter(({ data }) => !data.isDraft);
  filteredPosts.forEach((post) => {
    tags = [...tags, ...post.data.tags]
      .map((tag) => slugify(tag))
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      );
  });

  return tags;
}

export default getUniqueTags;
