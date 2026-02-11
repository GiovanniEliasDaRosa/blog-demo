import { Link, redirect, useParams } from "react-router";
import styles from "./Post.module.css";
import Form from "./partials/Form";
import { useContext, useEffect, useRef, useState } from "react";
import { PostsContext } from "../../../contexts/PostsContext";

export default function Post() {
  const { postsState, postsDisatch } = useContext(PostsContext);
  const { id } = useParams();
  const getPost = postsState.filter((post) => post.id == id);
  const [showToast, setShowToast] = useState(false);
  const [activeToast, setActiveToast] = useState(false);
  const toastTimeoutRef = useRef(null);

  useEffect(() => {
    if (!activeToast) return;
    clearTimeout(toastTimeoutRef.current);

    function showToast() {
      setShowToast(true);
    }

    toastTimeoutRef.current = setTimeout(() => {
      setShowToast(false);
      setActiveToast(false);
    }, 2500);

    showToast();

    // Clear timeout on unmount, this prevents bugs
    return () => {
      clearTimeout(toastTimeoutRef.current);
    };
  }, [activeToast]);
  // The post doesn't exist
  if (getPost == null) {
    return redirect("..");
  }

  const post = getPost[0];

  return (
    <>
      <div className="main_links">
        <Link className="button" relative="path" to="..">
          Cancel
        </Link>
        <button relative="path" to="edit" form="save_edit_post">
          Save changes
        </button>
      </div>

      {showToast ? <div className={styles.toast}>Post saved!</div> : ""}

      <Form post={post} postsDisatch={postsDisatch} setActiveToast={setActiveToast} />
    </>
  );
}
