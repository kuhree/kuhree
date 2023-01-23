import extractTitle from "@utils/extractTitle";
import type { Frontmatter } from "@types";
import Datetime from "./Datetime";

export interface Props {
  href?: string;
  post: Frontmatter;
  secHeading?: boolean;
}

const styles = {
  cardContainer: "my-6",
  titleLink:
    "text-skin-accent font-medium text-lg underline-offset-4 decoration-dashed focus-visible:no-underline focus-visible:underline-offset-0 inline-block",
  titleHeading: "font-medium text-lg decoration-dashed hover:underline",
};

export default function Card({ href, post, secHeading = true }: Props) {
  const title = extractTitle(post);

  return (
    <li className={styles.cardContainer}>
      <a href={href} className={styles.titleLink}>
        {secHeading ? (
          <h2 className={styles.titleHeading}>{title}</h2>
        ) : (
          <h3 className={styles.titleHeading}>{title}</h3>
        )}
      </a>
      <Datetime datetime={post.datetime} />
      <p>{post.description}</p>
    </li>
  );
}
