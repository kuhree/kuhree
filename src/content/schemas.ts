import { z } from "astro:content";

import { SITE, ASSETS } from "../config";

// Define schemas for each collection you'd like to validate.

export type PostFrontmatter = z.infer<typeof PostFrontmatter>;
export const PostFrontmatter = z.object({
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
});
