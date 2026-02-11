import { useState } from "react";
import styles from "../Post.module.css";

export default function Form({ post, postsDisatch, setActiveToast }) {
  const [title, setTitle] = useState(post.title);
  const [shortDescription, setShortDescription] = useState(post.shortDescription);
  const [article, setArticle] = useState(post.article.join("\n"));

  function handleTitleChange(e) {
    setTitle(e.target.value);
  }

  function handleShortDescriptionChange(e) {
    setShortDescription(e.target.value);
  }

  function handleArticleChange(e) {
    setArticle(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    // At least one of the fields is empty, if so just do nothing
    if (title.trim() == "" || shortDescription.trim() == "" || article.trim() == "") {
      return;
    }

    let editingPost = {
      ...post,
      title: title,
      shortDescription: shortDescription,
      article: article.split("\n"),
    };

    postsDisatch({ state: "edit", payload: editingPost });
    setActiveToast(true);
  }

  return (
    <form onSubmit={handleSubmit} id="save_edit_post" className={styles.form}>
      <div className={styles.form_sections}>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={title}
          onChange={handleTitleChange}
          minLength={1}
        />

        {/* Show error message on empty value */}
        {title.trim() == "" ? (
          <p className={styles.error_message}>The title should have at least 1 character</p>
        ) : (
          ""
        )}
      </div>

      <div className={styles.form_sections}>
        <label htmlFor="short_description">Short description</label>
        <input
          type="text"
          name="short_description"
          id="short_description"
          value={shortDescription}
          onChange={handleShortDescriptionChange}
          minLength={1}
        />

        {/* Show error message on empty value */}
        {shortDescription.trim() == "" ? (
          <p className={styles.error_message}>
            The short description should have at least 1 character
          </p>
        ) : (
          ""
        )}
      </div>

      <div className={styles.form_sections}>
        <label htmlFor="article">Article</label>
        <textarea
          name="article"
          id="article"
          value={article}
          onChange={handleArticleChange}
          minLength={1}
        ></textarea>

        {/* Show error message on empty value */}
        {article.trim() == "" ? (
          <p className={styles.error_message}>The article should have at least 1 character</p>
        ) : (
          ""
        )}
      </div>

      <button className={styles.save_button}>Save changes</button>
    </form>
  );
}
