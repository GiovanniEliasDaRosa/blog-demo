import { Link } from "react-router";
import styles from "./Posts.module.css";
import BetterImage from "../../../components/BetterImage/BetterImage";

export default function Post({ post }) {
  return (
    <Link to={`post/${post.id}`} className={styles.post} key={post.id}>
      <BetterImage src={`images/${post.image}`} alt="" />

      <div className={styles.postContent}>
        <h3>{post.title}</h3>
        <p>{post.shortDescription}</p>
      </div>
    </Link>
  );
}
