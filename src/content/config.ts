// 1. Import utilities from `astro:content`
import { defineCollection, z } from "astro:content";
import { ASSETS, SITE } from "../config";

// 2. Define a schema for each collection you'd like to validate.
const writingCollection = defineCollection({
  schema: z.object({
    isDraft: z.boolean().default(true),
    isFeatured: z.boolean().default(false),
    publishedAt: z.date().or(z.string().transform((str) => new Date(str))),
    author: z.string().default(SITE.author),

    banner: z.string().min(1).default(ASSETS.logo.src("png")),
    banner_alt: z.string().min(1).default(ASSETS.logo.alt),
    aliases: z.string().array().min(1),
    description: z.string().optional(),
    tags: z.array(z.string()).optional(),
    footnote: z.string().optional(),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  writing: writingCollection,
};
