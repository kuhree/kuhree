import type { CollectionEntry } from 'astro:content'
import { slug as slugger } from 'github-slugger'
import type { Frontmatter } from 'src/content/config'

/**
 * Extract N items from a posts frontmatter to use as a title
 */
export function extractTitle(
  entry:
    | Pick<CollectionEntry<'posts'>['data'], 'aliases'>
    | Pick<CollectionEntry<'work'>['data'], 'title'>,
  limit = 1,
  joint = ', '
) {
  if ('aliases' in entry) {
    const { aliases } = entry

    if (typeof aliases === 'undefined') {
      return 'Untitled'
    } else if (typeof aliases === 'string') {
      return aliases
    } else if (limit > 1) {
      return aliases.slice(0, limit).join(joint)
    } else {
      return aliases[0]
    }
  } else {
    return entry.title
  }
}

type SlugInput = string | Frontmatter

export function slugify(item: SlugInput): string {
  if (typeof item === 'string') {
    return slugger(item)
  } else if (extractTitle(item.data)) {
    return extractTitle(item.data)
  } else {
    return '/404'
  }
}

export function slugifyMany(list: SlugInput[]) {
  return list.map(slugify)
}

export function getPageNumbers(numberOfPosts: number) {
  const numberOfPages = numberOfPosts / Number(4)

  let pageNumbers: number[] = []
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i]
  }

  return pageNumbers
}

export default getPageNumbers

export function sortContent(content: Frontmatter[]) {
  return content
    .filter((entry) =>
      'isDraft' in entry.data ? !entry.data.isDraft : entry.data.publishedAt
    )
    .sort((a, b) => {
      const aDate = 'publishedAt' in a.data ? a.data.publishedAt : new Date()
      const bDate = 'publishedAt' in b.data ? b.data.publishedAt : new Date()

      return (
        Math.floor(new Date(bDate).getTime() / 1000) -
        Math.floor(new Date(aDate).getTime() / 1000)
      )
    })
}

export function getContentByTag(posts: Frontmatter[], tag: string) {
  return posts.filter((post) => {
    const { tags } = post.data

    if (tags) {
      return slugifyMany(tags).includes(tag)
    }

    return false
  })
}

export function getUniqueTags(content: Frontmatter[]) {
  let tags: string[] = []
  const filteredContent = content.filter((entry) =>
    'isDraft' in entry.data ? !entry.data.isDraft : entry.data.publishedAt
  )

  filteredContent.forEach((post) => {
    tags = [...tags, ...(post.data.tags ?? [])]
      .map((tag) => slugify(tag))
      .filter(
        (value: string, index: number, self: string[]) =>
          self.indexOf(value) === index
      )
  })

  return tags
}
