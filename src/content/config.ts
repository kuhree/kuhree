import { defineCollection, z, type CollectionEntry } from 'astro:content'

import { SITE } from '../config'

// Define schemas for each collection you'd like to validate.

export type WorkFrontmatter = z.infer<typeof WorkFrontmatter>
export const WorkFrontmatter = z.object({
  title: z.string(),
  company: z.string().optional(),
  role: z.string().optional(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  tags: z.array(z.string()),
  banner: z.string(),
  banner_alt: z.string().optional()
})

export type PostFrontmatter = z.infer<typeof PostFrontmatter>
export const PostFrontmatter = z.object({
  isDraft: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
  publishedAt: z.date().or(z.string().transform((str) => new Date(str))),
  author: z.string().default(SITE.owner.name),

  banner: z.string().min(1).default(SITE.assets.logo.src),
  banner_alt: z.string().min(1).default(SITE.assets.logo.alt),
  aliases: z.string().array().min(1),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  footnote: z.string().optional()
})

export type Frontmatter = CollectionEntry<'posts' | 'work'>

export const collections = {
  work: defineCollection({
    type: 'content',
    schema: WorkFrontmatter
  }),
  posts: defineCollection({
    type: 'content',
    schema: PostFrontmatter
  })
}
