import rss from "@astrojs/rss";

import { SITE } from "@config";
import extractTitle from "@utils/extractTitle";
import { slugify } from "@utils/slugify";
import { getCollection } from "astro:content";

export async function get() {
  const posts = await getCollection("writing");

  return rss({
    title: SITE.title,
    description: SITE.description,
    site: SITE.website,
    items: posts
      .filter(({ data }) => !data.isDraft)
      .map((post) => ({
        link: `posts/${slugify(post)}`,
        title: extractTitle(post.data),
        description: post.data.description,
        pubDate: new Date(post.data.publishedAt),
      })),
  });
}
