import { slug as slugger } from "github-slugger";

import type { Frontmatter } from "@types";
import extractTitle from "./extractTitle";

type SlugInput = string | Frontmatter;

export function slugify(item: SlugInput) {
  if (typeof item === "string") {
    return slugger(item);
  } else {
    return slugger(item.slug ?? extractTitle(item));
  }
}

export function slugifyMany(list: SlugInput[]) {
  return list.map((str) => slugify(str));
}
