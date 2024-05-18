import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import tailwindTypography from '@tailwindcss/typography'
import sitemap from '@astrojs/sitemap'
import robotsTxt from 'astro-robots-txt'
import sentry from '@sentry/astro'
import preact from '@astrojs/preact'
import vercel from '@astrojs/vercel/serverless'
import node from '@astrojs/node'
import remarkToc from 'remark-toc'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'

const ADAPTER = process.env.ASTRO_ADAPTER?.toLowerCase()

// https://astro.build/config
export default defineConfig({
  site: 'https://kharijohnson.dev/',
  outDir: 'dist',
  publicDir: 'public',
  output: 'hybrid',
  plugins: [tailwindTypography],
  markdown: {
    // Applied to .md and .mdx files
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeSlug, [rehypeAutolinkHeadings, { behavior: 'wrap' }]],
    shikiConfig: {
      // Choose from Shiki's built-in themes (or add your own)
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'github-dark'
    }
  },
  integrations: [
    preact({
      compat: true
    }),
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,
      nesting: true
    }),
    sitemap(),
    robotsTxt(),
    sentry({
      dsn: 'https://7ae73d6c026782eb551f3d230cf3f342@o4504175875194880.ingest.sentry.io/4506813730062336',
      tracesSampleRate: 0.75,
      replaysSessionSampleRate: 0.2,
      replaysOnErrorSampleRate: 1.0,
      sourceMapsUploadOptions: {
        project: 'www',
        authToken: process.env.SENTRY_AUTH_TOKEN
      }
    })
  ],
  adapter:
    ADAPTER === 'node'
      ? node({
          mode: 'standalone'
        })
      : vercel({
          webAnalytics: { enabled: true }
        })
})
