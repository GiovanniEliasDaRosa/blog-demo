import { useContext } from "react";
import { useParams } from "react-router";
import { PostsContext } from "../../contexts/PostsContext";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import styles from "./PostPage.module.css";

export default function PostPage() {
  const { postsState } = useContext(PostsContext);
  const { id } = useParams();
  const post = postsState[id - 1];

  // The post doesn't exist
  if (post == null) {
    return (
      <NotFoundPage
        info={{ title: "Post not found", description: "The post was deleted or doesn't exist" }}
      />
    );
  }

  return (
    <>
      <img
        className={`${styles.post_img} breakout`}
        src={`${import.meta.env.BASE_URL}assets/images/${post.image}`}
        alt=""
      />

      <div className={`${styles.header} full_width`}>
        <div className={styles.tags}>
          {post.tags.map((tag) => (
            <span>{tag}</span>
          ))}
        </div>
        <h1>{post.title}</h1>
        <p>{post.shortDescription}</p>
      </div>

      <div className={styles.article}>
        {post.article.map((article) => (
          <p>{article}</p>
        ))}
      </div>
    </>
  );
}
