import { Link, redirect, useParams } from "react-router";
import styles from "./Post.module.css";
import Form from "./partials/Form";
import { useContext } from "react";
import { PostsContext } from "../../../contexts/PostsContext";

export default function Post() {
  const { postsState, postsDisatch } = useContext(PostsContext);
  const { id } = useParams();
  const getPost = postsState.filter((post) => post.id == id);

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

      <Form post={post} postsDisatch={postsDisatch} />
    </>
  );
}
