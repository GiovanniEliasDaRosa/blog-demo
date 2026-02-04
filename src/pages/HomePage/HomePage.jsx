import styles from "./HomePage.module.css";
import Posts from "./partials/Posts";

export default function HomePage() {
  return (
    <>
      <h2>Latest posts</h2>

      <Posts />
    </>
  );
}
