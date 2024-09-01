import type { CollectionEntry } from 'astro:content'
import { slug as slugger } from 'github-slugger'
import type { Frontmatter } from 'src/content/config'

/**
 * Extract N items from a notes frontmatter to use as a title
 */
export function extractTitle(
  entry:
    | Pick<CollectionEntry<'notes'>['data'], 'aliases'>
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
  let slug = item
  if (typeof item === 'string') {
    slug = slugger(item)
  } else if (extractTitle(item.data)) {
    slug = extractTitle(item.data)
  } else {
    slug = '/404'
  }

  return slug.replace('--', '-')
}

export function slugifyMany(list: SlugInput[]) {
  return list.map(slugify)
}

export function getPageNumbers(numberOfNotes: number) {
  const numberOfPages = numberOfNotes / Number(4)

  let pageNumbers: number[] = []
  for (let i = 1; i <= Math.ceil(numberOfPages); i++) {
    pageNumbers = [...pageNumbers, i]
  }

  return pageNumbers
}

export function truncate(input: string, wordLimit = 32) {
  const inputSplitBySpace = input?.split(' ')

  return inputSplitBySpace
    .slice(0, wordLimit) // limit number of words
    .concat(inputSplitBySpace.length >= wordLimit ? '...' : '') // adds '...' if applicable
    .join(' ') // rejoin to array
}

export function sortContent(content: Frontmatter[]) {
  return content
    .filter(filterContentEntry)
    .sort((a, b) => {
      const aDate = 'publishedAt' in a.data ? a.data.publishedAt : new Date()
      const bDate = 'publishedAt' in b.data ? b.data.publishedAt : new Date()

      return (
        Math.floor(new Date(bDate).getTime() / 1000) -
        Math.floor(new Date(aDate).getTime() / 1000)
      )
    })
}

function filterContentEntry(entry: Frontmatter): boolean {
  if (import.meta.env.DEV) {
    return true
  }

  return 'isDraft' in entry.data ? !entry.data.isDraft : false

}

export function getContentByTag(notes: Frontmatter[], tag: string) {
  return notes
    .filter(filterContentEntry)
    .filter((post) => {
    const { tags } = post.data

    if (tags) {
      return slugifyMany(tags).includes(tag)
    }

    return false
  })
}

export function getUniqueTags(content: Frontmatter[]) {
  let tags: string[] = []
  const filteredContent = content
    .filter(filterContentEntry)
    .filter((entry) => {
      if ('isDraft' in entry.data) {
        return !entry.data.isDraft
      }

      return true
    }
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

export function groupContentByTag(content: Frontmatter[]) {
  const contentByTag: Array<[string, Frontmatter[]]> = content
    .filter(filterContentEntry)
    .reduce(
    (prev, curr) => {
      const tags = getUniqueTags([curr])

      if (tags?.length) {
        for (const tag of tags) {
          const currIndex = prev.findIndex((entry) => entry[0] === tag)

          if (prev[currIndex]) {
            prev[currIndex][1].push(curr)
          } else {
            prev[prev.length] = [tag, [curr]]
          }
        }
      }

      return prev
    },
    [] as Array<[string, Frontmatter[]]>
  )

  return contentByTag
}
