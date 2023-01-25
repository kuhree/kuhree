import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

import extractTitle from "@utils/extractTitle";
import generateOgImage from "@utils/generateOgImage";

export const get: APIRoute = async ({ params }) => ({
  body: await generateOgImage(params.ogTitle),
});

export async function getStaticPaths() {
  const allPosts = await getCollection("blog", ({ data }) => {
    return (
      data.isDraft === false &&
      typeof data.banner === "string" &&
      data.banner.length >= 1
    );
  });

  return allPosts.map(({ data }) => ({
    params: { ogTitle: extractTitle(data) },
  }));
}
