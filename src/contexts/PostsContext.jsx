import { createContext, useReducer } from "react";
import posts from "../data/posts.json";

const PostsContext = createContext();

function PostsProvider({ children }) {
  function postReducer(state, action) {
    if (action.state == "edit") {
      const postData = action.payload;

      let updatePosts = [...state];
      const editingPost = updatePosts.filter((post) => {
        return post.id == postData.id;
      });

      // Has no post to edit
      if (editingPost == null) {
        console.error(
          `Error while trying to edit a post with an id(${postData.id}), and was not found in posts.`,
        );
        return state;
      }

      updatePosts[postData.id - 1] = {
        ...editingPost[0],
        title: postData.title,
        shortDescription: postData.shortDescription,
        article: postData.article,
      };

      console.log(updatePosts);
      localStorage.setItem("posts", JSON.stringify(updatePosts));

      return updatePosts;
    }
    return state;
  }

  function initialPostState(posts) {
    const saved = localStorage.getItem("posts");

    if (saved == null) {
      return posts;
    }

    return JSON.parse(saved);
  }

  const [postsState, postsDisatch] = useReducer(postReducer, posts, initialPostState);

  return (
    <PostsContext.Provider value={{ postsState, postsDisatch }}>{children}</PostsContext.Provider>
  );
}

export { PostsProvider, PostsContext };
