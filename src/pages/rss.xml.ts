import rss from '@astrojs/rss'

import { SITE } from '../config'
import { extractTitle, slugify, sortContent } from 'src/lib/content'
import { getCollection } from 'astro:content'
import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const notes = await getCollection('notes')
  const work = await getCollection('work')

  return rss({
    title: SITE.meta.title,
    description: SITE.meta.description,
    site: SITE.meta.canonical,
    items: sortContent([...notes, ...work]).map((entry) => ({
      link: `${entry.collection}/${slugify(entry)}`,
      title: extractTitle(entry.data),
      description: entry.data.description,
      pubDate: new Date(entry.data.publishedAt)
    }))
  })
}
