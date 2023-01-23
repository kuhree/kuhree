import { slug as slugger } from "github-slugger";
import type { Frontmatter } from "src/types";

type SlugInput = string | Frontmatter;

export function slugify(item: SlugInput) {
  if (typeof item === "string") {
    return slugger(item);
  } else {
    return slugger(item.slug ?? item.title);
  }
}

export function slugifyMany(list: SlugInput[]) {
  return list.map((str) => slugify(str));
}
