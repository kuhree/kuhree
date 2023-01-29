// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";

import { PostFrontmatter } from "./schemas";

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: defineCollection({
    schema: PostFrontmatter,
  }),
};
