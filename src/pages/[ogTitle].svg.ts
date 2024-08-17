import type { APIRoute } from 'astro'
import { generateOgImage } from '../lib/og-image'

export const GET: APIRoute = async ({ params }) => {
  return new Response(await generateOgImage(params.ogTitle))
}