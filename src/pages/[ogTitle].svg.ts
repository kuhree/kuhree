import type { APIRoute } from 'astro'
import { getCollection } from 'astro:content'

import { extractTitle } from '../lib/content'
import { generateOgImage } from '../lib/og-image'

export const GET: APIRoute = async ({ params }) => {
  return new Response(await generateOgImage(params.ogTitle))
}

export async function getStaticPaths() {
  const allPosts = await getCollection('posts', (post) => {
    const { data } = post

    return (
      data.isDraft === false &&
      typeof data.banner === 'string' &&
      data.banner.length >= 1
    )
  })

  const allWork = await getCollection('work', (project) => {
    const { data } = project
    return data.publishedAt
  })

  return [...allPosts, ...allWork].map(({ data }) => ({
    params: { ogTitle: extractTitle(data) }
  }))
}
