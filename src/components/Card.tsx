import type { Frontmatter } from "@types";
import extractTitle from "@utils/extractTitle";
import Datetime from "./Datetime";

export interface Props {
  href?: string;
  post: Frontmatter;
}

const styles = {
  cardContainer: "my-6",
  titleLink:
    "text-skin-accent font-medium text-lg underline-offset-4 decoration-dashed focus-visible:no-underline focus-visible:underline-offset-0 inline-block",
  titleHeading: "font-medium text-lg decoration-dashed hover:underline",
};

export default function Card({ href, post }: Props) {
  const title = extractTitle(post.data);

  return (
    <li className={styles.cardContainer}>
      <a href={href} className={styles.titleLink}>
        <h3 className={styles.titleHeading}>{title}</h3>
      </a>

      <Datetime datetime={post.data.publishedAt} />
      <p>{post.data.description}</p>
    </li>
  );
}
