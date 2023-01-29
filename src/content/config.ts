// 1. Import utilities from `astro:content`
import { defineCollection } from "astro:content";

// `_` prefix required by Astro. Do NOT rename.
import { PostFrontmatter } from "./_schemas";

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  posts: defineCollection({
    schema: PostFrontmatter,
  }),
};
