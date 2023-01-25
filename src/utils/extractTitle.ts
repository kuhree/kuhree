import type { Frontmatter } from "@types";

/**
 * Extract N items from a posts frontmatter to use as a title
 */
function extractTitle(
  { aliases }: Pick<Frontmatter["data"], "aliases">,
  amount = 1,
  joint = ", "
) {
  if (typeof aliases === "undefined") {
    return "Untitled";
  } else if (typeof aliases === "string") {
    return aliases;
  } else if (amount > 1) {
    return aliases.slice(0, amount).join(joint);
  } else {
    return aliases[0];
  }
}

export default extractTitle;
