import { slug as slugger } from "github-slugger";

import type { Frontmatter } from "@types";

type SlugInput = string | Frontmatter;

export function slugify(item: SlugInput): string {
  if (typeof item === "string") {
    return slugger(item);
  } else if (item.slug) {
    return item.slug;
  } else {
    return "/404";
  }
}

export function slugifyMany(list: SlugInput[]) {
  return list.map((str) => slugify(str));
}
