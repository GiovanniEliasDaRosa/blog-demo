import styles from "./AboutPage.module.css";
import BetterImage from "../../components/BetterImage/BetterImage";
import { useContext } from "react";
import { PostsContext } from "../../contexts/PostsContext";

export default function AboutPage() {
  const { postsState } = useContext(PostsContext);

  return (
    <>
      <section className={styles.section}>
        <h2>About</h2>
        <p>
          This is a simple blog build with <strong>React and Vite</strong> with placeholder content,
          that means some classic lorem ipsum filler text.
        </p>
      </section>

      <div className={styles.section}>
        <h2>Image credits</h2>
        <p>The images used are from Unsplash.</p>

        <div className={styles.image_links}>
          {postsState.map((post) => (
            <a className="button" href={post.image.href}>
              <BetterImage src={`images/${post.image.src}`} alt={post.image.alt} />
              <span>Photo by {post.image.author}</span>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
