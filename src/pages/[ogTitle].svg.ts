import type { APIRoute } from "astro";
import { CollectionEntry, getCollection } from "astro:content";

import extractTitle from "@utils/extractTitle";
import generateOgImage from "@utils/generateOgImage";

export const get: APIRoute = async ({ params }) => ({
  body: await generateOgImage(params.ogTitle),
});

export async function getStaticPaths() {
  const allPosts = await getCollection(
    "posts",
    (post): post is CollectionEntry<"posts"> => {
      const { data } = post;

      return (
        data.isDraft === false &&
        typeof data.banner === "string" &&
        data.banner.length >= 1
      );
    }
  );

  return allPosts.map(({ data }) => ({
    params: { ogTitle: extractTitle(data) },
  }));
}
