import type { Frontmatter } from "../types";

function getSortedPosts(posts: Frontmatter[]) {
  return posts
    .filter(({ data: { isDraft } }) => !isDraft)
    .sort(
      (a, b) =>
        Math.floor(new Date(b.data.publishedAt).getTime() / 1000) -
        Math.floor(new Date(a.data.publishedAt).getTime() / 1000)
    );
}

export default getSortedPosts;
