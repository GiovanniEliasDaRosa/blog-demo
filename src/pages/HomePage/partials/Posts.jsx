import { useContext } from "react";
import styles from "./Posts.module.css";
import { PostsContext } from "../../../contexts/PostsContext";
import Post from "./Post";

export default function Posts() {
  const { postsState } = useContext(PostsContext);

  return (
    <div className={styles.posts}>
      {postsState.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
