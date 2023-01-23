import type { APIRoute, MarkdownInstance } from "astro";

import generateOgImage from "@utils/generateOgImage";
import type { Frontmatter } from "@types";
import extractTitle from "@utils/extractTitle";

export const get: APIRoute = async ({ params }) => ({
  body: await generateOgImage(params.ogTitle),
});

const postImportResult = import.meta.glob<MarkdownInstance<Frontmatter>>(
  "../contents/**/**/*.md",
  { eager: true }
);
const posts = Object.values(postImportResult);

export function getStaticPaths() {
  return posts
    .filter(({ frontmatter }) => !frontmatter.draft)
    .filter(({ frontmatter }) => !frontmatter.banner)
    .map(({ frontmatter }) => ({
      params: { ogTitle: extractTitle(frontmatter) },
    }));
}
