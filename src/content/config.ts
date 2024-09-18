import { defineCollection, z, type CollectionEntry } from 'astro:content'

import { SITE } from '../config'

// Define schemas for each collection you'd like to validate.

export type WorkFrontmatter = z.infer<typeof WorkFrontmatter>
export const WorkFrontmatter = z.object({
  isDraft: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
  title: z.string(),
  company: z.string().optional(),
  role: z.string().optional(),
  description: z.string(),
  publishedAt: z.coerce.date(),
  endedAt: z.string().max(0).or(z.coerce.date()),
  tags: z.array(z.string()),
  banner: z.string(),
  bannerAlt: z.string().optional(),
  links: z
    .array(
      z.object({
        name: z.string().min(1),
        url: z.string().url()
      })
    )
    .optional()
})

export type NoteFrontmatter = z.infer<typeof NoteFrontmatter>
export const NoteFrontmatter = z.object({
  isDraft: z.boolean().default(true),
  isFeatured: z.boolean().default(false),
  publishedAt: z.date().or(z.coerce.date()),
  author: z.string().default(SITE.owner.name),

  banner: z.string().min(1).default(SITE.assets.logo.src),
  bannerAlt: z.string().min(1).default(SITE.assets.logo.alt),
  aliases: z.string().array().min(1),
  description: z.string().optional(),
  tags: z.array(z.string()).optional(),
  footnote: z.string().optional(),
  links: z
    .array(
      z.object({
        name: z.string().min(1),
        url: z.string().url()
      })
    )
    .optional()
})

export type Frontmatter = CollectionEntry<'notes' | 'work'>

export const collections = {
  work: defineCollection({
    type: 'content',
    schema: WorkFrontmatter
  }),
  notes: defineCollection({
    type: 'content',
    schema: NoteFrontmatter
  })
}
